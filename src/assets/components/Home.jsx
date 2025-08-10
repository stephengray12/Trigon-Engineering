import Container from "./Container";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PHONE_DISPLAY = "501-312-2111"; // Update to correct business line
const PHONE_TEL = "+15013122111";
const ADDRESS = "8020 B Counts Massie, North Little Rock, AR 72113";
const SITE_URL = "https://www.trigonengineering.com";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Trigon Engineering, Inc.",
    image: `${SITE_URL}/favicon-512x512.png`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.split(",")[0],
      addressLocality: "North Little Rock",
      addressRegion: "AR",
      postalCode: "72113",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.77127747289468,
      longitude: -92.25245572279087
    },
    openingHours: "Mo-Fr 08:00-17:00"
  };

  return (
    <main className="flex-grow bg-black">
      <Helmet>
        <title>Trigon Engineering | Manufacturer’s Representative in Arkansas</title>
        <meta
          name="description"
          content="Trigon Engineering provides pumps, valves, wet-process systems, and wastewater treatment equipment to Arkansas and the Mid-South since 1980."
        />
        <meta property="og:title" content="Trigon Engineering" />
        <meta
          property="og:description"
          content="Serving Arkansas and the Mid-South with engineered wet-process equipment since 1980."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/favicon-512x512.png`} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero / Contact section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-10">
        {/* Embedded Map */}
        <iframe
          title={`Map to Trigon Engineering, ${ADDRESS}`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.377234577377!2d-92.25245572279087!3d34.77127747289468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2bc693ded17d5%3A0x991920e79e7d2c63!2s1317%20N%20Hills%20Blvd%20%23401%2C%20North%20Little%20Rock%2C%20AR%2072114!5e0!3m2!1sen!2sus!4v1736118474899!5m2!1sen!2sus"
          className="w-full max-w-xl h-96 rounded-xl shadow-lg border border-white/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        {/* Welcome Card */}
        <div className="w-full max-w-3xl rounded-2xl shadow-2xl border border-white/15 bg-white/5 backdrop-blur-md text-gray-100 p-8">
          <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">
            Welcome to Trigon Engineering
          </h1>

          <p className="mb-4 text-lg leading-relaxed text-gray-200">
            We are a full-service manufacturer’s representative serving Arkansas and the Mid-South since 1980.
            Trigon specializes in engineered wet-process equipment—pumps, valves, and related process systems—
            plus wastewater treatment solutions tailored to your requirements.
          </p>

          <p className="mb-6 text-lg text-gray-300">
            Thanks for visiting—we look forward to serving you.
          </p>

          <div className="text-center space-y-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-md transition"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
            <address className="not-italic text-sm text-gray-400">
              {ADDRESS}
            </address>
          </div>
        </div>
      </section>

      {/* Products/Services */}
      <section aria-label="Products and Services">
        <Container />
      </section>
    </main>
  );
}
