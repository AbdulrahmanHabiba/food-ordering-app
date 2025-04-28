"use client";
import React, {useState} from 'react';
import {Routes} from "@/constants/enums";
import Link from "@/components/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {Menu, XIcon} from "lucide-react";
import CartButton from "@/components/header/cart-button";

const Navbar = () => {
    const links = [
        {id: crypto.randomUUID(), title: "Menu", href: Routes.MENU},
        {id: crypto.randomUUID(), title: "About", href: Routes.ABOUT},
        {id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT},
        // {id: crypto.randomUUID(), title: "Login", href: Routes.AUTH}
    ]
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex-1 flex gap-5 justify-end">
                <span className="block lg:hidden mt-1">
                    <CartButton/>
                </span>
            <Button
                variant="secondary"
                size="sm"
                className="lg:hidden"
                onClick={() => setOpenMenu(true)}
            >
                <Menu className="!w-6 !h-6"/>
            </Button>

            <ul
                className={`fixed lg:static ${
                    openMenu ? " left-0 z-50" : "-left-full"
                } top-0 px-10 py-10 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
            >
                <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-10 right-10 lg:hidden"
                    onClick={() => setOpenMenu(false)}
                >
                    <XIcon className="!w-6 !h-6"/>
                </Button>

                {links.map((link) => (
                    <li key={link.id}>
                        <Link
                            className={` 
                            ${link.href === Routes.AUTH ? `${buttonVariants({size: "lg"})} !px- !rounded-full` : " hover:text-primary duration-200 transition-colors"}
                            text-accent font-semibold `}
                            href={link.href}>{link.title}</Link>
                    </li>
                ))}
                <span className="lg:block hidden ">
                    <CartButton/>
                </span>
            </ul>

        </nav>
    );
};

export default Navbar;