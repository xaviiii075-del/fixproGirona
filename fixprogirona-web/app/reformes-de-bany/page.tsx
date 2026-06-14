import Image from "next/image";
import Menu from "../../components/menu";
export default function ReformesBanyPage() {
  return (
    <main className="bg-white min-h-screen">

      <Menu />

      <section className="relative h-[350px]">

        <Image
          src="/images/bany.jpg"
          alt="Reformes de Bany Girona"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

          <div>

            <h1 className="mb-4 text-4xl font-bold text-white">
              Reformes de Bany a Girona
            </h1>

            <p className="text-lg text-white">
              Renovacions completes amb acabats professionals.
            </p>

          </div>

        </div>

      </section>

      <section className="px-6 py-12">

        <div className="mx-auto max-w-2xl">

          <h2 className="mb-6 text-3xl font-bold">
            Reformes integrals de bany
          </h2>

          <p className="mb-8 text-gray-700">
            Transformem banys antics en espais moderns,
            funcionals i elegants. Gestionem tot el procés,
            des de la fontaneria fins als acabats finals,
            oferint solucions personalitzades per a cada client.
          </p>

          <div className="space-y-4">

            <div className="rounded-xl bg-gray-100 p-4">
              🛁 Renovació completa de banys
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛁 Canvi de banyera per dutxa
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛁 Instal·lació de mobiliari
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛁 Rajoles i revestiments
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              🛁 Acabats moderns i personalitzats
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
              ✅ Projectes personalitzats
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Materials de qualitat
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Pressupost gratuït
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              ✅ Acabats professionals
            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-950 px-6 py-12 text-center text-white">

        <h2 className="mb-4 text-3xl font-bold">
          Vols reformar el teu bany?
        </h2>

        <p className="mb-8">
          Demana pressupost sense compromís.
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