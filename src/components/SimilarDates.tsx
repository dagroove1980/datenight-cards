import type { DateIdea } from '@/types/date';
import DateCard from './DateCard';

interface SimilarDatesProps {
  dates: DateIdea[];
}

export default function SimilarDates({ dates }: SimilarDatesProps) {
  if (dates.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-[#1A1A1A] mb-6">
        You might also like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dates.map((date) => (
          <DateCard key={date.id} date={date} />
        ))}
      </div>
    </section>
  );
}
