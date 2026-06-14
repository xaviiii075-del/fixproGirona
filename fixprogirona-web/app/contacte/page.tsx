export default function ContactePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold">
          Contacte
        </h1>

        <p className="mb-6">
          Pots contactar amb nosaltres per telèfon o WhatsApp.
        </p>

        <a
          href="tel:+34671195219"
          className="mb-4 block rounded-xl bg-blue-900 px-6 py-4 text-center font-bold text-white"
        >
          📞 Trucar ara
        </a>

        <a
          href="https://wa.me/34671195219"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-green-600 px-6 py-4 text-center font-bold text-white"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}