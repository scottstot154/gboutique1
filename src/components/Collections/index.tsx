import React from "react";
import CollectionCard, { CollectionCardProps } from "../CollectionCard";

type CollectionsProps = {
  title?: string;
  subtitle?: string;
  collections: CollectionCardProps[];
};

const Collections: React.FC<CollectionsProps> = ({
  title = "Our Collections",
  subtitle = "Discover our curated range of collections below.",
  collections,
}) => (
  <section className="py-8 bg-gray-50">
    <div className="mx-auto px-4">
      <h1 className="text-3xl mb-2">{title}</h1>
      <h2 className="text-lg text-gray-500 mb-8">{subtitle}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {collections.map((col) => (
          <CollectionCard key={col.itemId} {...col} />
        ))}
      </div>
    </div>
  </section>
);

export default Collections;
