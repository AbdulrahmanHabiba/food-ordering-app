import React from 'react';
import About from "@/components/about";
import AnimatedComponent from "@/app/_components/AnimatedComponent";
export const dynamic = 'force-dynamic';
const AboutPage = async () => {
    // await seedDatabase()

    return (
        <main>
            <AnimatedComponent>
            <About/>
            </AnimatedComponent>
        </main>
    );
};

export default AboutPage;