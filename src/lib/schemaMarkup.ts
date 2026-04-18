/**
 * Schema.org Structured Data for SEO
 * Generates JSON-LD for Google Rich Snippets
 */

export interface SchemaConfig {
  domain: string;
  company: {
    name: string;
    description: string;
    email: string;
    phone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  serviceArea: string[];
}

export const defaultSchemaConfig: SchemaConfig = {
  domain: 'https://lsrbuilding.be',
  company: {
    name: 'LSR Building',
    description: 'Projectcoördinatie, renovatiewerken en kleine bouwprojecten in België. VOL VCA gecertificeerd.',
    email: 'info@lsrbuilding.be',
    phone: '+32 473 258 539',
    address: {
      streetAddress: 'Brecht',
      addressLocality: 'Brecht',
      postalCode: 'BE',
      addressCountry: 'BE',
    },
  },
  serviceArea: ['Antwerpen', 'Brussel', 'Vlaanderen', 'België'],
};

export function generateLocalBusinessSchema(config: SchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': config.domain,
    name: config.company.name,
    description: config.company.description,
    url: config.domain,
    telephone: config.company.phone,
    email: config.company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.company.address.streetAddress,
      addressLocality: config.company.address.addressLocality,
      postalCode: config.company.address.postalCode,
      addressCountry: config.company.address.addressCountry,
    },
    areaServed: config.serviceArea.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '€€',
    sameAs: ['https://www.facebook.com/lsrbuilding'],
  };
}

export function generateOrganizationSchema(config: SchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.company.name,
    url: config.domain,
    description: config.company.description,
    email: config.company.email,
    telephone: config.company.phone,
    sameAs: ['https://www.facebook.com/lsrbuilding'],
    logo: `${config.domain}/logo.png`,
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wat is het verschil tussen projectcoördinatie en werfbeheer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Projectcoördinatie omvat planning, communicatie en oversicht van het gehele project. Werfbeheer focust op dagelijks toezicht en veiligheid op locatie. LSR Building biedt beide.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoeveel kost een consultatie bij LSR Building?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een eerste consultatie is volledig gratis. We analyseren uw project en geven honest advies — zelfs als we denken dat een ander bedrijf beter past.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoe lang duurt het voordat we reactie krijgen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We garanderen een reactie binnen 4 uur op alle vragen. Meestal antwoorden we veel sneller.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wat betekent VOL VCA certificering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VOL VCA (Volwaardig VCA) is een Nederlands/Belgisch veiligheidscertificaat dat toont dat we strenge veiligheidsnormen hanteren op alle worksites. Dit is een verplichte certificering voor veel industriële projecten.',
        },
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function injectSchemaTag(schema: any): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
