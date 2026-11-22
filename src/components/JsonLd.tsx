import { site } from "@/data/portfolio";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Senior DevOps Engineer",
    description:
      "Senior DevOps Engineer with 10+ years of software engineering and AWS cloud infrastructure experience.",
    email: site.email,
    telephone: site.phoneDisplay,
    url: "https://jacobvenneoliver.dev",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "Tampa",
      addressRegion: "FL",
    },
    sameAs: [site.linkedin],
    knowsAbout: [
      "AWS",
      "DevOps",
      "CI/CD",
      "Jenkins",
      "GitLab",
      "Docker",
      "Linux",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
      "CloudWatch",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
