/**
 * Card Component
 * ----------------
 * A reusable UI component for displaying property information across the project.
 *
 * Features:
 * - Responsive image with discount badge overlay
 * - Title, description, and rating display
 * - Property details (beds, baths, guests)
 * - Optional tags (e.g., "Top Villa", "Self CheckIn")
 * - Price per night
 * - Subtle hover effects (lift + image zoom) for interactivity
 *
 * Usage:
 * Import and use <Card /> wherever property listings need to be displayed.
 * Typically consumed inside a grid layout (see CardGrid).
 *
 * Location:
 * components/common/Card.tsx
 */

import React from 'react';
import Image from 'next/image';
import { FaStar, FaBed, FaBath, FaUser } from 'react-icons/fa';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  discount,
  rating,
  beds,
  baths,
  guests,
  tags,
  price,
}) => {
  return (
    <div className="transform overflow-hidden rounded-lg border bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      {/* Image with discount badge */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        )}
        {discount && (
          <span className="absolute top-2 left-2 rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
            {discount} Off
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title + Rating */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          {rating && (
            <div className="flex items-center text-sm text-yellow-500">
              <FaStar className="mr-1" /> {rating}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="mb-3 text-sm text-gray-600">{description}</p>

        {/* Property details */}
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          {beds && (
            <span className="flex items-center">
              <FaBed className="mr-1" /> {beds} beds
            </span>
          )}
          {baths && (
            <span className="flex items-center">
              <FaBath className="mr-1" /> {baths} baths
            </span>
          )}
          {guests && (
            <span className="flex items-center">
              <FaUser className="mr-1" /> {guests} guests
            </span>
          )}
        </div>

        {/* Tags */}
        {tags && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        {price && (
          <span className="text-lg font-bold text-gray-800">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}/n
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
