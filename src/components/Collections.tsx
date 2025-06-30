import React from 'react';
import CollectionCard, { CollectionCardProps } from './CollectionCard';

type CollectionsProps = {
  title?: string;
  subtitle?: string;
  collections: CollectionCardProps[];
};

const Collections: React.FC<CollectionsProps> = ({
  title = 'Our Collections',
  subtitle = 'Discover our curated range of collections below.',
  collections,
}) => (
  <section style={{ padding: '32px 0', background: '#fafafa' }}>
    <div style={{ margin: '0 auto', padding: '0 16px' }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>{title}</h1>
      <h2 style={{ fontSize: 18, color: '#888', marginBottom: 32 }}>{subtitle}</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center'
      }}>
        {collections.map((col) => (
          <CollectionCard key={col.itemId} {...col} />
        ))}
      </div>
    </div>
  </section>
);

export default Collections;