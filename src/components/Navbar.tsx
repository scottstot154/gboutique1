import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
        <a href="/shop">Gauri Boutique</a>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="/shop" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>
          Shop
        </a>
        <a href="/register" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;