import React from "react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  height = "60vh",
}) => (
  <section
    className="relative flex items-center justify-center text-white"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height,
    }}
  >
    <div className="absolute inset-0 bg-black/40 z-10" />
    <div className="relative z-20 text-center px-4">
      <h1 className="text-5xl m-0">{title}</h1>
      {subtitle && <p className="text-2xl mt-4">{subtitle}</p>}
    </div>
  </section>
);

export default Hero;
