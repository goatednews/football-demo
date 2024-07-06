'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Example() {
  const [open, setOpen] = useState(true)
  
  const images = [
    { title: 'Image 1', src: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80' },
    { title: 'Image 2', src: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80' },
    { title: 'Image 3', src: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80' },
    { title: 'Image 4', src: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80' },
  ]
  
  return (
    <Dialog open={open} onClose={() => {}} className="relative z-10">
      <div className="fixed inset-0" />
      
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10 sm:pr-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Please Select Player</DialogTitle>
                  </div>
                </div>
                {/* Main */}
                <div className="divide-y divide-gray-200">
                  <div className="pb-6">
                    <div className="grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8">
                      {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                            <img
                              alt={image.title}
                              src={image.src}
                              className="h-24 w-24 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                            />
                          </div>
                          <div className="mt-2 text-center">
                            <p className="text-sm text-gray-900">{image.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
