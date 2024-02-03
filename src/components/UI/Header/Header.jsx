import Link from "next/link";
import React from "react";
import LogInBtn from "../Buttons/LogInBtn";
import RegistrationBtn from "../Buttons/RegistrationBtn";

export default function Header() {
  return (
    <div className="fixed top-0 w-full h-[60px] flex items-center justify-between bg-[#F2F0FE] px-[10%]">
      <div className="flex items-center gap-8">
        <div className="flex gap-2">
        <Link href="/">
          <img src="/logo.png" className="w-[120px]"/>
        </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/birja">Биржа</Link>
          <Link href="/vorki">Ворки</Link>
          <Link href="/concurs">Конкурсы</Link>
          <Link href="/create_vork">Создать ворк</Link>
          <Link href="/create_order">Создать заказ</Link>
        </div>
      </div>
      <div className="flex gap-4">
            <RegistrationBtn />
            <LogInBtn />
      </div>
    </div>
  );
}
