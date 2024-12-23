import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { satu, sembilan } from '@/assets'

const images = [
    satu,
   
    sembilan,
]

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 2000)

        return () => clearInterval(timer)
    }, [])

    return (
      <div className="relative w-full h-64 md:h-[58rem] overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ scale: 1.2, opacity: index === 0 ? 1 : 0 }}
            animate={{
              scale: index === currentIndex ? 1 : 1.2,
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are getting married
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            January 1, 2025
          </motion.p>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
}