import "./Healthybenifits.css";

interface HealthyBenefitCardProps {
  image: string;
  title: string;
}

export default function HealthyBenifits({
  image,
  title,
}: HealthyBenefitCardProps) {
  return (
    <div className="healthy-card">
      <div className="healthy-container">
        <img src={image} alt={title} className="healthy-image" />
      </div>
      <div className="healthy-title">
        <h1 className="healthy-card-title">{title}</h1>
      </div>
    </div>
  );
}
