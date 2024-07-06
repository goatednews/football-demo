'use client'
import { useSelector } from "react-redux";

export default function Example() {
  const faceImage = useSelector((state) => state?.image?.image); // Ensure this matches your state structure
  const ShirtImage = useSelector((state) => state?.shirtImage?.shirtImage); // Ensure this matches your state structure

  return (
    <div className="flex items-center justify-center min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-red-500 text-center">{faceImage?.id}</div>
      <div className="text-red-500 text-center">{ShirtImage?.id}</div>
    </div>
  )
}
