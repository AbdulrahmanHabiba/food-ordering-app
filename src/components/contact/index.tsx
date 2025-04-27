import React from 'react';
import MainHeading from "@/components/main-heading";
import { Routes } from "@/constants/enums";
import { Mail, Linkedin, Github, Facebook, MessageCircleMore } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section-gap" id={Routes.CONTACT}>
            <div className="container text-center">
                <MainHeading subTitle="Don't Hesitate" title="Contact Me"/>
                <div className='mt-8'>
                    <a className='text-4xl underline text-accent' href='tel:+2012121212'>
                        +201113951795
                    </a>
                </div>
                <div className="mt-10 flex justify-center items-center gap-6 flex-wrap">

                     <a
                        href="https://wa.me/201113951795"
                        target="_blank"
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                    >
                        <MessageCircleMore className="w-6 h-6"/>
                    </a>

                     <a
                        href="https://www.linkedin.com/in/abdulrahman-habiba-b6a34921a"
                        target="_blank"
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                    >
                        <Linkedin className="w-6 h-6"/>
                    </a>

                     <a
                        href="https://github.com/AbdulrahmanHabiba"
                        target="_blank"
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                    >
                        <Github className="w-6 h-6"/>
                    </a>

                     <a
                        href="https://www.facebook.com/abdulrahmanhsan.habiba.3/"
                        target="_blank"
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                    >
                        <Facebook className="w-6 h-6"/>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:abdulrahmanhabibh@gmail.com"
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                    >
                        <Mail className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
