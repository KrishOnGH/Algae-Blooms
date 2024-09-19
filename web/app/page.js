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
        <h2 className="text-xl font-bold mb-2">What are Algal Blooms (HABs)?</h2>
        <p>Harmful algal blooms occur when toxin-producing algal consistently grows in bodies of water. These blooms can have significant impacts on both benthic (bottom) and pelagic (water column) environments.</p>
      </div>
    ),
    problems: (
      <div>
        <h2 className="text-xl font-bold mb-2">Environmental Impact</h2>

        <h3 className="ml-2 text-lg font-semibold mt-2">Benthic Zone Effects:</h3>
        <ul className="list-disc pl-5 ml-3">
          <li>Oxygen depletion</li>
          <li>Light reduction</li>
          <li>Altered habitat structure</li>
        </ul>

        <h3 className="ml-2 text-lg font-semibold mt-2">Pelagic Zone Effects:</h3>
        <ul className="list-disc pl-5 ml-3">
          <li>Eutrophication</li>
          <li>Toxicity</li>
          <li>Disruption of food webs</li>
          <li>Altered temperature and chemistry</li>
        </ul>
      </div>
    ),
    solutions: (
      <div>
        <h2 className="text-xl font-bold mb-2">Combating Algal Blooms</h2>
        <ul className="list-disc pl-5">
          <li><strong>Aeration:</strong> Creating water movement to increase oxygen dissolution.</li>
          <li><strong>Additives:</strong> Using substances in small amounts for preservation.</li>
          <li><strong>Ultrasonic Technology:</strong> Employing sound waves to limit algal's access to sunlight and nutrients.</li>
          <li><strong>Stable Isotopes:</strong> Utilizing ratios and mixing models to study predation and competition.</li>
          <li><strong>Molecular Methods:</strong> Implementing techniques like barcoding and metagenomics to study ecological interactions.</li>
        </ul>
      </div>
    ),
    interactive: (
      <div>
        <h2 className="text-xl font-bold mb-2">Interactive Learning</h2>
        <p>Click the button below to start our interactive Blooket game about algal blooms.</p>
        <button onClick={() => onClick()} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Launch Blooket Game
        </button>
      </div>
    ),
  }

  return (
    <div className="text-black bg-white min-h-screen w-[100vw] container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Algal Blooms: Understanding the Impact</h1>
      
      <div className="mb-4">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mr-2 px-4 py-2 rounded ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="bg-[#f4f4f4] hover:scale-[1.02] p-6 rounded-lg shadow-md">
        {tabContent[activeTab]}
      </div>

      <div className="mt-8">
        <Image 
          src="/image.png" 
          alt="Algal Bloom Illustration" 
          width={500} 
          height={300} 
          layout="responsive"
        />
      </div>
      
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Sources:</p>
        <ul className="list-none">
          <li>National Institute of Environmental Health Sciences</li>
          <li>How to Prevent Algal Blooms in Lakes and Reservoirs</li>
          <li><a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2656.13947" className="underline">British Ecological Society Journal</a></li>
        </ul>
      </footer>
    </div>
  )
}