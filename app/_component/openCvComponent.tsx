'use client'
import Image from "next/image";
import React, {useState} from 'react';

type ImageObj = { id: number; title: string; src: string; }


export default function Sidebar() {
  const images = [
    {id: 1, title: 'Image 1', src: '/Images/male-side2.jpg'},
    {id: 3, title: 'Image 3', src: '/Images/male-back.jpg'},
    {id: 4, title: 'Image 4', src: '/Images/male-front.jpg'},
  ];
  
  const [selectedImage, setSelectedImage] = useState<ImageObj | null>(null);
  const [processedImage, setProcessedImage] = useState(null);
  
  const handleGenerate = async () => {
    if (selectedImage) {
      const formData = new FormData();
      const imageFile = await fetch(selectedImage.src).then((r) => r.blob());
      formData.append("file", imageFile, "image.jpg");
      
      const response = await fetch('http://127.0.0.1:8000/api/generate', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      setProcessedImage(data.processedImageUrl);
    }
  };
  
  
  return (
    <div className="w-full min-h-screen h-full border-r border-gray-300 p-4">
      <h2 className="text-xl font-bold mb-4">Select an Image</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`flex flex-col items-center cursor-pointer p-2 rounded ${selectedImage && selectedImage.id === image.id ? 'border-4 border-blue-500' : 'border'}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} width={200} height={200} alt={image.title}/>
            <button
              className="mt-2 text-left p-2 bg-gray-200 hover:bg-gray-300 rounded w-full text-black text-center"
            >
              {image.title}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        {selectedImage && (
          <div>
            <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
            <button
              className="mt-2 p-2 bg-blue-500 text-white rounded"
              onClick={handleGenerate}
            >
              Generate
            </button>
            {processedImage && (
              <img
                src={processedImage}
                alt="Processed"
                className="mt-4 border"
                style={{width: 500, height: 500}}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
