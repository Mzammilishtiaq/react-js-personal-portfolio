import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Muhammad Muzammil Ishtiaq</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          with a knack for creating stunning, responsive, and user-friendly websites. With 2 years of experience in web development, I specialize in crafting clean and efficient code that brings designs to life.
          </p>
        </div>
      <Link to="Contact"><button className="btn btn-primary">Get In Touch</button></Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
