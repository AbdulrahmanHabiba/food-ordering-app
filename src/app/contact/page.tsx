import React from 'react';
import Contact from "@/components/contact";
import AnimatedComponent from "@/app/_components/AnimatedComponent";

const ContactPage = () => {
    return (
        <main>
            <AnimatedComponent>
            <Contact />
            </AnimatedComponent>
        </main>
    );
};

export default ContactPage;