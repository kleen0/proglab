// src/components/UI/forms/RegistrationForm.tsx
"use client";

import React, { useState } from "react";

interface Props {
    onClose: () => void;
    onRegistered?: (email?: string) => void;
}

export default function RegistrationForm({ onClose, onRegistered }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const submit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setErr(null);
        if (!name || !email || !password) { setErr("Заполните все поля"); return; }
        if (password !== password2) { setErr("Пароли не совпадают"); return; }
        setLoading(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            if (res.ok) {
                onRegistered?.(email);
                onClose();
            } else {
                const j = await res.json().catch(() => ({}));
                setErr(j.error || "Ошибка регистрации");
            }
        } catch {
            // Исправлено: удалена неиспользуемая переменная err
            setErr("Ошибка сети (mock). Для демо создайте /api/register или уберите fetch.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={submit} className="cm-form">
            <label className="cm-label">Имя
                <input className="cm-input" value={name} onChange={e => setName(e.target.value)} required />
            </label>
            <label className="cm-label">Email
                <input className="cm-input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <label className="cm-label">Пароль
                <input className="cm-input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            <label className="cm-label">Подтвердите пароль
                <input className="cm-input" type="password" value={password2} onChange={e => setPassword2(e.target.value)} required />
            </label>

            {err && <div className="cm-error">{err}</div>}

            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                <button type="button" className="cm-btn cm-btn-ghost" onClick={onClose}>Отмена</button>
                <button type="submit" className="cm-btn cm-btn-primary" disabled={loading}>
                    {loading ? "Регистрируем..." : "Зарегистрироваться"}
                </button>
            </div>

            <style jsx>{`
                .cm-form { display:flex; flex-direction:column; gap:12px; }
                .cm-label { font-size:13px; color:#334155; display:flex; flex-direction:column; gap:8px; }
                .cm-input { padding:10px 12px; border-radius:8px; border:1px solid #e6e9ef; background:#fbfdff; }
                .cm-error { color:#b91c1c; font-size:13px }
                .cm-btn { padding:10px 14px; border-radius:8px; font-weight:600; border:0; cursor:pointer }
                .cm-btn-ghost { background:#f3f4f6; color:#0f172a; border:1px solid #e6e9ef }
                .cm-btn-primary { background:linear-gradient(90deg,#14b8a6,#0ea5e9); color:#fff }
            `}</style>
        </form>
    );
}