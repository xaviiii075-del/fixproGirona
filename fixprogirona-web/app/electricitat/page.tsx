import Image from "next/image";
import Menu from "../../components/menu";
export default function ElectricitatPage() {
  return (
    <main className="bg-white min-h-screen">

<Menu />

      <section className="relative h-[350px]">

        <Image
          src="/images/electricitat.jpg"
          alt="Electricitat Girona"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

          <div>

            <h1 className="mb-4 text-4xl font-bold text-white">
              Electricitat a Girona
            </h1>

            <p className="text-lg text-white">
              Instal·lacions, reparacions i manteniment elèctric.
            </p>

          </div>

        </div>

      </section>

      <section className="px-6 py-12">

        <div className="mx-auto max-w-2xl">

          <h2 className="mb-6 text-3xl font-bold">
            Serveis d'electricitat
          </h2>

          <p className="mb-8 text-gray-700">
            Som especialistes en electricitat a Girona.
            Realitzem instal·lacions elèctriques, reparació
            d'avaries, manteniment preventiu, quadres elèctrics,
            il·luminació interior i exterior i actuacions urgents
            per habitatges, comunitats i negocis.
          </p>

          <div className="space-y-4">

            <div className="rounded-xl bg-gray-100 p-4">
              ⚡ Reparació d'avaries elèctriques
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ⚡ Instal·lacions noves
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ⚡ Quadres elèctrics
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ⚡ Endolls i interruptors
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ⚡ Il·luminació interior i exterior
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
              ✅ Atenció ràpida a Girona i província
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Professionals qualificats
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Pressupost gratuït
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Servei urgent 24 hores
            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-950 px-6 py-12 text-center text-white">

        <h2 className="mb-4 text-3xl font-bold">
          Necessites un electricista?
        </h2>

        <p className="mb-8">
          Truca'ns ara i t'atendrem al més aviat possible.
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