import { useState } from "react";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineSun,
  HiOutlineHeart,
  HiOutlineBolt,
  HiOutlineStar,
  HiOutlineFaceSmile,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiStar,
} from "react-icons/hi2";
import { SiTelegram } from "react-icons/si";
import { GiPalmTree } from "react-icons/gi";

const services = [
  {
    title: "Классический массаж",
    desc: "Универсальная техника для снятия мышечного напряжения, улучшения кровообращения и общего тонуса.",
    Icon: HiOutlineSparkles,
    image:
      "https://images.pexels.com/photos/6560304/pexels-photo-6560304.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Расслабляющий массаж",
    desc: "Мягкие прикосновения и ароматерапия помогут полностью расслабиться и снять стресс.",
    Icon: HiOutlineSun,
    image:
      "https://images.pexels.com/photos/6629610/pexels-photo-6629610.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Лечебный массаж",
    desc: "Направленная работа с проблемными зонами: спина, шея, ноги. Помощь при болях и зажимах.",
    Icon: HiOutlineHeart,
    image:
      "https://images.pexels.com/photos/6560302/pexels-photo-6560302.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Спортивный массаж",
    desc: "Подготовка мышц к нагрузкам и быстрое восстановление после тренировок.",
    Icon: HiOutlineBolt,
    image:
      "https://images.pexels.com/photos/5794017/pexels-photo-5794017.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Антицеллюлитный массаж",
    desc: "Улучшение микроциркуляции и тонуса кожи, моделирование силуэта.",
    Icon: HiOutlineStar,
    image:
      "https://images.pexels.com/photos/6628585/pexels-photo-6628585.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Массаж головы и шеи",
    desc: "Снятие головных болей напряжения, улучшение концентрации и сна.",
    Icon: HiOutlineFaceSmile,
    image:
      "https://images.pexels.com/photos/6560296/pexels-photo-6560296.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const recommendations = [
  {
    name: "Елена",
    surname: "Соколова",
    stars: 5,
    text: "Микаел — настоящий профессионал. Руки волшебные, после сеанса спина как новая. Рекомендую всем, кто мучается с зажимами и усталостью.",
  },
  {
    name: "Дмитрий",
    surname: null,
    stars: 5,
    text: "Хожу к Микаелу на спортивный массаж. Отлично восстанавливает после тренировок, чувствую себя намного лучше. Спасибо!",
  },
  {
    name: "Анна",
    surname: "Козлова",
    stars: 5,
    text: "Очень благодарна Микаелу за расслабляющий массаж. Атмосфера спокойная, техника мягкая и в то же время эффективная. Обязательно вернусь.",
  },
  {
    name: "Игорь",
    surname: null,
    stars: 5,
    text: "Микаел снял хроническое напряжение в шее. Специалист от Бога.",
  },
  {
    name: "Мария",
    surname: "Волкова",
    stars: 5,
    text: "Делала у Микаела массаж головы и шеи — невероятно расслабляет, голова перестала болеть. Мастер своего дела, всем советую.",
  },
  {
    name: "Александр",
    surname: null,
    stars: 5,
    text: "Микаел — лучший мастер, к которому я обращался. Чувствует тело, находит проблемные зоны. Результат после каждого визита.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white text-stone-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight text-gold-700"
            >
              <GiPalmTree
                className="w-6 h-6 md:w-7 md:h-7 shrink-0"
                aria-hidden
              />
              Оазис
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#услуги"
                className="text-stone-600 hover:text-gold-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#о-нас"
                className="text-stone-600 hover:text-gold-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#цены"
                className="text-stone-600 hover:text-gold-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#отзывы"
                className="text-stone-600 hover:text-gold-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#контакты"
                className="text-stone-600 hover:text-gold-600 transition-colors"
              >
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
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gold-200/60 bg-white">
            <div className="px-4 py-4 flex flex-col gap-2">
              <a
                href="#услуги"
                className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600"
                onClick={() => setMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#о-нас"
                className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600"
                onClick={() => setMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="#цены"
                className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600"
                onClick={() => setMenuOpen(false)}
              >
                Цены
              </a>
              <a
                href="#отзывы"
                className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600"
                onClick={() => setMenuOpen(false)}
              >
                Отзывы
              </a>
              <a
                href="#контакты"
                className="py-3 px-4 rounded-lg hover:bg-gold-50 text-stone-600"
                onClick={() => setMenuOpen(false)}
              >
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
            <p className="text-gold-600 font-medium mb-2 sm:mb-3">
              Мастер Микаел • Массажный салон в центре города
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
              Расслабление и <span className="text-gold-600">здоровье</span> в
              каждом прикосновении
            </h1>
            <p className="mt-4 sm:mt-6 text-stone-600 text-lg sm:text-xl max-w-xl">
              Классический, расслабляющий и лечебный массаж от опытного мастера Микаела.
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
                Услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / О массаже */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gold-50/80 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 text-center mb-10 sm:mb-12">
            Массаж, после которого тело действительно отдыхает
          </h2>
          <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
            <p>
              В нашем массажном пространстве вы можете по-настоящему расслабиться, восстановить силы и перезагрузиться. Мы работаем не по шаблону — каждый массаж подбирается индивидуально под ваше состояние, запрос и настроение.
            </p>
            <p>
              Массаж помогает снять напряжение, убрать зажимы, улучшить кровообращение и вернуть лёгкость в теле. Уже после первого сеанса вы почувствуете спокойствие, расслабление и прилив энергии.
            </p>
            <p className="font-medium text-stone-700">Здесь вас ждёт:</p>
            <ul className="space-y-3">
              {[
                'уютная и спокойная атмосфера',
                'внимательное отношение к каждому клиенту',
                'качественные техники массажа',
                'забота о вашем теле и самочувствии',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Позвольте себе паузу от стресса и суеты — ваше тело скажет спасибо.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="услуги" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800">
              Услуги Микаела
            </h2>
            <p className="mt-4 text-stone-600 text-lg">
              Разнообразные виды массажа для восстановления и релаксации
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s) => {
              const Icon = s.Icon;
              return (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl border border-gold-200/50 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-200/25 transition-all duration-300 min-h-[260px] sm:min-h-[280px] flex flex-col"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${s.image})` }}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-stone-900/92 via-stone-900/40 to-transparent"
                    aria-hidden
                  />
                  <div className="relative flex flex-1 flex-col justify-end p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 text-gold-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                        aria-hidden
                      />
                      <h3 className="text-xl sm:text-2xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] group-hover:text-gold-200 transition-colors leading-tight">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-stone-200 text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="о-нас"
        className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gold-50/80 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800">
                О Микаеле и салоне «Оазис»
              </h2>
              <p className="mt-6 text-stone-600 text-lg leading-relaxed">
                Микаел создал пространство, где каждый гость может отключиться от
                суеты, восстановить силы и позаботиться о теле. Он прошёл
                обучение и использует только качественные масла и кремы.
              </p>
              <p className="mt-4 text-stone-600 text-lg leading-relaxed">
                Уютный кабинет, приглушённый свет и спокойная музыка — всё для
                вашего комфорта и глубокого расслабления.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Сертифицированный специалист",
                  "Натуральная косметика",
                  "Удобное расположение",
                  "Запись онлайн 24/7",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-stone-700"
                  >
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
              { name: "Классический массаж", time: "60 мин", price: "4 500 ₽" },
              {
                name: "Расслабляющий массаж",
                time: "90 мин",
                price: "6 500 ₽",
              },
              {
                name: "Лечебный массаж (спина)",
                time: "45 мин",
                price: "3 800 ₽",
              },
              { name: "Спортивный массаж", time: "60 мин", price: "5 200 ₽" },
              { name: "Массаж головы и шеи", time: "30 мин", price: "2 500 ₽" },
              {
                name: "Антицеллюлитный массаж",
                time: "60 мин",
                price: "5 000 ₽",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-2xl border border-gold-200/60 bg-gold-50/30 hover:border-gold-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-stone-800">{p.name}</h3>
                <p className="mt-1 text-stone-500 text-sm">{p.time}</p>
                <p className="mt-3 text-xl font-bold text-gold-700">
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Booking */}
      <section
        id="запись"
        className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gold-500 to-gold-700"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Запишитесь на приём
          </h2>
          <p className="mt-4 text-gold-100 text-lg">
            Позвоните Микаелу — он подберёт удобное время.
          </p>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-white">
            <a
              href="tel:+79612667666"
              className="hover:text-gold-100 transition-colors"
            >
              +7 (961) 266-76-66
            </a>
          </p>
          <a
            href="tel:+79612667666"
            className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-xl bg-white text-gold-700 font-semibold hover:bg-gold-50 transition-colors active:scale-[0.98]"
          >
            <HiOutlinePhone className="w-5 h-5" />
            Позвонить
          </a>
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
              Микаел будет рад видеть вас в салоне
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <HiOutlineMapPin
                className="w-8 h-8 text-gold-600 mx-auto sm:mx-0"
                aria-hidden
              />
              <h3 className="mt-3 font-semibold text-stone-800">Адрес</h3>
              <p className="mt-1 text-stone-600">
                Тверецкий пр-з, 21
              </p>
            </div>
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <HiOutlinePhone
                className="w-8 h-8 text-gold-600 mx-auto sm:mx-0"
                aria-hidden
              />
              <h3 className="mt-3 font-semibold text-stone-800">Телефон</h3>
              <a
                href="tel:+79612667666"
                className="mt-1 text-gold-600 hover:text-gold-700 font-medium"
              >
                +7 (961) 266-76-66
              </a>
            </div>
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <HiOutlineClock
                className="w-8 h-8 text-gold-600 mx-auto sm:mx-0"
                aria-hidden
              />
              <h3 className="mt-3 font-semibold text-stone-800">
                Режим работы
              </h3>
              <p className="mt-1 text-stone-600">Пн–Вс: 10:00 – 22:00</p>
            </div>
            <div className="text-center sm:text-left p-6 rounded-2xl bg-white border border-gold-200/60">
              <SiTelegram
                className="w-8 h-8 text-gold-600 mx-auto sm:mx-0"
                aria-hidden
              />
              <h3 className="mt-3 font-semibold text-stone-800">Telegram</h3>
              <a
                href="https://t.me/Oazis0033"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-gold-600 hover:text-gold-700 font-medium"
              >
                @Oazis0033
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations slider */}
      <section id="отзывы" className="py-8 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-bold text-stone-800">
              Отзывы клиентов
            </h2>
            <p className="mt-1.5 sm:mt-2 text-stone-600 text-sm sm:text-base">
              О специалисте Микаеле
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() =>
                setReviewIndex((i) =>
                  i > 0 ? i - 1 : recommendations.length - 1,
                )
              }
              className="hidden sm:flex shrink-0 self-center w-12 h-12 rounded-full bg-white border border-gold-200/60 shadow-lg text-gold-600 hover:bg-gold-50 hover:border-gold-300 transition-colors items-center justify-center"
              aria-label="Предыдущий отзыв"
            >
              <HiOutlineChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 min-w-0 overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  width: `${recommendations.length * 100}%`,
                  transform: `translateX(-${reviewIndex * (100 / recommendations.length)}%)`,
                }}
              >
                {recommendations.map((r, i) => (
                  <div
                    key={i}
                    className="shrink-0 px-4 py-5 sm:px-8 sm:py-8 bg-gold-50/50 border border-gold-200/50 min-h-[200px] sm:min-h-0 flex flex-col"
                    style={{ width: `${100 / recommendations.length}%` }}
                  >
                    <div
                      className="flex gap-1 mb-3 sm:mb-4"
                      aria-label={`Оценка: ${r.stars} из 5`}
                    >
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <HiStar
                          key={j}
                          className="w-5 h-5 text-gold-500 shrink-0"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <p className="text-stone-700 text-[15px] sm:text-base leading-relaxed flex-1">
                      {r.text}
                    </p>
                    <p className="mt-3 sm:mt-4 font-semibold text-stone-800 text-[15px] sm:text-base">
                      {r.name}
                      {r.surname ? ` ${r.surname}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setReviewIndex((i) =>
                  i < recommendations.length - 1 ? i + 1 : 0,
                )
              }
              className="hidden sm:flex shrink-0 self-center w-12 h-12 rounded-full bg-white border border-gold-200/60 shadow-lg text-gold-600 hover:bg-gold-50 hover:border-gold-300 transition-colors items-center justify-center"
              aria-label="Следующий отзыв"
            >
              <HiOutlineChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex sm:hidden items-center justify-center gap-6 mt-4">
            <button
              type="button"
              onClick={() =>
                setReviewIndex((i) =>
                  i > 0 ? i - 1 : recommendations.length - 1,
                )
              }
              className="min-h-[44px] min-w-[44px] px-5 rounded-full bg-white border border-gold-200/60 shadow text-gold-600 active:bg-gold-50 flex items-center justify-center gap-2 font-medium text-[15px]"
              aria-label="Предыдущий отзыв"
            >
              <HiOutlineChevronLeft className="w-5 h-5" />
              Назад
            </button>
            <span className="text-stone-500 text-sm tabular-nums"></span>
            <button
              type="button"
              onClick={() =>
                setReviewIndex((i) =>
                  i < recommendations.length - 1 ? i + 1 : 0,
                )
              }
              className="min-h-[44px] min-w-[44px] px-5 rounded-full bg-white border border-gold-200/60 shadow text-gold-600 active:bg-gold-50 flex items-center justify-center gap-2 font-medium text-[15px]"
              aria-label="Следующий отзыв"
            >
              Вперёд
              <HiOutlineChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2.5 sm:gap-2 mt-4 sm:mt-6">
            {recommendations.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setReviewIndex(i)}
                className={`rounded-full transition-colors shrink-0 ${
                  i === reviewIndex
                    ? "bg-gold-500 scale-125"
                    : "bg-gold-200 hover:bg-gold-300 active:bg-gold-300"
                } w-3 h-3 sm:w-2.5 sm:h-2.5`}
                aria-label={`Отзыв ${i + 1} из ${recommendations.length}`}
                aria-current={i === reviewIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xl font-semibold text-gold-400">
                <GiPalmTree className="w-5 h-5 shrink-0" aria-hidden />
                Оазис
              </span>
              <p className="mt-2 text-sm text-stone-400">
                Массажный салон. Расслабление и здоровье.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#услуги"
                className="text-sm hover:text-gold-400 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#о-нас"
                className="text-sm hover:text-gold-400 transition-colors"
              >
                О нас
              </a>
              <a
                href="#цены"
                className="text-sm hover:text-gold-400 transition-colors"
              >
                Цены
              </a>
              <a
                href="#отзывы"
                className="text-sm hover:text-gold-400 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#контакты"
                className="text-sm hover:text-gold-400 transition-colors"
              >
                Контакты
              </a>
              <a
                href="https://t.me/Oazis0033"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-1.5"
                aria-label="Telegram"
              >
                <SiTelegram className="w-5 h-5" /> Telegram
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-stone-700 text-sm text-stone-500">
            © {new Date().getFullYear()} Оазис. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Fixed bottom-right CTA — запись на массаж */}
      <a
        href="#запись"
        className="fixed z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-600 text-white shadow-lg animate-cta-pulse hover:bg-gold-700 transition-colors bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))]"
        title="Записаться на массаж"
        aria-label="Записаться на массаж"
      >
        <HiOutlinePhone
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
          aria-hidden
        />
      </a>
    </div>
  );
}

export default App;
