import FilterMenu from "@/components/common/FilterMenu";

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: ButtonType;
  ariaLabel?: string;
}

export interface IconProps {
  name: string;
  file?: string
  size?: number;
  className?: string;
  active?: boolean;
};

export interface CardProps {
  title: string;
  description: string;
  image: string;
  discount?: string;
  rating?: number;
  beds?: number;
  baths?: number;
  guests?: string | number;
  tags?: string[];
  price?: number;
}

export interface CardGridProps {
  cards: PropertyProps[];
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string,
  address: Address,
  rating: number,
  category: string[],
  price: number,
  offers: Offers,
  image: string,
  discount?: string
}

export interface DiscountBadgeProps {
  discount: string;
}

export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: (label: string) => void;
}

export interface FilterMenuProps {
  filters: string[];
  focus: string;
  onChange: (value: string) => void;
}

export interface SortMenuProps {
  sortBy: string;
  onChange: (value: string) => void;
}

export interface FilterSectionProps {
  activeFilter: string;
  setActiveFilter: (c: string) => void;
  sortBy: string;
  setSortBy: (s: string) => void;
}
