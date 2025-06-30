import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useGetCollectionItemsQuery } from '../../api/boutiqueApi';
import { Navigate } from 'react-router-dom';

const DetailPage = () => {
  const params = useParams();
  const { data: itemDetails, isLoading, isError } = useGetCollectionItemsQuery(params.name as string);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  if (isLoading) return <p>Loading...</p>;
  if (isError || !itemDetails) {
    return <Navigate to="/shop" replace />;
  }

  const { title, description , cost, sizes, image } = itemDetails; 

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    // Add to cart logic here
   };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="w-full">
        <img src={image} alt={title} className="rounded-xl w-full object-cover" />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-2xl font-bold text-green-800 mb-6">₹{cost.toLocaleString()}</p>

        {/* Size Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Size:</label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg ${
                  selectedSize === size
                    ? 'bg-green-700 text-white'
                    : 'bg-white text-gray-800 border-gray-300'
                } hover:border-green-500`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={e => setQuantity(parseInt(e.target.value))}
            className="w-20 border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
