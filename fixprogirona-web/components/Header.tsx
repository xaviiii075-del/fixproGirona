import Image from "next/image";

export default function Header() {
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

        

      </div>

    </header>
  );
}