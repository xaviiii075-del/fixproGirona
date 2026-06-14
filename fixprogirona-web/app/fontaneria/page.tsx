import Image from "next/image";
import Menu from "../../components/menu";
export default function FontaneriaPage() {
  return (
    <main className="bg-white min-h-screen">

      <Menu />

      <section className="relative h-[350px]">

        <Image
          src="/images/fontaneria.jpg"
          alt="Fontaneria Girona"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

          <div>

            <h1 className="mb-4 text-4xl font-bold text-white">
              Fontaneria a Girona
            </h1>

            <p className="text-lg text-white">
              Reparació de fuites, canonades i instal·lacions.
            </p>

          </div>

        </div>

      </section>

      <section className="px-6 py-12">

        <div className="mx-auto max-w-2xl">

          <h2 className="mb-6 text-3xl font-bold">
            Serveis de fontaneria
          </h2>

          <p className="mb-8 text-gray-700">
            Oferim serveis professionals de fontaneria a Girona
            i tota la província. Solucionem avaries, fuites,
            problemes de pressió d'aigua, instal·lacions noves
            i manteniment per habitatges, comunitats i negocis.
          </p>

          <div className="space-y-4">

            <div className="rounded-xl bg-gray-100 p-4">
              🚰 Reparació de fuites d'aigua
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🚰 Canvi de canonades
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🚰 Instal·lació de sanitaris
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🚰 Aixetes i desguassos
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🚰 Manteniment i reparacions urgents
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
          Necessites un fontaner?
        </h2>

        <p className="mb-8">
          Truca'ns ara i solucionarem el problema al més aviat possible.
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