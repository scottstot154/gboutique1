import React from 'react';

// Import images from assets/collections
import dress1 from '../assets/collections/item1.png';
import dress2 from '../assets/collections/item2.png';
import dress3 from '../assets/collections/item3.png';
import CollectionCard, { CollectionCardProps } from './CollectionCard';

type CollectionsProps = {
  title?: string;
  subtitle?: string;
  collections?: CollectionCardProps[];
};

const sampleCollections: CollectionCardProps[] = [
  {
    image: dress1,
    title: 'Summer Collection',
    description: 'Bright and breezy styles for the summer season.',
  },
  {
    image: dress2,
    title: 'Winter Collection',
    description: 'Warm and cozy outfits for winter.',
  },
  {
    image: dress3,
    title: 'Festive Collection',
    description: 'Celebrate in style with our festive picks.',
  },
];

const Collections: React.FC<CollectionsProps> = ({
  title = 'Our Collections',
  subtitle = 'Discover our curated range of collections below.',
  collections = sampleCollections,
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
        {collections.map((col, idx) => (
          <CollectionCard key={idx} {...col} />
        ))}
      </div>
    </div>
  </section>
);

export default Collections;