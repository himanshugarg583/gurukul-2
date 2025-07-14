import React from 'react'

import r1 from '../../assets/cert-images/r1.svg'
import r2 from '../../assets/cert-images/r2.svg'
import r3 from '../../assets/cert-images/r3.svg'
import r4 from '../../assets/cert-images/r4.svg'
import CTAButton from '../buttons/CTAButton'

const HeroSectionUIL = (props) => {
  const certImage = [r1, r2, r3, r4]

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 md:p-8 rounded-md gap-6">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-1 flex flex-col items-center ">
        <p className="text-gray-600 font-semibold text-sm">{props.slogan}</p>
        <h1 className="text-lg md:text-xl font-bold leading-tight">{props.title}</h1>
        <h3 className="text-sm md:text-base text-gray-700">{props.description}</h3>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm items-center">
          <CTAButton name="Get Started" onClick={props.openPopup} />
          <button className="border border-gray-700 text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 w-full sm:w-auto justify-center">
            <span>▶</span> Watch Video
          </button>
        </div>
        {/* Certifications */}
        <div className="flex flex-wrap gap-4 mt-6">
          {certImage.map((image, index) => (
            <img src={image} alt={`Certificate ${index + 1}`} key={index} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          ))}
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <img src={props.image} alt="Hero" className="w-4/5 max-w-xs md:max-w-md" />
      </div>
    </div>
  )
}

export default HeroSectionUIL
