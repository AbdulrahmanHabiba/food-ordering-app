import {db} from "@/lib/prisma";
import {cache} from "@/lib/cache";

export const getBestSellers = cache(
    (limit? : number | undefined)=>{
    return db.product.findMany({
        where :{
           orders :{
               some : {}
           }
        }
        ,orderBy: {
           orders : {
               _count : 'desc'
           }
        },
        include: {
            sizes: true,
            extras: true,
        } ,
        take : limit

    })
} , ['best-sellers'] , {revalidate : 3600}
)

export const getProductsByCategory = cache(
    ()=>{
        return db.category.findMany({
            include : {
                products : {
                    include : {
                        sizes : true,
                        extras : true
                    }
                }
            }
        })
    } , ['products-by-category'] , {revalidate : 3600}
)

