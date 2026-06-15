import Image from "next/image";
import Menu from "../../components/menu";

export default function AiresCondicionatsPage() {
  return (
    <main className="bg-white min-h-screen">

      <Menu />

      <section className="relative h-[350px]">

        <Image
          src="/images/aire-condicionat.jpg"
          alt="Aires Condicionats Girona"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

          <div>

            <h1 className="mb-4 text-4xl font-bold text-white">
              Instal·lació i Reparació d'Aires Condicionats
            </h1>

            <p className="text-lg text-white">
              Instal·lació, manteniment i reparació d'aires condicionats a Girona.
            </p>

          </div>

        </div>

      </section>

      <section className="px-6 py-12">

        <div className="mx-auto max-w-2xl">

          <h2 className="mb-6 text-3xl font-bold">
            Serveis d'aire condicionat
          </h2>

          <p className="mb-8 text-gray-700">
            Oferim instal·lació, manteniment i reparació d'equips
            d'aire condicionat per habitatges, oficines, locals comercials
            i empreses a Girona i província.
          </p>

          <div className="space-y-4">

            <div className="rounded-xl bg-gray-100 p-4">
              ❄️ Instal·lació d'aires condicionats
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ❄️ Reparació d'avaries
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ❄️ Càrrega de gas refrigerant
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ❄️ Manteniment preventiu
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ❄️ Neteja i desinfecció d'equips
            </div>

          </div>

        </div>

      </section>

      <section className="bg-gray-50 px-6 py-12">

        <div className="mx-auto max-w-2xl">

          <h2 className="mb-6 text-3xl font-bold">
            Per què escollir-nos?
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Instal·ladors professionals
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Servei ràpid a Girona
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Pressupost gratuït
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Reparacions urgents
            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-950 px-6 py-12 text-center text-white">

        <h2 className="mb-4 text-3xl font-bold">
          Necessites un tècnic d'aire condicionat?
        </h2>

        <p className="mb-8">
          Truca'ns ara i t'ajudarem al més aviat possible.
        </p>

        <div className="mx-auto flex max-w-sm flex-col gap-4">

          <a
            href="tel:+34671195219"
            className="rounded-xl bg-yellow-400 py-4 font-bold text-black"
          >
            📞 Trucar Ara
          </a>

          <a
            href="https://wa.me/34671195219"
            target="_blank"
            className="rounded-xl bg-green-600 py-4 font-bold text-white"
          >
            💬 WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}