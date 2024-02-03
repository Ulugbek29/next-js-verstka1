import React from 'react'
import { FaFacebookSquare} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";



export default function Footer() {
  return (
    <div className='w-full bg-[#F2F0FE] py-8 px-[10%]'>
        <div className='flex gap-4 justify-between items-start'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>Топ категории</h2>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <a className=''>Тексты и переводы</a>
                        </li>
                        <li>
                            <a className=''>Разработка</a>
                        </li>
                        <li>
                            <a className=''>Дизайн</a>
                        </li>
                        <li>
                            <a className=''>Аудио, видео монтаж</a>
                        </li>
                        <li>
                            <a className=''>Соцсети и реклама</a>
                        </li>
                        <li>
                            <a className=''>Бизнес и жизнь</a>
                        </li>
                        <li>
                            <a className=''>SEO и оптимизация</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>О Проекте</h2>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <a className=''>О Нас</a>
                        </li>
                        <li>
                            <a className=''>Как Это Работает</a>
                        </li>
                        <li>
                            <a className=''>Как Это Работает</a>
                        </li>
                        <li>
                            <a className=''>Правила Пользования</a>
                        </li>
                        <li>
                            <a className=''>Пресса о нас</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>Поддержка</h2>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <a className=''>Контакты</a>
                        </li>
                        <li>
                            <a className=''>Политика Безопасности</a>
                        </li>
                        <li>
                            <a className=''>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>Follow</h2>
                   <div className='flex gap-4 text-3xl'>
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <FaSquareXTwitter />
                        <FaLinkedin />
                   </div>
                </div>
        </div>
    </div>
  )
}
