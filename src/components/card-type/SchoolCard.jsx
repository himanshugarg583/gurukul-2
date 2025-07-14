import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'motion/react'
import { schoolImages } from '../../assets/schoolimg'

const SchoolCarousel = () => {
  const controls = useAnimation()
  const containerRef = useRef(null)

  const ITEM_WIDTH = 220
  const VISIBLE_COUNT = 3

  // Duplicate the images for infinite loop illusion
  const extendedImages = [...schoolImages, ...schoolImages]

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      index++
      controls.start({
        x: -index * ITEM_WIDTH,
        transition: { duration: 0.6, ease: 'easeInOut' },
      })

      // Reset loop once halfway through (using duplicated array)
      if (index === schoolImages.length) {
        setTimeout(() => {
          controls.set({ x: 0 }) // jump back instantly
          index = 0
        }, 700)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [controls])

  return (
    <div className="overflow-hidden w-full max-w-6xl mx-auto ">
      <motion.div
        className="flex"
        animate={controls}
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -schoolImages.length * ITEM_WIDTH, right: 0 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="w-[220px] h-[200px] flex-shrink-0 p-4 md:p-2"
          >
            <div className="w-full h-full shadow-md rounded-xl overflow-hidden">
              <img
                src={image}
                alt={`school-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SchoolCarousel
