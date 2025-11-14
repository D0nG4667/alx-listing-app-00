/**
 * CardGrid Component
 * -------------------
 * A responsive grid layout for displaying multiple Card components.
 *
 * Features:
 * - Automatically adjusts the number of columns based on screen size
 *   (1 column on mobile, 2 on tablets, 3–4 on larger screens)
 * - Provides consistent spacing and alignment for property listings
 * - Accepts an array of CardProps and renders a Card for each item
 *
 * Usage:
 * Import and use <CardGrid /> to display a collection of property cards.
 * Typically used on listing/search pages.
 *
 * Location:
 * components/common/CardGrid.tsx
 */

import React from 'react';
import Card from './Card';
import type { CardGridProps } from '@/interfaces';

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
