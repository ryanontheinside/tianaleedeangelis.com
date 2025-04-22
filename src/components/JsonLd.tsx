export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "Artist", "ProfessionalService"],
    "name": "Tiana Lee DeAngelis",
    "url": "https://tianaleedeangelis.com",
    "jobTitle": "Professional Tattoo Artist",
    "description": "Fine line tattoo artist specializing in designs inspired by antique medical texts, nature, insects, mushrooms, skulls, and geometric patterns.",
    "worksFor": {
      "@type": "Organization",
      "name": "Holistic Ink",
      "url": "https://www.holisticink.com/holisticink-artists/tiana-lee/",
      "description": "Tattoo studio in Boston"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boston",
      "addressRegion": "MA",
      "addressCountry": "US"
    },
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Fine Line Tattooing",
        "description": "Specialized technique using precise, delicate lines to create detailed tattoos"
      },
      {
        "@type": "Thing",
        "name": "Botanical Illustration",
        "description": "Tattoo designs featuring detailed plant and flower elements"
      },
      {
        "@type": "Thing",
        "name": "Entomological Art",
        "description": "Artistic representation of insects in tattoo form"
      },
      {
        "@type": "Thing",
        "name": "Anatomical Illustrations",
        "description": "Detailed representations of skulls and anatomical elements"
      },
      {
        "@type": "Thing",
        "name": "Traditional Art",
        "description": "Proficient in watercolor, oil, acrylic, pencils, gouache, pastels, sculpting, and miniatures"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Tattoo Consultation",
        "description": "Free initial consultation to discuss design ideas and placement",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Custom Tattoo Design",
        "description": "Personalized tattoo design service based on client's vision",
        "priceRange": "$75-$200",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Tattoo Session",
        "description": "Professional tattooing service with fine line specialization",
        "priceRange": "$150-$250/hour",
        "priceCurrency": "USD"
      }
    ],
    "hasCredential": [
      "Professional Tattoo Apprenticeship",
      "Bloodborne Pathogens Certification",
      "Cross-contamination Prevention Certification"
    ],
    "sameAs": [
      "https://instagram.com/tianaleeartistry",
      "https://www.holisticink.com/holisticink-artists/tiana-lee/"
    ],
    "additionalType": [
      "https://schema.org/Artist",
      "https://schema.org/BeautySalon"
    ],
    "image": {
      "@type": "ImageObject",
      "url": "https://tianaleedeangelis.com/images/tiana-profile.jpg",
      "width": 500,
      "height": 500,
      "caption": "Tiana Lee DeAngelis, Tattoo Artist"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 