export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Контакты</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Мы всегда рады помочь вам и ответить на все ваши вопросы
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    📍
                                </div>
                                <div>
                                    <p className="font-semibold">Адрес</p>
                                    <p>г. Алматы, ул. Примерная, 123</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    📞
                                </div>
                                <div>
                                    <p className="font-semibold">Телефон</p>
                                    <p>+7 (777) 123-45-67</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    🕒
                                </div>
                                <div>
                                    <p className="font-semibold">Часы работы</p>
                                    <p>Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Как нас найти</h2>
                        <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-500">
                            [Карта будет здесь]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}