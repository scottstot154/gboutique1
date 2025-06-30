export type CollectionCardProps = {
  itemId: string;
  image: string;
  title: string;
  description: string;
};

const CollectionCard: React.FC<CollectionCardProps> = ({ itemId, image, title, description }) => (
  <div
    style={{
      border: '1px solid #eee',
      borderRadius: 8,
      padding: 16,
      width: 240,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      background: '#fff',
      margin: 8,
      textAlign: 'center',
      cursor: 'pointer'
    }}
    onClick={() => window.location.href = `/collections/${itemId}`}
    tabIndex={0}
    role="button"
    onKeyPress={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = `/collections/${itemId}`;
      }
    }}
  >
    <img src={image} alt={title} style={{ width: '100%', borderRadius: 6, marginBottom: 12 }} />
    <h3 style={{ margin: '8px 0' }}>{title}</h3>
    <p style={{ color: '#666', fontSize: 14 }}>{description}</p>
  </div>
);

export default CollectionCard;