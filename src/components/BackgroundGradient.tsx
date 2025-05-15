import { useEffect, useRef } from "react";

interface BackgroundGradientProps {
  className?: string;
}

export const BackgroundGradient = ({ className = "" }: BackgroundGradientProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = event;
      const { width, height, top, left } = ref.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      ref.current.style.setProperty("--mouse-x", `${x}`);
      ref.current.style.setProperty("--mouse-y", `${y}`);
    };

    const currentRef = ref.current;
    currentRef.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`absolute inset-0 -z-10 transition-all duration-200 bg-gradient-to-br
                 from-wisper-purple/[calc(0.3-var(--mouse-y,0)*0.1)]
                 to-wisper-blue/[calc(0.3-var(--mouse-x,0)*0.1)]
                 ${className}`}
      style={{ "--mouse-x": "0.5", "--mouse-y": "0.5" } as React.CSSProperties}
    />
  );
};

export default BackgroundGradient;
