export default function DoctorsPage() {
    const doctors = [
        { name: "Айгуль Сағидна", position: "Главный врач-стоматолог", exp: "15 лет опыта", specialty: "Терапевтическая стоматология" },
        { name: "Алтынбек Жұмаш", position: "Хирург-имплантолог", exp: "12 лет опыта", specialty: "Имплантация, хирургия" },
        { name: "Гүлназ Оразбай", position: "Детский стоматолог", exp: "8 лет опыта", specialty: "Детская стоматология" }
    ];

    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Наши врачи</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Профессиональная команда стоматологов с многолетним опытом и любовью к своему делу
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                                👨‍⚕️
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                            <p className="text-teal-600 font-semibold mb-2">{doctor.position}</p>
                            <p className="text-gray-600 text-sm mb-2">{doctor.exp}</p>
                            <p className="text-gray-500 text-sm">{doctor.specialty}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}