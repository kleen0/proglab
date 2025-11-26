// src/components/UI/modals/RegistrationModal.tsx
"use client";

import React from "react";
import CustomModal from "@/components/common/CustomModal";
import RegistrationForm from "@/components/UI/forms/RegistrationForm";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onRegistered?: (email?: string) => void;
}

export default function RegistrationModal({ isOpen, onClose, onRegistered }: Props) {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Регистрация">
            <RegistrationForm onClose={onClose} onRegistered={onRegistered} />
        </CustomModal>
    );
}
