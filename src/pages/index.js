import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


export default function Home() {
  return (
    <div className="w-full h-full">
      <section className="min-h-screen flex items-center gap-8 px-[10%]">
        <div className="flex-1 flex flex-col gap-4 p-4">
          <h1 className="text-4xl font-semibold">
            Покупайте фриланс-услуги в <span className="text-[#1DBF73]">два клика</span>
          </h1>
          <h2 className="text-lg font-semibold">
          Ворк — единица работы продавца, которую можно купить как товар в магазине 
          </h2>
          <div className="flex relative pr-[100px]">
              <input className="w-full bg-[#F2F0FE] py-3 px-4 rounded-lg" placeholder="Что нужно сделать?"/>
              <button className="absolute right-0 px-8 py-3 rounded-3xl bg-[#FBA457] text-white">Найти</button>
          </div>
          <p className="font-semibold">Выберите рубрику, чтобы начать</p>
          <div className="grid grid-cols-3 gap-4">
            <button className="py-2 px-4 rounded-2xl font-semibold text-[#1DBF73] border border-[#1DBF73]">Дизайн</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee]">Дизайн сайтов</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee]">Дизайн логотипа</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Дизайн визиток</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Арт и иллюстрации</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Флаера и брошюры</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Баннеры и стенды</button>
            <button className="py-2 px-4 rounded-2xl border border-[rgb(227,225,238)] text-nowrap">Дизайн презентации</button>
            <button className="py-2 px-4 rounded-2xl font-semibold text-[#FBA457] border border-[#FBA457]">Все подкатегории</button>
          </div>
        </div>
        <div className="flex-1">
            <img src="/home-bg.png" className="w-full h-full object-cover"/>
        </div>
      </section>

      <section className="flex flex-col gap-6 py-8 px-[10%]"> 
          <h2 className="font-semibold">
          Актуальные ворки
          </h2>
          <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 border border-[#F2F0FE] rounded-lg">
            <div className="flex gap-4">
                <img src="/avatar.png" className="w-[40px] h-[40px] rounded-full"/>
                <h2 className="font-semibold">Сделать дизайн интернет-магазина</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            <button className="py-2 text-[#1DBF73] border border-[#1DBF73] rounded-3xl">Посмотреть</button>
          </div>
          <div className="flex flex-col gap-4 border border-[#F2F0FE] rounded-lg">
            <div className="flex gap-4">
                <img src="/avatar.png" className="w-[40px] h-[40px] rounded-full"/>
                <h2 className="font-semibold">Сделать дизайн интернет-магазина</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            <button className="py-2 text-white bg-[#1DBF73] border border-[#1DBF73] rounded-3xl">Посмотреть</button>
          </div>
          <div className="flex flex-col gap-4 border border-[#F2F0FE] rounded-lg">
            <div className="flex gap-4">
                <img src="/avatar.png" className="w-[40px] h-[40px] rounded-full"/>
                <h2 className="font-semibold">Сделать дизайн интернет-магазина</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            <button className="py-2 text-[#1DBF73] border border-[#1DBF73] rounded-3xl">Посмотреть</button>
          </div>
          <div className="flex flex-col gap-4 border border-[#F2F0FE] rounded-lg">
            <div className="flex gap-4">
                <img src="/avatar.png" className="w-[40px] h-[40px] rounded-full"/>
                <h2 className="font-semibold">Сделать дизайн интернет-магазина</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            <button className="py-2 text-[#1DBF73] border border-[#1DBF73] rounded-3xl">Посмотреть</button>
          </div>
          <div className="flex flex-col gap-4 border border-[#F2F0FE] rounded-lg">
            <div className="flex gap-4">
                <img src="/avatar.png" className="w-[40px] h-[40px] rounded-full"/>
                <h2 className="font-semibold">Сделать дизайн интернет-магазина</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            <button className="py-2 text-[#1DBF73] border border-[#1DBF73] rounded-3xl">Посмотреть</button>
          </div>
          <div className="flex items-center justify-center bg-[#F2F0FE] rounded-lg">
              <h2 className="font-semibold text-[#1DBF73]">Смотреть все ворки</h2>
          </div>
          </div>
      </section>

      <section className="flex flex-col gap-4 py-8 px-[10%]">
        <h2 className="text-lg font-semibold">Топ фрилансеров</h2>
        <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 rounded-lg border p-4">
            <div className="flex gap-4">
                <img src="/avatar2.png" className="w-[150px] h-[150px] rounded-full object-cover"/>
                <div className="flex flex-col gap-2 text-xl">
                    <p>Марина Королёва</p>
                    <h2 className="font-semibold text-[#FBA457]">Разработчик PHP</h2>
                    <p>Выполено проектов: 65</p>
                    <div className="flex gap-2 text-xl text-[#FBA457]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                </div>
            </div>
            <button className="py-2 px-4 bg-[#1DBF73] text-white rounded-3xl">Написать</button>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border p-4">
            <div className="flex gap-4">
                <img src="/avatar2.png" className="w-[150px] h-[150px] rounded-full object-cover"/>
                <div className="flex flex-col gap-2 text-xl">
                    <p>Марина Королёва</p>
                    <h2 className="font-semibold text-[#FBA457]">Разработчик PHP</h2>
                    <p>Выполено проектов: 65</p>
                    <div className="flex gap-2 text-xl text-[#FBA457]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                </div>
            </div>
            <button className="py-2 px-4 border border-[#1DBF73] text-[#1DBF73] rounded-3xl">Написать</button>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border p-4">
            <div className="flex gap-4">
                <img src="/avatar2.png" className="w-[150px] h-[150px] rounded-full object-cover"/>
                <div className="flex flex-col gap-2 text-xl">
                    <p>Марина Королёва</p>
                    <h2 className="font-semibold text-[#FBA457]">Разработчик PHP</h2>
                    <p>Выполено проектов: 65</p>
                    <div className="flex gap-2 text-xl text-[#FBA457]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                </div>
            </div>
            <button className="py-2 px-4 border border-[#1DBF73] text-[#1DBF73] rounded-3xl">Написать</button>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border p-4">
            <div className="flex gap-4">
                <img src="/avatar2.png" className="w-[150px] h-[150px] rounded-full object-cover"/>
                <div className="flex flex-col gap-2 text-xl">
                    <p>Марина Королёва</p>
                    <h2 className="font-semibold text-[#FBA457]">Разработчик PHP</h2>
                    <p>Выполено проектов: 65</p>
                    <div className="flex gap-2 text-xl text-[#FBA457]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                </div>
            </div>
            <button className="py-2 px-4 border border-[#1DBF73] text-[#1DBF73] rounded-3xl">Написать</button>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border p-4">
            <div className="flex gap-4">
                <img src="/avatar2.png" className="w-[150px] h-[150px] rounded-full object-cover"/>
                <div className="flex flex-col gap-2 text-xl">
                    <p>Марина Королёва</p>
                    <h2 className="font-semibold text-[#FBA457]">Разработчик PHP</h2>
                    <p>Выполено проектов: 65</p>
                    <div className="flex gap-2 text-xl text-[#FBA457]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                </div>
            </div>
            <button className="py-2 px-4 border border-[#1DBF73] text-[#1DBF73] rounded-3xl">Написать</button>
        </div>
        <div className="flex items-center justify-center bg-[#F2F0FE] rounded-lg">
            <h2 className="text-[#1DBF73] font-semibold">Посмотреть всех ТОП фрилансеров</h2>
        </div>
        </div>
       
      </section>

      <section className="flex flex-col gap-6 py-4 px-[10%]">
        <h2 className="text-lg font-semibold">Как решать задачи на WorkTap?</h2>
        <p>Идеально подходит для бизнеса и частных лиц</p>
        <div className="flex justify-between gap-4">
            <div className="flex-1 flex flex-col gap-4">
                <img src="/girl-comp.png" className="w-[80px] h-[100px] object-cover"/>
                <h2 className="text-lg font-semibold">Выберите услугу</h2>
                <p>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <img src="/girl-comp.png" className="w-[80px] h-[100px] object-cover"/>
                <h2 className="text-lg font-semibold">Оплатите</h2>
                <p>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. </p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <img src="/girl-comp.png" className="w-[80px] h-[100px] object-cover"/>
                <h2 className="text-lg font-semibold">Получите результат</h2>
                <p>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
            </div>
        </div>
      </section>
      
      <section className="flex bg-[#E2A401] mt-8 pl-[10%]">
          <div className="w-2/5 flex flex-col items-start justify-center gap-8 px-2">
              <h2 className="font-semibold text-white text-2xl">Как WorkTap помогает бизнесу?</h2>
              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 px-2 py-3 bg-white rounded-xl">
                      <img src="/credit-card.png"/>
                      <p>Оплачивайте с р/с или карты компании</p>
                  </div>
                  <div className="flex items-center gap-4 px-2 py-3 bg-white rounded-xl">
                      <img src="/credit-card.png"/>
                      <p>Оплачивайте с р/с или карты компании</p>
                  </div>
                  <div className="flex items-center gap-4 px-2 py-3 bg-white rounded-xl">
                      <img src="/credit-card.png"/>
                      <p>Оплачивайте с р/с или карты компании</p>
                  </div>
              </div>
              <h2 className="font-semibold text-white text-2xl">WorkTap — быстро, просто и безопасно!</h2>
              <button className="px-4 py-2 bg-[#5E4EDB] text-white font-semibold text-lg rounded-3xl">Начать!</button>
          </div>
          <div className="h-full">
            <img src="/workspace.png"/>
          </div>
      </section>
    </div>
  );
}
