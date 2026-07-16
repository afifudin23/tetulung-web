import { Eye, Target, CircleCheck } from "lucide-react";
import { VISION, MISSIONS } from "../../data/tentang";
import "./VisionMission.css";

export default function VisionMission() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="vision-mission__heading">
          <span className="text-primary">Visi</span> &{" "}
          <span className="text-teal">Misi</span> Kami
        </h2>

        <div className="vision-mission__grid">
          <div className="vision-mission__card vision-mission__card--blue">
            <span className="vision-mission__icon vision-mission__icon--blue">
              <Eye size={26} />
            </span>
            <div>
              <h3 className="text-primary">Visi</h3>
              <p>{VISION}</p>
            </div>
          </div>

          <div className="vision-mission__card vision-mission__card--teal">
            <span className="vision-mission__icon vision-mission__icon--teal">
              <Target size={26} />
            </span>
            <div>
              <h3 className="text-teal">Misi</h3>
              <ul className="vision-mission__list">
                {MISSIONS.map((mission) => (
                  <li key={mission}>
                    <CircleCheck size={17} className="vision-mission__check" />
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
