import Link from "next/link";
import { Wave } from "./Wave";

export function Hero() {
  return (
    <section className="hero px-section">
      <div className="hero-content" style={{ alignItems: "flex-start" }}>
        <h1>
          The New Era of
          <br />
          Surety Bonds
        </h1>
        <p style={{ fontSize: 20 }}>
          AI-powered platform designed for Surety Brokers
        </p>
        <div className="hero-cta">
          <Link href="#contact" className="btn btn-default btn-xl">
            Request Demo
          </Link>
          <Link href="#process" className="btn btn-outline btn-xl">
            Learn More
          </Link>
        </div>
      </div>
      <Wave />
    </section>
  );
}
