import GeistMonoText from "../typography/GeistMonoText";

interface ReadingListDateHeaderProps {
  dateLabel: string;
}

export default function ReadingListDateHeader({ dateLabel }: ReadingListDateHeaderProps) {
  return (
    <GeistMonoText variant="medium" className="text-text/50 text-sm mb-3">
      {dateLabel}
    </GeistMonoText>
  );
}
