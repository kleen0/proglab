// src/components/UI/forms/LoginForm.tsx
"use client";

import React, { useState } from "react";

interface Props {
    onClose: () => void;
    onLoginSuccess?: (name?: string) => void;
}

export default function LoginForm({ onClose, onLoginSuccess }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const submit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setErr(null);
        if (!email || !password) { setErr("Заполните все поля"); return; }
        setLoading(true);

        try {
            // Замените на реальный запрос /api/login если есть backend
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const j = await res.json().catch(() => ({}));
                // Имитируем ответ
                const name = j.name ?? email.split("@")[0];
                if (j.token) localStorage.setItem("auth_token", j.token);
                localStorage.setItem("auth_name", name);
                onLoginSuccess?.(name);
                onClose();
            } else {
                const j = await res.json().catch(() => ({}));
                setErr(j.error || "Неверный логин или пароль");
            }
        } catch {
            // Исправлено: удалена неиспользуемая переменная err
            // Если нет backend — примем любой логин для демонстрации:
            // localStorage.setItem("auth_name", email);
            // onLoginSuccess?.(email.split("@")[0]);
            // onClose();
            setErr("Ошибка сети (mock). Для демо создайте /api/login или уберите fetch.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={submit} className="cm-form">
            <label className="cm-label">
                Email
                <input className="cm-input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>

            <label className="cm-label">
                Пароль
                <input className="cm-input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>

            {err && <div className="cm-error">{err}</div>}

            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                <button type="button" className="cm-btn cm-btn-ghost" onClick={onClose}>Отмена</button>
                <button type="submit" className="cm-btn cm-btn-primary" disabled={loading}>
                    {loading ? "Входим..." : "Войти"}
                </button>
            </div>

            <style jsx>{`
                .cm-form { display:flex; flex-direction:column; gap:12px; }
                .cm-label { font-size:13px; color:#334155; display:flex; flex-direction:column; gap:8px; }
                .cm-input { padding:10px 12px; border-radius:8px; border:1px solid #e6e9ef; background:#fbfdff; font-size:14px; }
                .cm-error { color:#b91c1c; font-size:13px; margin-top:4px }
                .cm-btn { padding:10px 14px; border-radius:8px; font-weight:600; border:0; cursor:pointer }
                .cm-btn-ghost { background:#f3f4f6; color:#0f172a; border:1px solid #e6e9ef }
                .cm-btn-primary { background:linear-gradient(90deg,#14b8a6,#0ea5e9); color:#fff }
            `}</style>
        </form>
    );
}