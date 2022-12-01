import React, { useState, useEffect } from 'react';
import logo from "../images/White_Transparent_AIID_short.png"
import search from "../images/search.png"
import submit from "../images/submit.png"
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";


const IndexPage = () => {
  const [date, setdate] = useState(new Date());
  const [date2, setdate2] = useState(new Date());

  return (
    <main>
      <nav class="flex items-center justify-between flex-wrap bg-[#071d49] p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} className="w-[130px] h-[40px]" />
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              AI INCIDENT DATABASE
            </a>

          </div>
          <div>
            <button type="button" class="inline-flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-[10px]">
              English
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <li className="divider hiddenMobile list-none" />

          <div>
            <svg
              class="w-6 h-6 text-blue-300 fill-current mr-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </div>

          <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Subscribe</a>
          </div>
        </div>
      </nav>

      <div class="w-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar h-[1400px]">
        <div class="w-64 px-4">

          <div class="grid grid-rows-2 gap-2">
            <button class="row-start-1 row-end-4 w-[50%] mt-[15px] ml-[15px]">
              <img src={search} className="w-full" />
              Discover</button>
            <button class="row-start-1 row-end-4 w-[50%] mt-[15px]">
              <img src={submit} className="w-full" />
              Submit</button>
          </div>

          <div class="px-2 pb-8 border-r border-gray-300">
            <div class="space-y-6 md:space-y-10 mt-10">

              <div class="flex flex-col space-y-2">
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                  <span class="">Welcome to the AIID</span>
                </a>
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                    ></path>
                  </svg>
                  <span class="">Discover Incidents</span>
                </a>
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="">Spatial View</span>
                </a>
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                    ></path>
                    <path
                      d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                    ></path>
                  </svg>
                  <span class="">Table View</span>
                </a>
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="">Entities</span>
                </a>
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="">Taxonmies</span>
                </a>
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                    ></path>
                  </svg>
                  <span class="">Word Counts</span>
                </a>
                <a
                  href=""
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    class="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                    ></path>
                  </svg>
                  <span class="">Submit Incident Reports</span>
                </a>
                <hr />
              </div>
              <div className="flex flex-col items-center mt-[10px]">
                <a href="#" class="text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:bg-white">Subscribe</a>
              </div>
            </div>
          </div>
        </div>



        <div class="flex-1 px-2">
          <div class="h-16 flex items-center">
            <h4 class="text-lg font-bold">Step 1- Main Information</h4>
          </div>
          <div class="mb-6 pt-4">
            <div className="mr-[50px] ml-[30px]">
              <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900">* Title</label>
              <div class="relative mb-4">
                <input type="text" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Report Title" />
              </div>
            </div>
            <div className="mr-[50px] ml-[30px]">
              <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900">* Author(s)</label>
              <div class="relative mb-4">
                <input type="text" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Place Author(s) name(s)..." />
              </div>
            </div>
            <div className="mr-[50px] ml-[30px]">
              <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900">* Date Published</label>
              <div class="relative mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <DatePicker selected={date} onChange={(date) => setdate(date)} />
              </div>
            </div>
            <div className="mr-[50px] ml-[30px]">
              <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900">* Date Downloaded</label>
              <div class="relative mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <DatePicker selected={date2} onChange={(date) => setdate2(date)} />
              </div>
            </div>
            <div className="mr-[50px] ml-[30px]">
              <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900">* File Upload</label>
              <div class="relative mb-4">
                <input type="file" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Place Author(s) name(s)..." />
              </div>
            </div>
            <div class="ml-[30px] flex items-center space-x-2 my-2">
              <div
                class="w-40 flex items-center justify-between text-gray-600 px-2 py-1.5  border border-gray-400 rounded-lg hover:bg-gray-200">
                <div class="w-28 flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                    </path>
                  </svg>
                  <span class="text-sm truncate">Review.zip</span>
                </div>
                <button class="hover:text-gray-900" title="Remove">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div
                class="w-40 flex items-center justify-between text-gray-600 px-2 py-1.5  border border-gray-400 rounded-lg hover:bg-gray-200">
                <div class="w-28 flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                    </path>
                  </svg>
                  <span class="text-sm truncate">Approve.zip</span>
                </div>
                <button class="hover:text-gray-900" title="Remove">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>



            <div className="mr-[50px] ml-[30px]">
              <textarea rows={10} id="body" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Message..."></textarea>
            </div>
          </div>
          <div class="ml-[2600px] items-right">
            <button class="bg-blue-500 hover:bg-blue-700 rounded-lg px-12 py-1.5 text-gray-100 hover:shadow-xl transition duration-150">Send</button>
          </div>
        </div>
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
