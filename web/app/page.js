'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function AlgalBloomsWebsite() {
  function onClick() {
    window.open("https://dashboard.blooket.com/set/66e89db5003e646f6caf8a1d")
  }
  const [activeTab, setActiveTab] = useState('overview')

  const tabContent = {
    overview: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">What are Algal Blooms (HABs)?</h2>
        <p className="text-gray-300">Harmful algal blooms occur when toxin-producing algae consistently grows in bodies of water. These blooms can have significant impacts on both benthic (bottom) and pelagic (water column) environments.</p>
      </div>
    ),
    problems: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Environmental Impact</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-teal-300">Benthic Zone Effects:</h3>
        <ul className="list-disc pl-5 ml-3 text-gray-300">
          <li>Oxygen depletion</li>
          <li>Light reduction</li>
          <li>Altered habitat structure</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-teal-300">Pelagic Zone Effects:</h3>
        <ul className="list-disc pl-5 ml-3 text-gray-300">
          <li>Eutrophication</li>
          <li>Toxicity</li>
          <li>Disruption of food webs</li>
          <li>Altered temperature and chemistry</li>
        </ul>
      </div>
    ),
    solutions: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Combating Algal Blooms</h2>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-teal-300">Aeration:</strong> Creating water movement to increase oxygen dissolution.</li>
          <li><strong className="text-teal-300">Additives:</strong> Using substances in small amounts for preservation.</li>
          <li><strong className="text-teal-300">Ultrasonic Technology:</strong> Employing sound waves to limit algae's access to sunlight and nutrients.</li>
          <li><strong className="text-teal-300">Stable Isotopes:</strong> Utilizing ratios and mixing models to study predation and competition.</li>
          <li><strong className="text-teal-300">Molecular Methods:</strong> Implementing techniques like barcoding and metagenomics to study ecological interactions.</li>
        </ul>
      </div>
    ),
    interactive: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Interactive Learning</h2>
        <p className="text-gray-300 mb-4">Click the button below to start our interactive Blooket game about algal blooms.</p>
        <button onClick={onClick} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50">
          Launch Blooket Game
        </button>
      </div>
    ),
  }

  return (
    <div className="text-white bg-gray-900 min-h-screen w-full container mx-auto p-8">
      <h1 className="text-5xl font-bold mb-8 text-center text-emerald-400">Algal Blooms: Understanding the Impact</h1>
      
      <div className="mb-6 flex justify-center space-x-4">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full transition duration-300 ease-in-out ${
              activeTab === tab 
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
        {tabContent[activeTab]}
      </div>

      <div className="mt-12 bg-gray-800 p-4 rounded-lg shadow-lg">
        <Image 
          src="/image.png" 
          alt="Algal Bloom Illustration" 
          width={800} 
          height={400} 
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      
      <footer className="mt-12 text-center text-sm text-gray-400">
        <p className="font-semibold text-lg mb-2">Sources:</p>
        <ul className="list-none space-y-1">
          <li>National Institute of Environmental Health Sciences</li>
          <li>How to Prevent Algal Blooms in Lakes and Reservoirs</li>
          <li><a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2656.13947" className="underline hover:text-emerald-400 transition duration-300">British Ecological Society Journal</a></li>
        </ul>
      </footer>
    </div>
  )
}