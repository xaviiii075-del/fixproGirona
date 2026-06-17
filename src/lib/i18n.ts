import { createContext, useContext } from "react";

export type Lang = "ca" | "es";

export const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "ca",
  setLang: () => {},
});

export const useI18n = () => useContext(I18nContext);

export const t = {
  ca: {
    nav: {
      home: "Inici",
      services: "Serveis",
      urgent: "Urgències",
      works: "Treballs",
      reviews: "Opinions",
      contact: "Contacte",
    },
    cta: {
      quote: "Demanar pressupost",
      call: "Trucar ara",
      whatsapp: "Enviar WhatsApp",
      send: "Enviar sol·licitud",
      callShort: "Trucar",
    },
    hero: {
      badge: "Servei 24 hores a Girona",
      title1: "Electricitat i fontaneria a Girona,",
      title2: "24 hores",
      subtitle:
        "Instal·lacions i reparacions professionals, ràpides i de confiança per a la teva llar o negoci.",
      trust: [
        "5.0 ★★★★★ en 55 valoracions",
        "Servei 24 hores",
        "Electricitat i fontaneria",
        "Atenció ràpida a Girona",
        "Pressupost sense compromís",
      ],
    },
    urgent: {
      tag: "Urgència",
      title: "Necessites una reparació urgent?",
      text: "Contacta amb FIXPRO GIRONA per incidències de fontaneria o electricitat. T'atenem ràpidament i t'expliquem la millor solució amb claredat.",
    },
    form: {
      title: "Demana el teu pressupost",
      subtitle: "Resposta ràpida. Sense compromís.",
      name: "Nom",
      phone: "Telèfon",
      type: "Tipus de servei",
      message: "Missatge",
      types: [
        "Fontaneria",
        "Electricitat",
        "Reparació urgent",
        "Instal·lació",
        "Manteniment",
        "Reforma de bany",
        "Instal·lació o reparació de gas",
        "Altres",
      ],
      success: "Perfecte! S'ha obert WhatsApp amb el missatge preparat.",
      whatsappButton: "Enviar",
      placeholder: {
        name: "El teu nom",
        phone: "El teu telèfon",
        message: "Explica'ns què necessites",
      },
      selectType: "Selecciona un servei",
    },
    services: {
      title: "Serveis d'instal·lació i reparació",
      intro:
        "A FIXPRO GIRONA oferim solucions professionals de fontaneria i electricitat per a llars, pisos, locals i negocis a Girona.",
      items: [
        {
          t: "Fontaneria",
          d: "Reparacions, instal·lacions i manteniment de sistemes de fontaneria amb treball net i professional.",
        },
        {
          t: "Electricitat",
          d: "Instal·lacions i reparacions elèctriques per a habitatges, locals i petits negocis.",
        },
        {
          t: "Reparacions urgents",
          d: "Atenció ràpida per incidències, avaries i problemes que necessiten una solució immediata.",
        },
        {
          t: "Instal·lacions",
          d: "Instal·lacions ben acabades, funcionals i adaptades a cada espai.",
        },
        {
          t: "Reformes de bany",
          d: "Treballs de renovació i millora de banys amb atenció al detall i materials adequats.",
        },
        {
          t: "Gas i instal·lacions tècniques",
          d: "Revisió i reparació d'instal·lacions tècniques, sempre amb cura, ordre i precisió.",
        },
        {
          t: "Manteniment",
          d: "Serveis de manteniment per prevenir avaries i conservar les instal·lacions en bon estat.",
        },
      ],
    },
    why: {
      title: "Per què triar FIXPRO GIRONA?",
      items: [
        {
          t: "Servei 24 hores",
          d: "Disponibilitat per atendre incidències quan més ho necessites.",
        },
        {
          t: "Treball professional i meticulós",
          d: "Cuidem els detalls perquè cada reparació o instal·lació quedi ben acabada.",
        },
        {
          t: "Preus ajustats",
          d: "Oferim solucions professionals amb preus justos i transparents.",
        },
        { t: "Tracte proper", d: "Comunicació clara, atenció amable i explicacions senzilles." },
        { t: "Clients satisfets", d: "5.0 estrelles en 55 valoracions de clients." },
      ],
      local: "Som a Girona i treballem amb clients de la ciutat i voltants.",
    },
    portfolio: {
      title: "Treballs realitzats",
      intro: "Una mostra de feines reals fetes amb cura i acabats professionals.",
      photoLabel: "",
      showMore: "Mostra més",
      showLess: "Mostra menys",
    },
    reviewsSection: {
      title: "El que diuen els clients",
      avg: "Valoració mitjana: 5.0/5 basada en 55 valoracions",
      more: "Llegir més",
      less: "Mostrar menys",
    },
    process: {
      title: "Com treballem",
      steps: [
        {
          t: "Ens expliques què necessites",
          d: "Ens envies el teu cas per telèfon, WhatsApp o formulari.",
        },
        {
          t: "Valorem la incidència o instal·lació",
          d: "Analitzem el problema i t'expliquem la millor solució amb claredat.",
        },
        {
          t: "Fem el treball amb cura",
          d: "Realitzem la reparació o instal·lació amb ordre, netedat i precisió.",
        },
        {
          t: "Revisem el resultat amb tu",
          d: "Comprovem que tot funcioni correctament i resolem qualsevol dubte abans d'acabar.",
        },
      ],
    },
    contact: {
      title: "Contacta amb FIXPRO GIRONA",
      text: "Explica'ns què necessites i et contactarem per valorar la millor solució.",
      hours: "Obert 24 hores",
      area: "Girona — 17004 / 17001",
    },
    footer: {
      desc: "Especialistes en instal·lacions i reparacions de fontaneria i electricitat a Girona.",
      rights: "© 2026 FIXPRO GIRONA. Tots els drets reservats.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      urgent: "Urgencias",
      works: "Trabajos",
      reviews: "Opiniones",
      contact: "Contacto",
    },
    cta: {
      quote: "Pedir presupuesto",
      call: "Llamar ahora",
      whatsapp: "Enviar WhatsApp",
      send: "Enviar solicitud",
      callShort: "Llamar",
    },
    hero: {
      badge: "Servicio 24 horas en Girona",
      title1: "Electricidad y fontanería en Girona,",
      title2: "24 horas",
      subtitle:
        "Instalaciones y reparaciones profesionales, rápidas y de confianza para tu hogar o negocio.",
      trust: [
        "5.0 ★★★★★ en 55 reseñas",
        "Servicio 24 horas",
        "Electricidad y fontanería",
        "Atención rápida en Girona",
        "Presupuesto sin compromiso",
      ],
    },
    urgent: {
      tag: "Urgencia",
      title: "¿Necesitas una reparación urgente?",
      text: "Contacta con FIXPRO GIRONA para incidencias de fontanería o electricidad. Te atendemos rápidamente y te explicamos la mejor solución con claridad.",
    },
    form: {
      title: "Pide tu presupuesto",
      subtitle: "Respuesta rápida. Sin compromiso.",
      name: "Nombre",
      phone: "Teléfono",
      type: "Tipo de servicio",
      message: "Mensaje",
      types: [
        "Fontanería",
        "Electricidad",
        "Reparación urgente",
        "Instalación",
        "Mantenimiento",
        "Reforma de baño",
        "Instalación o reparación de gas",
        "Otros",
      ],
      success: "¡Perfecto! Se ha abierto WhatsApp con el mensaje preparado.",
      whatsappButton: "Enviar",
      placeholder: { name: "Tu nombre", phone: "Tu teléfono", message: "Cuéntanos qué necesitas" },
      selectType: "Selecciona un servicio",
    },
    services: {
      title: "Servicios de instalación y reparación",
      intro:
        "En FIXPRO GIRONA ofrecemos soluciones profesionales de fontanería y electricidad para hogares, pisos, locales y negocios en Girona.",
      items: [
        {
          t: "Fontanería",
          d: "Reparaciones, instalaciones y mantenimiento de sistemas de fontanería con un trabajo limpio y profesional.",
        },
        {
          t: "Electricidad",
          d: "Instalaciones y reparaciones eléctricas para viviendas, locales y pequeños negocios.",
        },
        {
          t: "Reparaciones urgentes",
          d: "Atención rápida para incidencias, averías y problemas que necesitan una solución inmediata.",
        },
        {
          t: "Instalaciones",
          d: "Instalaciones bien acabadas, funcionales y adaptadas a cada espacio.",
        },
        {
          t: "Reformas de baño",
          d: "Trabajos de renovación y mejora de baños con atención al detalle y materiales adecuados.",
        },
        {
          t: "Gas e instalaciones técnicas",
          d: "Revisión y reparación de instalaciones técnicas, siempre con cuidado, orden y precisión.",
        },
        {
          t: "Mantenimiento",
          d: "Servicios de mantenimiento para prevenir averías y conservar las instalaciones en buen estado.",
        },
      ],
    },
    why: {
      title: "¿Por qué elegir FIXPRO GIRONA?",
      items: [
        {
          t: "Servicio 24 horas",
          d: "Disponibilidad para atender incidencias cuando más lo necesitas.",
        },
        {
          t: "Trabajo profesional y meticuloso",
          d: "Cuidamos los detalles para que cada reparación o instalación quede bien acabada.",
        },
        {
          t: "Precios ajustados",
          d: "Ofrecemos soluciones profesionales con precios justos y transparentes.",
        },
        { t: "Trato cercano", d: "Comunicación clara, atención amable y explicaciones sencillas." },
        { t: "Clientes satisfechos", d: "5.0 estrellas en 55 reseñas de clientes." },
      ],
      local: "Estamos en Girona y trabajamos con clientes de la ciudad y alrededores.",
    },
    portfolio: {
      title: "Trabajos realizados",
      intro: "Una muestra de trabajos reales realizados con cuidado y acabados profesionales.",
      photoLabel: "Trabajo realizado",
      showMore: "Mostrar más",
      showLess: "Mostrar menos",
    },
    reviewsSection: {
      title: "Lo que dicen los clientes",
      avg: "Valoración media: 5.0/5 basada en 55 reseñas",
      more: "Leer más",
      less: "Mostrar menos",
    },
    process: {
      title: "Cómo trabajamos",
      steps: [
        {
          t: "Nos explicas qué necesitas",
          d: "Nos envías tu caso por teléfono, WhatsApp o formulario.",
        },
        {
          t: "Valoramos la incidencia o instalación",
          d: "Analizamos el problema y te explicamos la mejor solución con claridad.",
        },
        {
          t: "Realizamos el trabajo con cuidado",
          d: "Hacemos la reparación o instalación con orden, limpieza y precisión.",
        },
        {
          t: "Revisamos el resultado contigo",
          d: "Comprobamos que todo funcione correctamente y resolvemos cualquier duda antes de terminar.",
        },
      ],
    },
    contact: {
      title: "Contacta con FIXPRO GIRONA",
      text: "Explícanos qué necesitas y te contactaremos para valorar la mejor solución.",
      hours: "Abierto 24 horas",
      area: "Girona — 17004 / 17001",
    },
    footer: {
      desc: "Especialistas en instalaciones y reparaciones de fontanería y electricidad en Girona.",
      rights: "© 2026 FIXPRO GIRONA. Todos los derechos reservados.",
    },
  },
} as const;

export const reviews = {
  ca: [
    {
      name: "Anderson Julian Ramirez Castellanos",
      text: "Servei excel·lent, l'atenció ha estat molt bona i la reparació ha quedat molt bé. Estic realment molt satisfet amb la feina.",
    },
    {
      name: "Abdellatif Bourdif",
      text: "Molt bon servei, molt professional i, sobretot, molt bons preus. El recomano al 100%.",
    },
    {
      name: "Daniel Rodriguez",
      text: "Treball perfecte! Van arreglar una instal·lació de gas que una altra empresa no havia fet gaire bé abans, i va quedar impecable. Molt professional i meticulós en tot moment.",
    },
    {
      name: "Yasmina Mabrouk Nacim",
      text: "Servei excel·lent. Personal molt amable i atent, feina professional i ràpida. A més, els preus són assequibles i ben ajustats. Van solucionar el problema immediatament i amb resultats excel·lents.",
    },
    {
      name: "Achraf Al Baragragui El Founti",
      text: "Un amic me'l va recomanar per a la reforma del bany i estic molt content amb el resultat. Va ser amable i professional. Va utilitzar materials de bona qualitat a un preu just, i sens dubte el tornaria a trucar.",
    },
  ],
  es: [
    {
      name: "Anderson Julian Ramirez Castellanos",
      text: "Servicio excelente, la atención ha sido muy buena y la reparación ha quedado muy bien. Estoy realmente muy satisfecho con el trabajo.",
    },
    {
      name: "Abdellatif Bourdif",
      text: "Muy buen servicio, muy profesional y, sobre todo, muy buenos precios. Lo recomiendo al 100%.",
    },
    {
      name: "Daniel Rodriguez",
      text: "¡Trabajo perfecto! Arreglaron una instalación de gas que otra empresa no había hecho muy bien antes, y quedó impecable. Muy profesional y meticuloso en todo momento.",
    },
    {
      name: "Yasmina Mabrouk Nacim",
      text: "Servicio excelente. Personal muy amable y atento, trabajo profesional y rápido. Además, los precios son asequibles y bien ajustados. Solucionaron el problema inmediatamente y con resultados excelentes.",
    },
    {
      name: "Achraf Al Baragragui El Founti",
      text: "Un amigo me lo recomendó para la reforma de mi baño y estoy muy contento con el resultado. Fue amable y profesional. Utilizó materiales de buena calidad a un precio justo, y sin duda volvería a llamarlo.",
    },
  ],
} as const;
