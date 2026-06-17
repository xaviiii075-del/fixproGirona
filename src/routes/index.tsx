import { createFileRoute } from "@tanstack/react-router";
import Site from "@/components/Site";

const SEO = {
  title: "FIXPRO GIRONA | Electricitat i fontaneria 24 hores a Girona",
  description:
    "Empresa d'instal·lacions i reparacions a Girona. Serveis de fontaneria, electricitat, urgències, manteniment i reformes. Contacta amb FIXPRO GIRONA.",
};

const JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber", "Electrician"],
  name: "FIXPRO GIRONA",
  description: "Instal·lacions i reparacions — Electricitat i fontaneria a Girona",
  url: "https://fixprogirona.com",
  telephone: "+34671195219",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Girona",
    postalCode: "17004",
    addressCountry: "ES",
  },
  areaServed: ["Girona", "17004", "17001"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "55" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO.title },
      { name: "description", content: SEO.description },
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: Index,
});

function Index() {
  return <Site />;
}
