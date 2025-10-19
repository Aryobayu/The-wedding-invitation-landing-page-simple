import { Heart, Calendar, MapPin, Clock, Users, Gift, Plus, Minus, Check, X } from 'lucide-react';

interface ElegantIconProps {
  className?: string;
  strokeWidth?: number;
  size?: number;
}

export const HeartIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Heart 
    className={`text-gold ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const CalendarIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Calendar 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const MapPinIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <MapPin 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const ClockIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Clock 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const UsersIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Users 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const GiftIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Gift 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const PlusIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Plus 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const MinusIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Minus 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const CheckIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <Check 
    className={`text-gold ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

export const CloseIcon = ({ className = '', strokeWidth = 2.5, size = 24 }: ElegantIconProps) => (
  <X 
    className={`text-navy ${className}`} 
    strokeWidth={strokeWidth} 
    size={size} 
  />
);

// General icon component for custom icons
interface GeneralIconProps extends ElegantIconProps {
  icon: React.ElementType;
  color?: 'navy' | 'gold' | 'white';
}

export const GeneralIcon = ({ 
  icon: Icon, 
  className = '', 
  strokeWidth = 2.5, 
  size = 24,
  color = 'navy'
}: GeneralIconProps) => {
  const colorClasses = {
    navy: 'text-navy',
    gold: 'text-gold',
    white: 'text-white'
  };
  
  return (
    <Icon 
      className={`${colorClasses[color]} ${className}`} 
      strokeWidth={strokeWidth} 
      size={size} 
    />
  );
};