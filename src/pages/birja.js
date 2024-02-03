import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";



export default function birja() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
    <section className='max-w-[700px] min-h-screen flex flex-col justify-center items-center gap-8'>
    <h1 className='text-3xl font-semibold'>Ищите и находите подходящую работу среди <span className='text-[#1DBF73]'>10,000+</span> проектов и покажите на что Вы способны!</h1>
        <div className="w-full flex relative px-[5%]">
              <input className="w-full bg-[#F2F0FE] py-3 px-4 rounded-lg" placeholder="Что нужно сделать?"/>
              <button className="absolute right-0 px-8 py-3 rounded-3xl bg-[#FBA457] text-white">Найти</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Тексты и переводы</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Разработка</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Дизайн</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Аудио, видео монтаж</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">SEO и оптимизация</button>
            <button className="py-2 px-4 rounded-2xl border border-[#e3e1ee] text-nowrap">Бизнес и жизнь</button>
            <button className="py-2 px-4 rounded-2xl border border-[rgb(227,225,238)] text-nowrap">Соцсети и реклама</button>
            <button className="py-2 px-4 rounded-2xl font-semibold text-[#FBA457] border border-[#FBA457] text-nowrap">Все категории</button>
          </div>
          <h2 className='text-2xl font-semibold'>Ниже все заказы по <span className='text-[#1DBF73]'>дизайну</span></h2>
          <div className='text-2xl font-semibold text-[#1DBF73]'>
            <IoIosArrowDown />
          </div>
    </section>
       
       <section className='w-full flex flex-col gap-4 py-4 px-[10%]'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold'>65 проектов по дизайну</h2>
                <div className='flex items-center gap-4'>
                <div className='flex gap-1'>
                    <span className='py-2 px-4 border rounded-3xl'>Минимальная цена</span>
                    <span>-</span>
                    <span className='py-2 px-4 border rounded-3xl'>Максимальная цена</span>
                </div>
                <button className='flex items-center gap-2 px-4 py-2 border rounded-3xl font-semibold'>По возрастанию цены <IoIosArrowDown /></button>
                </div>
            </div>
            
            <div className='flex flex-col items-center gap-4 '>
                    <div className='w-full flex flex-col gap-4 rounded-xl border p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xl font-semibold'>Нужно сделать Дизайн сайта по тематике авто</h2>
                            <div className='flex flex-col gap-1'>
                            <h2 className='text-xl font-semibold text-[#1DBF73]'>Бюджет: 50 000 тенге</h2>
                            <span className='text-[#a5a4a4] text-sm'>4 часа 28 минут назад</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-end gap-4'>
                            <div className='flex gap-4'>
                                <img src='/avatar2.png' className='w-[100px] h-[100px] object-cover'/>
                                <div className='flex flex-col gap-2'>
                                    <h2>Екатерин Иванов</h2>
                                    <p>Размещено проектов на бирже: 25</p>
                                    <div className='flex gap-2 text-xl text-orange-500'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span className='text-base text-[#000]'>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-base text-[#9f9f9f]'>Предложений: 50</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 rounded-xl border p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xl font-semibold'>Нужно сделать Дизайн сайта по тематике авто</h2>
                            <div className='flex flex-col gap-1'>
                            <h2 className='text-xl font-semibold text-[#1DBF73]'>Бюджет: 50 000 тенге</h2>
                            <span className='text-[#a5a4a4] text-sm'>4 часа 28 минут назад</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-end gap-4'>
                            <div className='flex gap-4'>
                                <img src='/avatar2.png' className='w-[100px] h-[100px] object-cover'/>
                                <div className='flex flex-col gap-2'>
                                    <h2>Екатерин Иванов</h2>
                                    <p>Размещено проектов на бирже: 25</p>
                                    <div className='flex gap-2 text-xl text-orange-500'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span className='text-base text-[#000]'>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-base text-[#9f9f9f]'>Предложений: 50</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 rounded-xl border p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xl font-semibold'>Нужно сделать Дизайн сайта по тематике авто</h2>
                            <div className='flex flex-col gap-1'>
                            <h2 className='text-xl font-semibold text-[#1DBF73]'>Бюджет: 50 000 тенге</h2>
                            <span className='text-[#a5a4a4] text-sm'>4 часа 28 минут назад</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-end gap-4'>
                            <div className='flex gap-4'>
                                <img src='/avatar2.png' className='w-[100px] h-[100px] object-cover'/>
                                <div className='flex flex-col gap-2'>
                                    <h2>Екатерин Иванов</h2>
                                    <p>Размещено проектов на бирже: 25</p>
                                    <div className='flex gap-2 text-xl text-orange-500'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span className='text-base text-[#000]'>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-base text-[#9f9f9f]'>Предложений: 50</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 rounded-xl border p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xl font-semibold'>Нужно сделать Дизайн сайта по тематике авто</h2>
                            <div className='flex flex-col gap-1'>
                            <h2 className='text-xl font-semibold text-[#1DBF73]'>Бюджет: 50 000 тенге</h2>
                            <span className='text-[#a5a4a4] text-sm'>4 часа 28 минут назад</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-end gap-4'>
                            <div className='flex gap-4'>
                                <img src='/avatar2.png' className='w-[100px] h-[100px] object-cover'/>
                                <div className='flex flex-col gap-2'>
                                    <h2>Екатерин Иванов</h2>
                                    <p>Размещено проектов на бирже: 25</p>
                                    <div className='flex gap-2 text-xl text-orange-500'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span className='text-base text-[#000]'>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-base text-[#9f9f9f]'>Предложений: 50</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 rounded-xl border p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xl font-semibold'>Нужно сделать Дизайн сайта по тематике авто</h2>
                            <div className='flex flex-col gap-1'>
                            <h2 className='text-xl font-semibold text-[#1DBF73]'>Бюджет: 50 000 тенге</h2>
                            <span className='text-[#a5a4a4] text-sm'>4 часа 28 минут назад</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-end gap-4'>
                            <div className='flex gap-4'>
                                <img src='/avatar2.png' className='w-[100px] h-[100px] object-cover'/>
                                <div className='flex flex-col gap-2'>
                                    <h2>Екатерин Иванов</h2>
                                    <p>Размещено проектов на бирже: 25</p>
                                    <div className='flex gap-2 text-xl text-orange-500'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span className='text-base text-[#000]'>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-base text-[#9f9f9f]'>Предложений: 50</p>
                        </div>
                    </div>

                    <button className='px-4 py-2 border rounded-3xl text-[#1DBF73] border-[#1DBF73]'>Загрузить еще</button>
            </div>
       </section>
    </div>
  )
}
