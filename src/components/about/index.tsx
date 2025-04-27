import React from 'react';
import MainHeading from "@/components/main-heading";

const About = () => {
    return (
        <section>
            <div className="container text-center section-gap">
                <MainHeading title={"Our Story"} subTitle={"About Us"}/>
                <div className='text-accent max-w-md mx-auto mt-4 flex flex-col gap-4'>
                    <p>
                        Welcome to our pizza website! We are a family-owned and -operated business dedicated to
                        providing
                    </p>
                    <p>
                        you with the best pizza experience possible. Our mission is to bring you the freshest,
                        highest-quality
                        pizzas to your doorstep, so you can enjoy a slice of heaven on the go.
                    </p>
                    <p>
                        At our pizza website, we take pride in using only the freshest ingredients to create our
                        pizzas. We
                        source our ingredients from local farmers and suppliers, ensuring that our pizzas are
                    </p>
                </div>
                </div>

        </section>
);
};

export default About;