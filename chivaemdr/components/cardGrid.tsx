import { ReactNode } from 'react';

export interface CardGridProps {
    gridtitle: string;
    children: ReactNode;
  }
  
  export default function CardGrid ({ gridtitle, children }: CardGridProps) {
    return (
      <div className="py-8 center bg-foreground">
        <h2 className="font-baloo text-6xl font-bold mb-4 text-violet-950">{gridtitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {children}
        </div>
      </div>
    );
  };