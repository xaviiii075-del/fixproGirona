export default function Menu() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-4 text-sm font-semibold overflow-x-auto">

        <a href="/">Inici</a>
<a href="/aires-condicionats">
  Aires Condicionats
</a>
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
          Calderes
        </a>

        <a href="/reformes-de-bany">
          Banys
        </a>

        <a href="/manteniment">
          Manteniment
        </a>

        <a href="/#contacte">
          Contacte
        </a>

      </nav>
    </header>
  );
}