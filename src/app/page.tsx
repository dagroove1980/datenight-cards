import { getAllDates } from '@/lib/dates';
import HomepageContent from '@/components/HomepageContent';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';

export default function HomePage() {
  const allDates = getAllDates();

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <HomepageContent allDates={allDates} />
      <Footer />
    </>
  );
}
