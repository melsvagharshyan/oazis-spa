import { useState } from 'react';
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi2';
import { SiTelegram } from 'react-icons/si';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-stone-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="text-xl md:text-2xl font-semibold tracking-tight text-gold-700">
              Оазис
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#услуги" className="text-stone-600 hover:text-gold-600 transition-colors">
                Услуги
              </a>
              <a href="#о-нас" className="text-stone-600 hover:text-gold-600 transition-colors">
                О нас
              </a>
              <a href="#цены" className="text-stone-600 hover:text-gold-600 transition-colors">
                Цены
              </a>
              <a href="#контакты" className="text-stone-600 hover:text-gold-600 transition-colors">
                Контакты
              </a>
              <a
                href="#запись"
                className="px-5 py-2.5 rounded-full bg-gold-500 text-white font-medium hover:bg-gold-600 transition-colors"
              >
                Записаться
              </a>
            </nav>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-gold-100 transition-colors"
              aria-label="Меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gold-200/60 bg-white">
            <div className="px-4 py-4 flex flex-col gap-2">
              <a href="#услуги" className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600" onClick={() => setMenuOpen(false)}>
                Услуги
              </a>
              <a href="#о-нас" className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600" onClick={() => setMenuOpen(false)}>
                О нас
              </a>
              <a href="#цены" className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600" onClick={() => setMenuOpen(false)}>
                Цены
              </a>
              <a href="#контакты" className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600" onClick={() => setMenuOpen(false)}>
                Контакты
              </a>
              <a
                href="#запись"
                className="py-3 px-4 rounded-full bg-gold-500 text-white font-medium text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Записаться
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-white to-gold-100/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-200/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-2xl">
            <p className="text-gold-600 font-medium mb-2 sm:mb-3">Массажный салон в центре города</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
              Расслабление и{' '}
              <span className="text-gold-600">здоровье</span>
              {' '}в каждом прикосновении
            </h1>
            <p className="mt-4 sm:mt-6 text-stone-600 text-lg sm:text-xl max-w-xl">
              Классический, расслабляющий и лечебный массаж от опытных мастеров. 
              Восстановите силы и снимите напряжение.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#запись"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/25"
              >
                Записаться на приём
              </a>
              <a
                href="#услуги"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-gold-400 text-gold-700 font-medium hover:bg-gold-50 transition-colors"
              >
                Наши услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="услуги" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800">
              Наши услуги
            </h2>
            <p className="mt-4 text-stone-600 text-lg">
              Разнообразные виды массажа для восстановления и релаксации
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Классический массаж', desc: 'Универсальная техника для снятия мышечного напряжения, улучшения кровообращения и общего тонуса.', icon: '✨' },
              { title: 'Расслабляющий массаж', desc: 'Мягкие прикосновения и ароматерапия помогут полностью расслабиться и снять стресс.', icon: '🪷' },
              { title: 'Лечебный массаж', desc: 'Направленная работа с проблемными зонами: спина, шея, ноги. Помощь при болях и зажимах.', icon: '🌿' },
              { title: 'Спортивный массаж', desc: 'Подготовка мышц к нагрузкам и быстрое восстановление после тренировок.', icon: '💪' },
              { title: 'Антицеллюлитный массаж', desc: 'Улучшение микроциркуляции и тонуса кожи, моделирование силуэта.', icon: '✨' },
              { title: 'Массаж головы и шеи', desc: 'Снятие головных болей напряжения, улучшение концентрации и сна.', icon: '🧘' },
            ].map((s) => (
              <div
                key={s.title}
                className="group p-6 sm:p-8 rounded-2xl bg-gold-50/50 border border-gold-200/50 hover:border-gold-300 hover:shadow-lg hover:shadow-gold-200/20 transition-all duration-300"
              >
                <span className="text-3xl" aria-hidden>{s.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-stone-800 group-hover:text-gold-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-stone-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="о-нас" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gold-50/80 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800">
                О салоне «Оазис»
              </h2>
              <p className="mt-6 text-stone-600 text-lg leading-relaxed">
                Мы создали пространство, где каждый гость может отключиться от суеты, 
                восстановить силы и позаботиться о теле. Наши мастера прошли обучение 
                и используют только качественные масла и кремы.
              </p>
              <p className="mt-4 text-stone-600 text-lg leading-relaxed">
                Уютные кабинеты, приглушённый свет и спокойная музыка — всё для вашего 
                комфорта и глубокого расслабления.
              </p>
              <ul className="mt-8 space-y-3">
                {['Сертифицированные мастера', 'Натуральная косметика', 'Удобное расположение', 'Запись онлайн 24/7'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gold-200/60 aspect-[4/3] max-h-[400px] lg:max-h-none">
              <img
                src="/images/IMG_6827.JPG"
                alt="Интерьер массажного салона Оазис"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="цены" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800">
              Цены
            </h2>
            <p className="mt-4 text-stone-600 text-lg">
              Прозрачные цены. Первый визит — скидка 10%.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Классический массаж', time: '60 мин', price: '4 500 ₽' },
              { name: 'Расслабляющий массаж', time: '90 мин', price: '6 500 ₽' },
              { name: 'Лечебный массаж (спина)', time: '45 мин', price: '3 800 ₽' },
              { name: 'Спортивный массаж', time: '60 мин', price: '5 200 ₽' },
              { name: 'Массаж головы и шеи', time: '30 мин', price: '2 500 ₽' },
              { name: 'Антицеллюлитный массаж', time: '60 мин', price: '5 000 ₽' },
            ].map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-2xl border border-gold-200/60 bg-gold-50/30 hover:border-gold-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-stone-800">{p.name}</h3>
                <p className="mt-1 text-stone-500 text-sm">{p.time}</p>
                <p className="mt-3 text-xl font-bold text-gold-700">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Booking */}
      <section id="запись" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gold-500 to-gold-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Запишитесь на приём
          </h2>
          <p className="mt-4 text-gold-100 text-lg">
            Оставьте заявку — мы перезвоним и подберём удобное время.
          </p>
          <form className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="flex-1 min-h-[48px] text-base px-4 py-3.5 rounded-xl bg-white/95 text-stone-800 placeholder-stone-400 border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gold-600"
            />
            <button
              type="submit"
              className="min-h-[48px] px-6 py-3.5 rounded-xl bg-white text-gold-700 font-semibold hover:bg-gold-50 transition-colors active:scale-[0.98]"
            >
              Отправить
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="контакты" className="py-16 sm:py-20 lg:py-28 bg-gold-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800">
              Контакты
            </h2>
            <p className="mt-4 text-stone-600 text-lg">
              Будем рады видеть вас в нашем салоне
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <HiOutlineMapPin className="w-8 h-8 text-gold-600 mx-auto sm:mx-0" aria-hidden />
              <h3 className="mt-3 font-semibold text-stone-800">Адрес</h3>
              <p className="mt-1 text-stone-600">г. Москва, ул. Примерная, д. 1</p>
            </div>
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <HiOutlinePhone className="w-8 h-8 text-gold-600 mx-auto sm:mx-0" aria-hidden />
              <h3 className="mt-3 font-semibold text-stone-800">Телефон</h3>
              <a href="tel:+79612667666" className="mt-1 text-gold-600 hover:text-gold-700 font-medium">
                +7 (961) 266-76-66
              </a>
            </div>
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <HiOutlineClock className="w-8 h-8 text-gold-600 mx-auto sm:mx-0" aria-hidden />
              <h3 className="mt-3 font-semibold text-stone-800">Режим работы</h3>
              <p className="mt-1 text-stone-600">Пн–Вс: 10:00 – 22:00</p>
            </div>
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <SiTelegram className="w-8 h-8 text-gold-600 mx-auto sm:mx-0" aria-hidden />
              <h3 className="mt-3 font-semibold text-stone-800">Telegram</h3>
              <a href="https://t.me/Oazis0033" target="_blank" rel="noopener noreferrer" className="mt-1 text-gold-600 hover:text-gold-700 font-medium">
                @Oazis0033
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-xl font-semibold text-gold-400">Оазис</span>
              <p className="mt-2 text-sm text-stone-400">
                Массажный салон. Расслабление и здоровье.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#услуги" className="text-sm hover:text-gold-400 transition-colors">Услуги</a>
              <a href="#о-нас" className="text-sm hover:text-gold-400 transition-colors">О нас</a>
              <a href="#цены" className="text-sm hover:text-gold-400 transition-colors">Цены</a>
              <a href="#контакты" className="text-sm hover:text-gold-400 transition-colors">Контакты</a>
              <a href="https://t.me/Oazis0033" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-1.5" aria-label="Telegram">
                <SiTelegram className="w-5 h-5" /> Telegram
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-stone-700 text-sm text-stone-500">
            © {new Date().getFullYear()} Оазис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
