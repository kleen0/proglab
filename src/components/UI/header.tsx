"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { usePathname } from 'next/navigation';

export const WhiteLotusLogo = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🦷</span>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-base">Белый Лотос</span>
                <span className="text-teal-600 text-xs">Стоматология</span>
            </div>
        </div>
    );
};

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Главная" },
        { href: "/services", label: "Услуги" },
        { href: "/doctors", label: "Врачи" },
        { href: "/contacts", label: "Контакты" }
    ];

    return (
        <Navbar
            className="bg-white border-b border-gray-100"
            maxWidth="full"
            shouldHideOnScroll={false}
            height="70px"
        >
            {/* Контакты слева */}
            <NavbarContent justify="start" className="flex-1">
                <NavbarItem className="hidden lg:flex">
                    <a
                        href="tel:+77771234567"
                        className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-sm"
                    >

                    </a>
                </NavbarItem>
            </NavbarContent>

            {/* Логотип и меню по центру */}
            <NavbarContent className="flex items-center gap-12" justify="center">
                {/* Логотип */}
                <NavbarBrand>
                    <WhiteLotusLogo />
                </NavbarBrand>

                {/* Меню с оптимизированным массивом */}
                <NavbarContent className="hidden lg:flex gap-8" justify="center">
                    {navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <Link
                                href={item.href}
                                className={`
                                    font-medium text-sm transition-colors duration-200
                                    ${pathname === item.href
                                        ? 'text-teal-600'
                                        : 'text-gray-600 hover:text-teal-500'
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </NavbarContent>

            {/* Кнопка записи справа */}
            <NavbarContent justify="end" className="flex-1">
                <NavbarItem>
                    <Button
                        isDisabled
                        className="bg-teal-500 text-white font-medium text-sm px-5 py-2 rounded-lg opacity-50"
                        variant="solid"
                    >
                        Записаться
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}