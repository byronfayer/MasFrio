import { whyUs } from "../data/siteConfig";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import "./WhyUs.css";

const icons = ["home", "tools", "check", "phone"];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Por qué elegirnos
          </p>
          <h2>Cercanía y trabajo serio, sin vueltas</h2>
        </div>

        <div className="whyus-grid">
          {whyUs.map((item, i) => {
            const ref = useReveal();
            return (
              <div
                key={item.title}
                ref={ref}
                className="whyus-item reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="whyus-item__num">
                  <Icon name={icons[i % icons.length]} size={20} strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
