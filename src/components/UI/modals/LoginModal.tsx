// src/components/UI/modals/LoginModal.tsx
"use client";

import React from "react";
import CustomModal from "@/components/common/CustomModal";
import LoginForm from "@/components/UI/forms/LoginForm";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess?: (name?: string) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: Props) {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Вход">
            <LoginForm onClose={onClose} onLoginSuccess={onLoginSuccess} />
        </CustomModal>
    );
}
