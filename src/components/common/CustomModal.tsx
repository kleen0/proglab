"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
}

export default function CustomModal({ isOpen, onClose, title, children }: Props) {
    const [mounted, setMounted] = useState(false);

    // Исправленный useEffect
    useEffect(() => {
        // Используем requestAnimationFrame для асинхронного обновления состояния
        const initModal = () => {
            setMounted(true);
            let root = document.getElementById("custom-modal-root");
            if (!root) {
                root = document.createElement("div");
                root.id = "custom-modal-root";
                document.body.appendChild(root);
            }
        };

        const rafId = requestAnimationFrame(initModal);
        return () => cancelAnimationFrame(rafId);
    }, []);

    if (!mounted) return null;

    if (!isOpen) return null;

    const modal = (
        <div
            className="cm-overlay"
            onMouseDown={(e) => {
                if ((e.target as HTMLElement).classList.contains("cm-overlay")) onClose();
            }}
            role="dialog"
            aria-modal="true"
        >
            <div className="cm-panel" onMouseDown={(e) => e.stopPropagation()}>
                <div className="cm-header">
                    <div className="cm-title">{title}</div>
                    <button className="cm-close" onClick={onClose} aria-label="Close">✕</button>
                </div>
                <div className="cm-body">{children}</div>
            </div>

            <style jsx>{`
                .cm-overlay {
                    position: fixed; 
                    inset: 0; 
                    display:flex; 
                    align-items:center; 
                    justify-content:center;
                    background: rgba(0,0,0,0.35); 
                    backdrop-filter: blur(6px); 
                    z-index: 9999; 
                    padding:24px;
                }
                .cm-panel { 
                    width:100%; 
                    max-width:520px; 
                    background:#fff; 
                    border-radius:12px; 
                    box-shadow:0 10px 40px rgba(0,0,0,.25); 
                    overflow:hidden; 
                }
                .cm-header { 
                    display:flex; 
                    align-items:center; 
                    justify-content:space-between; 
                    padding:16px 18px; 
                    border-bottom:1px solid #eee; 
                }
                .cm-title{ 
                    font-size:18px; 
                    font-weight:600; 
                    color:#0f172a 
                }
                .cm-close{ 
                    background:transparent; 
                    border:0; 
                    font-size:18px; 
                    cursor:pointer; 
                    padding:6px 
                }
                .cm-body{ 
                    padding:18px 
                }
                @media (max-width:480px){ 
                    .cm-panel{ 
                        max-width:92% 
                    } 
                }
            `}</style>
        </div>
    );

    const rootEl = document.getElementById("custom-modal-root");
    if (!rootEl) return null; // дополнительная проверка на случай если root не создан

    return createPortal(modal, rootEl);
}