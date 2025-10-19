import React from 'react';

interface ElegantGridProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  centered?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

/**
 * ElegantGrid Component
 * A flexible grid system component for creating elegant layouts
 * with consistent spacing and alignment options
 */
export const ElegantGrid: React.FC<ElegantGridProps> = ({
  children,
  className = '',
  container = false,
  centered = false,
  spacing = 'md',
}) => {
  const containerClass = container ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : '';
  const centerClass = centered ? 'items-center justify-center' : '';
  
  const spacingClasses = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };
  
  const spacingClass = spacingClasses[spacing];
  
  return (
    <div 
      className={`
        ${containerClass}
        ${centerClass}
        ${spacingClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const GridItem: React.FC<GridItemProps> = ({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
  align = 'center',
  justify = 'center',
}) => {
  // Mapping untuk column span dalam Tailwind
  const colSpanClasses = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
    7: 'md:col-span-7',
    8: 'md:col-span-8',
    9: 'md:col-span-9',
    10: 'md:col-span-10',
    11: 'md:col-span-11',
    12: 'md:col-span-12',
  };
  
  // Mapping untuk alignment
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };
  
  // Mapping untuk justification
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };
  
  return (
    <div 
      className={`
        ${colSpanClasses[colSpan]}
        ${alignClasses[align]}
        ${justifyClasses[justify]}
        row-span-${rowSpan}
        ${className}
      `}
    >
      {children}
    </div>
  );
};