// src/components/UI/forms/RegistrationForm.tsx
"use client";

import React, { useState } from "react";
import { registerUser } from "@/actions/register";

interface Props {
    onClose: () => void;
    onRegistered?: (email?: string) => void;
}

// Интерфейс для ошибки Prisma
interface PrismaError extends Error {
    code?: string;
}

export default function RegistrationForm({ onClose, onRegistered }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const submit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setErr(null);

        if (!email || !password) {
            setErr("Заполните все поля");
            return;
        }
        if (password !== password2) {
            setErr("Пароли не совпадают");
            return;
        }

        setLoading(true);

        try {
            // Используем наше серверное действие
            const result = await registerUser({ email, password });

            // Успешная регистрация
            onRegistered?.(email);
            onClose(); // Закрываем модальное окно

        } catch (error: unknown) {
            // Обработка ошибок от Prisma
            console.error("Registration error:", error);

            // Безопасное приведение типа
            const prismaError = error as PrismaError;

            if (prismaError.code === 'P2002') {
                setErr("Пользователь с таким email уже существует");
            } else {
                setErr(prismaError.message || "Ошибка регистрации");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={submit} className="cm-form">
            <label className="cm-label">Email
                <input
                    className="cm-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                />
            </label>
            <label className="cm-label">Пароль
                <input
                    className="cm-input"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    placeholder="••••••"
                />
            </label>
            <label className="cm-label">Подтвердите пароль
                <input
                    className="cm-input"
                    type="password"
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    required
                    placeholder="••••••"
                />
            </label>

            {err && <div className="cm-error">{err}</div>}

            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <button
                    type="button"
                    className="cm-btn cm-btn-ghost"
                    onClick={onClose}
                    disabled={loading}
                >
                    Отмена
                </button>
                <button
                    type="submit"
                    className="cm-btn cm-btn-primary"
                    disabled={loading}
                >
                    {loading ? "Регистрируем..." : "Зарегистрироваться"}
                </button>
            </div>

            <style jsx>{`
                .cm-form { 
                    display: flex; 
                    flex-direction: column; 
                    gap: 16px; 
                    width: 100%;
                }
                .cm-label { 
                    font-size: 14px; 
                    color: #374151; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 6px; 
                    font-weight: 500;
                }
                .cm-input { 
                    padding: 12px; 
                    border-radius: 8px; 
                    border: 1px solid #d1d5db; 
                    background: #f9fafb;
                    font-size: 14px;
                    transition: all 0.2s;
                }
                .cm-input:focus {
                    outline: none;
                    border-color: #3b82f6;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
                .cm-input::placeholder {
                    color: #9ca3af;
                }
                .cm-error { 
                    color: #dc2626; 
                    font-size: 14px;
                    padding: 12px;
                    background: #fef2f2;
                    border-radius: 8px;
                    border: 1px solid #fecaca;
                    text-align: center;
                }
                .cm-btn { 
                    padding: 12px 20px; 
                    border-radius: 8px; 
                    font-weight: 600; 
                    border: none; 
                    cursor: pointer;
                    font-size: 14px;
                    flex: 1;
                    transition: all 0.2s;
                }
                .cm-btn-ghost { 
                    background: #f3f4f6; 
                    color: #374151; 
                    border: 1px solid #d1d5db;
                }
                .cm-btn-ghost:hover:not(:disabled) {
                    background: #e5e7eb;
                }
                .cm-btn-primary { 
                    background: linear-gradient(135deg, #6366f1, #8b5cf6); 
                    color: #fff;
                }
                .cm-btn-primary:hover:not(:disabled) {
                    opacity: 0.9;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
                }
                .cm-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none !important;
                }
            `}</style>
        </form>
    );
}