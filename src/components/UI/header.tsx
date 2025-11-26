"use client";

import React, { useState, useEffect } from "react";
import {
    Button
} from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Добавлен правильный импорт Link
import LoginModal from "@/components/UI/modals/LoginModal";
import RegistrationModal from "@/components/UI/modals/RegistrationModal";

export const WhiteLotusLogo = () => (
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">🦷</span>
        </div>
        <div className="flex flex-col leading-none">
            <span className="font-bold text-gray-900 text-sm">Белый Лотос</span>
            <span className="text-teal-600 text-xs">Стоматология</span>
        </div>
    </div>
);

export default function Header() {
    const pathname = usePathname();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    // Ленивый инициализатор: безопасно берём имя из localStorage (только на клиенте)
    const [userName, setUserName] = useState<string | null>(() => {
        try {
            if (typeof window !== "undefined") {
                return localStorage.getItem("auth_name");
            }
        } catch {
            // ignore (например, строгие политики)
        }
        return null;
    });

    // optional: синхронизировать в случае, если другие части приложения меняют localStorage
    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
            if (e.key === "auth_name") {
                setUserName(e.newValue);
            }
            if (e.key === "auth_token" && e.newValue === null) {
                // токен удалён — разлогинились в другом табе
                setUserName(null);
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    const handleLoginSuccess = (name?: string) => {
        if (name) setUserName(name);
    };

    const logout = () => {
        try {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_name");
        } catch { }
        setUserName(null);
    };

    const navItems = [
        { href: "/", label: "Главная" },
        { href: "/services", label: "Услуги" },
        { href: "/doctors", label: "Врачи" },
        { href: "/contacts", label: "Контакты" },
    ];

    return (
        <>
            <header className="w-full bg-white border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-3 items-center h-[70px]">
                        <div className="flex items-center justify-start">
                            <WhiteLotusLogo />
                        </div>

                        <nav className="flex items-center justify-center">
                            <ul className="flex gap-8">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`font-medium text-sm transition-colors duration-200 ${pathname === item.href ? "text-teal-600" : "text-gray-600 hover:text-teal-500"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center justify-end gap-4">
                            {userName ? (
                                <div className="flex items-center gap-4">
                                    <span className="hidden sm:inline-block text-gray-700">Привет, {userName}</span>
                                    <Button onPress={logout} variant="bordered" size="sm">
                                        Выйти
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <Button
                                        onPress={() => setIsLoginModalOpen(true)}
                                        className="text-teal-600 border-teal-600 font-medium text-sm px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors"
                                        variant="bordered"
                                        size="sm"
                                    >
                                        Вход
                                    </Button>

                                    <Button
                                        onPress={() => setIsRegistrationModalOpen(true)}
                                        className="bg-teal-500 text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                                        variant="solid"
                                        size="sm"
                                    >
                                        Регистрация
                                    </Button>
                                </div>
                            )}
                            <Button
                                isDisabled
                                className="bg-teal-500 text-white font-medium text-sm px-5 py-2 rounded-lg opacity-50"
                                variant="solid"
                                size="sm"
                            >
                                Записаться
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLoginSuccess={handleLoginSuccess}
            />
            <RegistrationModal
                isOpen={isRegistrationModalOpen}
                onClose={() => setIsRegistrationModalOpen(false)}
                onRegistered={() => setIsRegistrationModalOpen(false)}
            />
        </>
    );
}