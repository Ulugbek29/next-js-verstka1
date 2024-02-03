import React from 'react'
import { colors } from '@/utills/colors'

export default function RegistrationBtn() {
  return (
    <button className={`bg-[${colors.main_color}] text-[${colors.green_color}] border rounded-2xl px-8  py-1`}>
        Регистрация
    </button>
  )
}
