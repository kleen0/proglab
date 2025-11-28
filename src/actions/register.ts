'use server'

import { prisma } from '@/utils/prisma'
import { IFormData } from '@/types'
import { revalidatePath } from 'next/cache'

export async function registerUser(data: IFormData) {
    // Базовая валидация
    if (!data.email || !data.password) {
        throw new Error('Email и пароль обязательны')
    }

    if (data.password.length < 6) {
        throw new Error('Пароль должен содержать минимум 6 символов')
    }

    // Создаем пользователя в БД
    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: data.password, // ВНИМАНИЕ: пароль в открытом виде!
        },
    })

    revalidatePath('/')
    return user
}