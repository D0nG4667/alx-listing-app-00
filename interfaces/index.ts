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
  cards: CardProps[];
}
