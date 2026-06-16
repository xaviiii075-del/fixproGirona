"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="FixPro Girona"
            width={60}
            height={60}
            className="object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-900">
              Fix<span className="text-yellow-400">Pro</span> Girona
            </h1>

            <p className="text-xs text-gray-500">
              Servei 24 hores
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl font-bold text-blue-900"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t bg-white shadow-md">
          <nav className="flex flex-col p-4 gap-3 text-lg font-medium">
            <a href="/">🏠 Inici</a>
            <a href="/aires-condicionats">❄️ Aires Condicionats</a>
            <a href="/electricitat">⚡ Electricitat</a>
            <a href="/fontaneria">🚰 Fontaneria</a>
            <a href="/gas-i-installacions">🔥 Calderes i Gas</a>
            <a href="/reparacions-urgents">🚨 Reparacions Urgents</a>
            <a href="/manteniment">🔧 Manteniment</a>
            <a href="/reformes-de-bany">🛁 Reformes de Bany</a>
            <a href="/opinions">⭐ Opinions</a>
            <a href="/contacte">📞 Contacte</a>
          </nav>
        </div>
      )}
    </header>
  );
}