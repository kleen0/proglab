export default function ServicesPage() {
    const services = [
        { icon: "🦷", title: "Терапевтическая стоматология", desc: "Лечение кариеса, пульпита, периодонтита" },
        { icon: "🌟", title: "Эстетическая стоматология", desc: "Виниры, отбеливание, реставрация" },
        { icon: "🦴", title: "Имплантация", desc: "Восстановление утраченных зубов" },
        { icon: "👶", title: "Детская стоматология", desc: "Лечение и профилактика для детей" },
        { icon: "📐", title: "Ортодонтия", desc: "Исправление прикуса, брекеты" },
        { icon: "😁", title: "Протезирование", desc: "Коронки, мосты, съемные протезы" }
    ];

    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Наши услуги</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Современные стоматологические услуги с использованием передовых технологий
                        и материалов для вашего здоровья и комфорта
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}