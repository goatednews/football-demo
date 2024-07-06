// app/_component/sidebar.tsx
'use client';

import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFaceImage, clearFaceImage} from '@/app/_redux/slices/selectedImages';
import {setShirtImage, clearShirtImage} from '@/app/_redux/slices/selectedShirtImages';

export default function Sidebar() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState('');
  const faceImage = useSelector((state) => state?.image?.image); // Ensure this matches your state structure
  let images;
  const dispatch = useDispatch();
  
  if (faceImage) {
    images = [
      {id: 1, title: 'Image 1', src: '/Images/manchester-united.png'},
      {id: 2, title: 'Image 2', src: '/Images/liver-pool.png'},
      {id: 3, title: 'Image 3', src: '/Images/liver-pool.png'},
      {id: 4, title: 'Image 4', src: '/Images/liver-pool.png'},
    ];
  } else {
    images = [
      {id: 1, title: 'Image 1', src: '/Images/Image - 1.png'},
      {id: 2, title: 'Image 2', src: '/Images/Image - 2.png'},
      {id: 3, title: 'Image 3', src: '/Images/Image - 2.png'},
      {id: 4, title: 'Image 4', src: '/Images/Image - 2.png'},
    ];
  }
  
  
  const handleImageClick = (image) => {
    setError('');
    setSelectedImage(image);
    console.log(`Selected Image ID: ${image.id}, Title: ${image.title}`);
  };
  
  const handleClearImage = () => {
    setSelectedImage(null);
    dispatch(clearFaceImage());
    dispatch(clearShirtImage());
  };
  
  const handleSubmit = () => {
    if (!selectedImage) {
      setError('Please Select Image');
      return;
    } else {
      if (faceImage) {
        console.log('setting shirt image')
        dispatch(setShirtImage(selectedImage));
        setSelectedImage(null)
      } else {
        console.log('setting face image')
        dispatch(setFaceImage(selectedImage));
        setSelectedImage(null)
        
      }
      console.log('Submit button clicked');
    }
  };
  
  return (
    <div className="w-1/4 min-h-screen h-full border-r border-gray-300">
      <div className="flex flex-col overflow-y-scroll bg-white min-h-screen h-full">
        <div className="px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between w-full">
            <h2 className="text-base font-semibold leading-6 text-gray-900 text-center w-full">
              {faceImage ? 'Please Select the Jersey Now' : 'Please Select Player'}
            </h2>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="pb-6">
            <div className="grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="inline-flex overflow-hidden rounded-lg">
                    <img
                      alt={image.title}
                      src={image.src}
                      className={`${
                        selectedImage?.id === image.id ? 'border-4 border-indigo-500' : 'border-4 border-transparent'
                      } rounded-lg`}
                      onMouseEnter={(e) => e.currentTarget.classList.add('border-indigo-500')}
                      onMouseLeave={(e) => {
                        if (selectedImage?.id !== image.id) {
                          e.currentTarget.classList.remove('border-indigo-500');
                        }
                      }}
                      style={{borderRadius: '10px'}}
                    />
                  </div>
                  <div className="mt-2 text-center w-full">
                    <p className="text-sm text-gray-900">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {error && (
          <div className="flex items-start justify-between w-full">
            <p className="text-base font-semibold leading-6 text-red-700 text-center w-full">
              {error}
            </p>
          </div>
        )}
        <div className="px-16 py-3 sm:px-16 sm:flex justify-between">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:text-sm"
            onClick={handleClearImage}
          >
            Clear
          </button>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:text-sm"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
