'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [open, setOpen] = useState(true)
  
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
                    <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28" />
                    <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                      <div>
                        <div className="-m-1 flex">
                          <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                            <img
                              alt=""
                              src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                              className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 sm:ml-6 sm:flex-1">
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Ashley Porter</h3>
                            <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                              <span className="sr-only">Online</span>
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">@ashleyporter</p>
                        </div>
                        <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                          <button
                            type="button"
                            className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                          >
                            Message
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Call
                          </button>
                          <div className="ml-3 inline-flex sm:ml-0">
                            <Menu as="div" className="relative inline-block text-left">
                              <MenuButton className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <span className="absolute -inset-1" />
                                <span className="sr-only">Open options menu</span>
                                <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                              </MenuButton>
                              <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                              >
                                <div className="py-1">
                                  <MenuItem>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                    >
                                      View profile
                                    </a>
                                  </MenuItem>
                                  <MenuItem>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                    >
                                      Copy profile link
                                    </a>
                                  </MenuItem>
                                </div>
                              </MenuItems>
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:px-0 sm:py-0">
                    <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Bio</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                          <p>
                            Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                            feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean
                            arcu.
                          </p>
                        </dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">New York, NY, USA</dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Website</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">ashleyporter.com</dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Birthday</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                          <time dateTime="1982-06-23">June 23, 1982</time>
                        </dd>
                      </div>
                    </dl>
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
