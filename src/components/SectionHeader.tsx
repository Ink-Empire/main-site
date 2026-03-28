import './SectionHeader.css';

interface SectionHeaderProps {
  label: string;
}

export default function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-header-label">{label}</span>
    </div>
  );
}
