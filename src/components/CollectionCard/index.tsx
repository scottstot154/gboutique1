export type CollectionCardProps = {
  itemId: string;
  image: string;
  title: string;
  description: string;
};

const CollectionCard: React.FC<CollectionCardProps> = ({
  itemId,
  image,
  title,
  description,
}) => (
  <div
    className="border border-gray-200 rounded-lg p-4 w-60 shadow-md bg-white m-2 text-center cursor-pointer outline-none"
    onClick={() => (window.location.href = `/collections/${itemId}`)}
    tabIndex={0}
    role="button"
    onKeyPress={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        window.location.href = `/collections/${itemId}`;
      }
    }}
  >
    <img src={image} alt={title} className="w-full rounded-md mb-3" />
    <h3 className="my-2 text-lg font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

export default CollectionCard;
