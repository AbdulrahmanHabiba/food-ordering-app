import React from 'react';
import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import {getBestSellers} from "@/server/db/product";

const BestSellers = async () => {

    const bestSellers = await getBestSellers()

    return (
        <section>
            <div className='container'>
                <div className='text-center mb-4'>
                    <MainHeading
                        subTitle={"check Out"}
                        title={"Our Best Sellers"}
                    />
                </div>
                <Menu items={bestSellers} />

            </div>
        </section>
    );
};

export default BestSellers;