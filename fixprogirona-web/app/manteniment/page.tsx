import Image from "next/image";
import Menu from "../../components/menu";
export default function MantenimentPage() {
  return (
    <main className="bg-white min-h-screen">

      <Menu />

      <section className="relative h-[350px]">

        <Image
          src="/images/manteniment.jpg"
          alt="Manteniment Girona"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

          <div>

            <h1 className="mb-4 text-4xl font-bold text-white">
              Manteniment a Girona
            </h1>

            <p className="text-lg text-white">
              Serveis preventius per habitatges, comunitats i negocis.
            </p>

          </div>

        </div>

      </section>

      <section className="px-6 py-12">

        <div className="mx-auto max-w-2xl">

          <h2 className="mb-6 text-3xl font-bold">
            Serveis de manteniment
          </h2>

          <p className="mb-8 text-gray-700">
            Oferim plans de manteniment preventiu i correctiu
            per garantir el bon funcionament de les instal·lacions.
            Treballem amb habitatges particulars, comunitats de veïns
            i empreses a Girona i província.
          </p>

          <div className="space-y-4">

            <div className="rounded-xl bg-gray-100 p-4">
              🛠️ Manteniment d'instal·lacions
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛠️ Revisió periòdica de sistemes
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛠️ Prevenció d'avaries
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛠️ Manteniment de comunitats
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛠️ Suport per negocis i empreses
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
              ✅ Manteniment preventiu professional
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Intervencions ràpides
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Pressupost gratuït
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Servei a Girona i província
            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-950 px-6 py-12 text-center text-white">

        <h2 className="mb-4 text-3xl font-bold">
          Necessites manteniment professional?
        </h2>

        <p className="mb-8">
          Contacta amb nosaltres i et prepararem una solució adaptada.
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