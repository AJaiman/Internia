import { FC, SVGProps, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type BubbleProps = {
  fieldIcon: FC<SVGProps<SVGSVGElement>>;
  fieldName: string;
  rawFieldName: string;
  setFieldsChosen: (field: string, isRemoving: boolean) => void;
  x: number;
  y: number;
  isSelected: boolean;
};

const Bubble = ({ fieldIcon: Icon, fieldName, rawFieldName, setFieldsChosen, x, y, isSelected }: BubbleProps) => {
  return (
    <motion.div
      className={`absolute cursor-pointer select-none`}
      animate={{ x, y }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 10,
        mass: 0.75 
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      onClick={() => setFieldsChosen(rawFieldName, isSelected)}
    >
      <div
        className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-colors duration-300 min-w-[160px]
          ${isSelected 
            ? 'bg-royalPurple text-white shadow-lg' 
            : 'bg-white/90 text-royalPurple hover:bg-white hover:shadow-md backdrop-blur-sm'
          }
        `}
      >
        <Icon className="w-6 h-6" />
        <span className="mt-2 text-sm font-medium text-center">{fieldName}</span>
      </div>
    </motion.div>
  );
};

export default function BubbleField({ fields, fieldsChosen, setFieldsChosen }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculatePosition = (index: number, totalFields: number) => {
    // Create a grid-like layout with 5 columns
    const columns = 5;
    const rows = Math.ceil(totalFields / columns);
    const columnIndex = index % columns;
    const rowIndex = Math.floor(index / columns);
    
    // Increased spacing
    const horizontalSpacing = 200;
    const verticalSpacing = 120;
    
    // Calculate base position with offset to center
    const baseX = (columnIndex - Math.floor(columns/2)) * horizontalSpacing;
    const baseY = (rowIndex * verticalSpacing) - 280;
    
    // Subtle floating animation
    const time = Date.now() * 0.001 + index;
    const floatX = Math.sin(time) * 3;
    const floatY = Math.cos(time * 0.7) * 3;
    
    // Mouse influence only affects unselected bubbles
    const mouseInfluence = 0.05;
    const dx = mouseRef.current.x - (window.innerWidth / 2 + baseX);
    const dy = mouseRef.current.y - (window.innerHeight / 2 + baseY);
    const distance = Math.sqrt(dx * dx + dy * dy) + 1;
    const mouseOffsetX = (dx / distance) * 30 * mouseInfluence;
    const mouseOffsetY = (dy / distance) * 30 * mouseInfluence;

    return {
      x: baseX + floatX + mouseOffsetX,
      y: baseY + floatY + mouseOffsetY
    };
  };

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center pt-16">
      {fields.map((field, index) => {
        const [Icon, name, rawName] = field;
        const pos = calculatePosition(index, fields.length);
        return (
          <Bubble
            key={rawName}
            fieldIcon={Icon}
            fieldName={name}
            rawFieldName={rawName}
            setFieldsChosen={setFieldsChosen}
            x={pos.x}
            y={pos.y}
            isSelected={fieldsChosen.includes(rawName)}
          />
        );
      })}
    </div>
  );
}
