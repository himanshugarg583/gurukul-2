import React from "react"

const StatisticsCard = ({ image, data, description, hasPlus = true }) => {
  return (
    <div className="w-[264px] h-[155px] bg-gradient-to-r from-[#FFE5DC] to-[#FFF7E6] rounded-2xl flex items-center p-4 shadow-md">
      {/* Icon Box */}
      <div className="w-[64px] h-[64px] bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
        <img src={image} alt="icon" className="w-18 h-18 object-contain" />
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-xl font-bold text-[#1B1B1F]">
          {data}
          {hasPlus && !data.includes("%") && "+"}
        </h1>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  )
}

export default StatisticsCard
