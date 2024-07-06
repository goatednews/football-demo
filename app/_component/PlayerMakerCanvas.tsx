'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Stage, Layer, Image as KonvaImage } from 'react-konva';

export default function Example() {
  const faceImage = useSelector((state) => state?.image?.image); // Ensure this matches your state structure
  const shirtImage = useSelector((state) => state?.shirtImage?.shirtImage); // Ensure this matches your state structure
  
  console.log('faceImage : ', faceImage)
  console.log('shirtImage : ', shirtImage)
  
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const [face, setFace] = useState(null);
  const [shirt, setShirt] = useState(null);
  
  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.clientWidth || 800,
        height: containerRef.current.clientHeight || 600,
      });
    }
  }, [containerRef.current]);
  
  useEffect(() => {
    if (faceImage) {
      const img = new window.Image();
      img.src = faceImage.src;
      img.onload = () => {
        setFace(img);
      };
    }
  }, [faceImage]);
  
  useEffect(() => {
    if (shirtImage) {
      const img = new window.Image();
      img.src = shirtImage.src;
      img.onload = () => {
        setShirt(img);
      };
    }
  }, [shirtImage]);
  
  return (
    <div className="flex items-center justify-center min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div ref={containerRef} className="w-full h-full" style={{ width: '100%', height: '100vh' }}>
        <Stage width={containerSize.width} height={containerSize.height}>
          <Layer>
            {shirt && (
              <KonvaImage
                image={shirt}
                x={100}
                y={50}
                width={200}
                height={200}
              />
            )}
            {face && (
              <KonvaImage
                image={face}
                x={150}
                y={100}
                width={100}
                height={100}
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
