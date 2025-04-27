import React from 'react';
import Image from 'next/image';
import {ArrowRightCircle} from 'lucide-react';
import {Routes} from '@/constants/enums';
import Link from "@/components/link";
import {buttonVariants} from "@/components/ui/button";
import AnimatedComponent from "@/app/_components/AnimatedComponent";

const Hero = () => {
    return (
        <section className="section-gap">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatedComponent>
                <div className="flex flex-col gap-4 md:py-12">
                    <h1 className="text-4xl font-semibold ">Slice into Happiness </h1>
                    <p className="text-accent">Craving pizza? We've got you covered with fresh ingredients, endless
                        flavors, and the fastest
                        delivery. Your pqerfect slice is just a tap away</p>
                    <div className='flex items-center gap-4'>
                        <Link
                            href={`/${Routes.MENU}`}
                            className={`${buttonVariants({
                                size: 'lg',
                            })} space-x-2 !px-4 !rounded-full uppercase`}
                        >
                            Order Now
                            <ArrowRightCircle
                                className="!w-5 !h-5 "
                            />
                        </Link>
                        <Link
                            href={`/${Routes.ABOUT}`}
                            className='flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold'
                        >
                            Learn More
                            <ArrowRightCircle
                                className="!w-5 !h-5 "
                            />
                        </Link>
                    </div>
                </div>
                </AnimatedComponent>
                <div className="relative hidden md:block  ">
                    <Image
                        src='/pizza.png'
                        alt='Pizza'
                        fill
                        loading='eager'
                        priority
                        className='object-contain'

                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;