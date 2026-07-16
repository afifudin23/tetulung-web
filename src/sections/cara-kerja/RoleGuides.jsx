import { UserRound, UserRoundCheck } from "lucide-react";
import { ROLE_GUIDES } from "../../data/caraKerja";
import "./RoleGuides.css";

const HEAD_ICONS = { blue: UserRound, teal: UserRoundCheck };

export default function RoleGuides() {
  return (
    <section className="section">
      <div className="container role-guides">
        {ROLE_GUIDES.map(({ tone, title, steps }) => {
          const HeadIcon = HEAD_ICONS[tone];
          return (
            <div key={title} className={`role-guides__card role-guides__card--${tone}`}>
              <div className="role-guides__head">
                <span className="role-guides__head-icon">
                  <HeadIcon size={22} />
                </span>
                <h3>{title}</h3>
              </div>

              <ol className="role-guides__steps">
                {steps.map(({ icon: Icon, title: stepTitle, description }, i) => (
                  <li key={stepTitle} className="role-guides__step">
                    <span className="role-guides__number">{i + 1}</span>
                    <span className="role-guides__icon">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h4>{stepTitle}</h4>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
}
