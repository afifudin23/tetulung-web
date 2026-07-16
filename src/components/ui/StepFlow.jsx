import { MoveRight } from "lucide-react";
import { Fragment } from "react";
import "./StepFlow.css";

/**
 * Alur langkah bernomor dengan panah (Alur Cara Kerja, Langkah Bergabung).
 * @param {{icon: import("react").ElementType, title: string, description: string}[]} steps
 */
export default function StepFlow({ steps }) {
  return (
    <div className="step-flow">
      {steps.map(({ icon: Icon, title, description }, i) => (
        <Fragment key={title}>
          {i > 0 && <MoveRight size={22} className="step-flow__arrow" />}
          <div className="step-flow__step">
            <span className="step-flow__number">{i + 1}</span>
            <span className="step-flow__icon">
              <Icon size={30} />
            </span>
            <h3 className="step-flow__title">{title}</h3>
            <p className="step-flow__desc">{description}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
