import React from 'react';

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
  height = '60vh',
}) => (
  <section
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: '#fff',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 1rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: 0 }}>{title}</h1>
      {subtitle && <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{subtitle}</p>}
    </div>
  </section>
);

export default Hero;