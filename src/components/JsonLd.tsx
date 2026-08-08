import { site } from "@/data/portfolio";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 20+ years building scalable web applications.",
    email: site.email,
    telephone: site.phoneDisplay,
    url: "https://matiasperrone.dev",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressLocality: "Buenos Aires",
    },
    sameAs: [site.linkedin],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Python",
      "PHP",
      "Laravel",
      "Django",
      "AWS",
      "Docker",
      "Microservices",
      "REST APIs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
