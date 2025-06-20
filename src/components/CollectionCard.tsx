export type CollectionCardProps = {
  image: string;
  title: string;
  description: string;
};

const CollectionCard: React.FC<CollectionCardProps> = ({ image, title, description }) => (
  <div style={{
    border: '1px solid #eee',
    borderRadius: 8,
    padding: 16,
    width: 240,
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    background: '#fff',
    margin: 8,
    textAlign: 'center'
  }}>
    <img src={image} alt={title} style={{ width: '100%', borderRadius: 6, marginBottom: 12 }} />
    <h3 style={{ margin: '8px 0' }}>{title}</h3>
    <p style={{ color: '#666', fontSize: 14 }}>{description}</p>
  </div>
);

export default CollectionCard;