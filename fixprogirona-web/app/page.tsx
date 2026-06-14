import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-white">
<header className="sticky top-0 z-50 bg-white border-b shadow-sm">
  <nav className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-4 text-sm font-semibold overflow-x-auto">

    <a href="/">Inici</a>

    <a href="/electricitat">
      Electricitat
    </a>

    <a href="/fontaneria">
      Fontaneria
    </a>

    <a href="/reparacions-urgents">
      Urgències
    </a>

    <a href="/gas-i-installacions">
      Gas
    </a>

    <a href="/reformes-de-bany">
      Banys
    </a>

    <a href="/manteniment">
      Manteniment
    </a>

    <a href="#contacte">
      Contacte
    </a>

  </nav>
</header>
      {/* HERO */}

      <section className="relative min-h-screen">

        <Image
          src="/images/hero.jpg"
          alt="FixPro Girona"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/80"></div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">

          <span className="mb-6 rounded-full bg-yellow-400 px-4 py-2 font-bold text-black">
            Servei 24 hores
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight">
            Electricistes i Fontaners
            <br />
            24 Hores a Girona
          </h1>

          <p className="mb-8 max-w-md text-lg text-blue-100">
            Solucions professionals d'electricitat, fontaneria,
            gas, manteniment i reformes a tota la província de Girona.
          </p>

          <div className="flex w-full max-w-sm flex-col gap-4">

            <a
              href="tel:+34671195219"
              className="rounded-xl bg-yellow-400 py-4 text-lg font-bold text-black"
            >
              📞 Trucar Ara
            </a>

            <a
              href="https://wa.me/34671195219"
              target="_blank"
              className="rounded-xl bg-green-600 py-4 text-lg font-bold text-white"
            >
              💬 WhatsApp
            </a>

            <a
              href="#contacte"
              className="rounded-xl border-2 border-white py-4 text-lg font-bold"
            >
              📄 Demanar Pressupost
            </a>

          </div>

        </div>

      </section>

      {/* ESTADÍSTIQUES */}

      <section className="px-6 py-12">

        <div className="mx-auto grid max-w-md grid-cols-2 gap-4">

          <div className="rounded-xl bg-gray-100 p-4 text-center">
            ⭐⭐⭐⭐⭐
            <p className="mt-2 text-sm">
              Clients satisfets
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-4 text-center">
            🕒
            <p className="mt-2 text-sm">
              Servei 24 hores
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-4 text-center">
            📍
            <p className="mt-2 text-sm">
              Girona i província
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-4 text-center">
            💰
            <p className="mt-2 text-sm">
              Pressupost gratuït
            </p>
          </div>

        </div>

      </section>

      {/* SERVEIS */}

      <section className="bg-gray-50 px-6 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold">
          Els nostres serveis
        </h2>

        <div className="mx-auto flex max-w-md flex-col gap-8">

          {[
            {
  img: "/images/electricitat.jpg",
  title: "Electricitat",
  text: "Instal·lacions, reparacions i manteniment elèctric.",
  link: "/electricitat"
},
            {
  img: "/images/fontaneria.jpg",
  title: "Fontaneria",
  text: "Reparació de fuites, canonades i instal·lacions.",
  link: "/fontaneria"
},
            {
  img: "/images/urgencies.jpg",
  title: "Reparacions Urgents",
  text: "Assistència ràpida les 24 hores.",
  link: "/reparacions-urgents"
},
            {
  img: "/images/gas.jpg",
  title: "Gas i instal·lacions tècniques",
  text: "Instal·lació i manteniment de sistemes de gas.",
  link: "/gas-i-installacions"
},
            {
  img: "/images/bany.jpg",
  title: "Reformes de bany",
  text: "Renovacions completes amb acabats professionals.",
  link: "/reformes-de-bany"
},
            {
  img: "/images/manteniment.jpg",
  title: "Manteniment",
  text: "Serveis preventius per habitatges i negocis.",
  link: "/manteniment"
},
          ].map((servei) => (
           <Link
  href={servei.link}
  key={servei.title}
  className="block overflow-hidden rounded-2xl bg-white shadow-lg"
>
              <div className="relative h-56">
                <Image
                  src={servei.img}
                  alt={servei.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="mb-2 text-2xl font-bold">
                  {servei.title}
                </h3>

                <p className="text-gray-600">
                  {servei.text}
                </p>

              </div>

</Link>

))}

        </div>

      </section>

      {/* PER QUÈ ESCOLLIR-NOS */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-md">

          <h2 className="mb-8 text-center text-3xl font-bold">
            Per què escollir FixPro Girona?
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl bg-gray-100 p-4">
              ✅ Servei urgent 24 hores
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ✅ Professionals qualificats
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ✅ Tracte proper i professional
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ✅ Atenció ràpida
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              ✅ Preus ajustats
            </div>

          </div>

        </div>

      </section>

      {/* OPINIONS */}

      <section className="bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-md">

          <h2 className="mb-8 text-center text-3xl font-bold">
            Opinió dels clients
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl bg-white p-5 shadow">
              ⭐⭐⭐⭐⭐
              <p className="mt-2 font-bold">Jordi M.</p>
              <p className="mt-2 text-gray-600">
                Servei ràpid i professional. Molt recomanable.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow">
              ⭐⭐⭐⭐⭐
              <p className="mt-2 font-bold">Laura G.</p>
              <p className="mt-2 text-gray-600">
                Van solucionar el problema el mateix dia.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow">
              ⭐⭐⭐⭐⭐
              <p className="mt-2 font-bold">Marc P.</p>
              <p className="mt-2 text-gray-600">
                Tracte excel·lent i feina impecable.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACTE */}

      <section
        id="contacte"
        className="px-6 py-16"
      >

        <div className="mx-auto max-w-md text-center">

          <h2 className="mb-6 text-3xl font-bold">
            Contacta amb nosaltres
          </h2>

          <p className="mb-8 text-gray-600">
            Truca'ns o envia'ns un WhatsApp.
          </p>

          <div className="flex flex-col gap-4">

            <a
              href="tel:+34671195219"
              className="rounded-xl bg-blue-900 py-4 font-bold text-white"
            >
              📞 +34 671 19 52 19
            </a>

            <a
              href="https://wa.me/34671195219"
              target="_blank"
              className="rounded-xl bg-green-600 py-4 font-bold text-white"
            >
              💬 Enviar WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-blue-950 px-6 py-8 text-center text-white">

        <p className="font-bold">
          FixPro Girona
        </p>

        <p className="mt-2 text-sm text-blue-200">
          Electricitat · Fontaneria · Gas · Manteniment
        </p>

        <p className="mt-4 text-xs text-blue-300">
          © 2025 FixPro Girona
        </p>

      </footer>

    </main>
  );
}