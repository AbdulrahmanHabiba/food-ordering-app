import { PrismaClient, ProductSizes, ExtraIngredients } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedDatabase() {
    console.log('🚀 Starting seed...');
    await prisma.orderProduct.deleteMany(); // أول حاجة نحذفها لأنها مربوطة بـ Order و Product
    await prisma.order.deleteMany();
    await prisma.extra.deleteMany();
    await prisma.size.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const exists = await prisma.product.findFirst();
    if (exists) return; // skip if already seeded

    // 1. Categories
    const categories = await prisma.category.createMany({
        data: [
            { name: 'Classic Pizza' },
            { name: 'Spicy Pizza' },
            { name: 'Vegetarian Pizza' },
            { name: 'Cheese Lovers' },
            { name: 'BBQ Pizza' },
        ],
    });

    // 2. Fetch categories again to get their IDs
    const allCategories = await prisma.category.findMany();

    // Helper: Add product with sizes + extras
    async function createProduct(data: {
        name: string;
        description: string;
        image: string;
        basePrice: number;
        categoryName: string;
        extras: ExtraIngredients[];
    }) {
        const category = allCategories.find(c => c.name === data.categoryName);
        if (!category) return;

        const product = await prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                image: data.image,
                basePrice: data.basePrice,
                categoryId: category.id,
            },
        });

        await prisma.size.createMany({
            data: [
                { name: ProductSizes.SMALL, price: 0, productId: product.id },
                { name: ProductSizes.MEDIUM, price: 2, productId: product.id },
                { name: ProductSizes.LARGE, price: 4, productId: product.id },
            ],
        });

        await prisma.extra.createMany({
            data: data.extras.map(extra => ({
                name: extra,
                price: 1.5,
                productId: product.id,
            })),
        });

        return product;
    }

    // 3. Products
    const products = await Promise.all([
        createProduct({
            name: 'Margherita',
            description: 'Mozzarella, tomato sauce, fresh basil',
            image: '/images/margherita.jpg',
            basePrice: 6.99,
            categoryName: 'Classic Pizza',
            extras: [ExtraIngredients.CHEESE, ExtraIngredients.TOMATO],
        }),
        createProduct({
            name: 'Pepperoni',
            description: 'Spicy pepperoni with cheese',
            image: '/images/pepperoni.jpg',
            basePrice: 8.5,
            categoryName: 'Spicy Pizza',
            extras: [ExtraIngredients.BACON, ExtraIngredients.ONION],
        }),
        createProduct({
            name: 'Veggie Delight',
            description: 'Onions, peppers, mushrooms, olives',
            image: '/images/veggie.jpg',
            basePrice: 7.5,
            categoryName: 'Vegetarian Pizza',
            extras: [ExtraIngredients.ONION, ExtraIngredients.PEPPER],
        }),
        createProduct({
            name: 'Cheese Overload',
            description: '4 kinds of cheese madness',
            image: '/images/cheese.jpg',
            basePrice: 9.99,
            categoryName: 'Cheese Lovers',
            extras: [ExtraIngredients.CHEESE],
        }),
        createProduct({
            name: 'BBQ Chicken',
            description: 'BBQ sauce, chicken, cheese, onions',
            image: '/images/bbq.jpg',
            basePrice: 10.5,
            categoryName: 'BBQ Pizza',
            extras: [ExtraIngredients.BACON, ExtraIngredients.ONION],
        }),
    ]);

    // 4. Fake Order
    const order = await prisma.order.create({
        data: {
            paid: true,
            subTotal: 27.99,
            deliveryFee: 2.0,
            totalPrice: 29.99,
            userEmail: 'customer@example.com',
            phone: '01098765432',
            streetAddress: 'Pizza Street 456',
            postalCode: '45678',
            city: 'Alexandria',
            country: 'Egypt',
        },
    });

    // 5. Order Products
    await prisma.orderProduct.createMany({
        data: [
            {
                orderId: order.id,
                productId: products[0]!.id,
                quantity: 1,
            },
            {
                orderId: order.id,
                productId: products[2]!.id,
                quantity: 2,
            },
        ],
    });

    console.log('✅ Seeding done (dev mode)');
}
