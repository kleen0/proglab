export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Герой секция */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Бейдж */}
                        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 px-4 py-2 rounded-full mb-8">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <span className="text-teal-700 font-medium text-sm">Стоматология премиум-класса</span>
                        </div>

                        {/* Заголовок */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Здоровые улыбки
                            <span className="block text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text mt-2">
                                на всю жизнь
                            </span>
                        </h1>

                        {/* Описание */}
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Современная стоматология с заботой о вашем комфорте.
                            Используем передовые технологии для безупречного результата.
                        </p>

                        {/* Кнопки */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl">
                                🦷 Записаться на приём
                            </button>
                            <button className="w-full sm:w-auto border-2 border-gray-200 hover:border-teal-300 text-gray-700 hover:text-teal-700 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300">
                                📞 Позвонить нам
                            </button>
                        </div>

                        {/* Преимущества */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-2 text-gray-600">
                                <span className="text-green-500 text-lg">✓</span>
                                <span className="text-sm">Без боли</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-gray-600">
                                <span className="text-green-500 text-lg">✓</span>
                                <span className="text-sm">Гарантия качества</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-gray-600">
                                <span className="text-green-500 text-lg">✓</span>
                                <span className="text-sm">Рассрочка</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция услуг */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Наши услуги
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Полный спектр стоматологических услуг для всей семьи
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: "🦷", title: "Терапия", desc: "Лечение кариеса и заболеваний зубов" },
                            { icon: "🌟", title: "Отбеливание", desc: "Профессиональное отбеливание зубов" },
                            { icon: "🦴", title: "Имплантация", desc: "Восстановление утраченных зубов" },
                            { icon: "🎨", title: "Эстетика", desc: "Виниры и художественная реставрация" },
                            { icon: "👶", title: "Детская", desc: "Стоматология для самых маленьких" },
                            { icon: "📐", title: "Ортодонтия", desc: "Исправление прикуса и брекеты" },
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                                <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                                    Подробнее →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}