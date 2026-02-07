import { getAllDates } from '@/lib/dates';
import HomepageContent from '@/components/HomepageContent';
import Footer from '@/components/Footer';

export default function HomePage() {
  const allDates = getAllDates();

  return (
    <>
      <HomepageContent allDates={allDates} />
      <Footer />
    </>
  );
}
