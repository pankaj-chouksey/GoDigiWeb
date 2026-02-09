'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  images: string[]
  github?: string
  liveUrl?: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: '11PM - Late Night Food Delivery',
    description: 'Food delivery platform for late-night cravings',
    images: ['/images/11pm.png', '/images/11pm.png', '/images/11pm.png'],
    github: 'https://github.com',
    liveUrl: 'https://11pm.com',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Adhyayan - Learning Platform',
    description: 'Interactive educational platform',
    images: ['/images/adhyayan.png', '/images/adhyayan.png', '/images/adhyayan.png'],
    github: 'https://github.com',
    liveUrl: 'https://adhyayan.com',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'FrameYourWay - Custom Framing',
    description: 'Custom picture framing with real-time preview',
    images: ['/images/frameyourway.png', '/images/frameyourway.png', '/images/frameyourway.png'],
    github: 'https://github.com',
    liveUrl: 'https://frameyourway.com',
    tags: ['React', 'Express', 'Stripe']
  },
  {
    id: 4,
    title: 'GetStay - Hotel Booking',
    description: 'Modern hotel booking platform',
    images: ['/images/getstay.png', '/images/getstay.png', '/images/getstay.png'],
    github: 'https://github.com',
    liveUrl: 'https://getstay.com',
    tags: ['Vue.js', 'Node.js', 'Redis']
  },
  {
    id: 5,
    title: 'Radhe Fitness - Gym Management',
    description: 'Complete gym management system',
    images: ['/images/radhefitness.png', '/images/radhefitness.png', '/images/radhefitness.png'],
    github: 'https://github.com',
    liveUrl: 'https://radhefitness.com',
    tags: ['React', 'Firebase', 'Tailwind']
  },
  {
    id: 6,
    title: 'Yuvi Gym - Fitness Tracking',
    description: 'Personal fitness tracking app',
    images: ['/images/yuvigym.png', '/images/yuvigym.png', '/images/yuvigym.png'],
    github: 'https://github.com',
    liveUrl: 'https://yuvigym.com',
    tags: ['React Native', 'Node.js', 'MongoDB']
  }
]

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length, isDragging])

  useEffect(() => {
    if (scrollRef.current && !isDragging) {
      scrollRef.current.scrollTo({
        left: currentIndex * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex, isDragging])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleScroll = () => {
    if (scrollRef.current && isDragging) {
      const scrollLeft = scrollRef.current.scrollLeft
      const width = scrollRef.current.offsetWidth
      const newIndex = Math.round(scrollLeft / width)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full snap-center"
          >
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-48 object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.05 
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div className="glass rounded-3xl overflow-hidden border-2 border-mint-200/20 dark:border-mint-400/20 hover:border-mint-300/40 dark:hover:border-mint-300/40 transition-all duration-500 h-full flex flex-col">
        {/* Image Carousel */}
        <div className="relative overflow-hidden bg-gradient-to-br from-mint-100 to-mint-200 dark:from-mint-900/20 dark:to-mint-800/20">
          <ImageCarousel images={project.images} />
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-mint-200/20 via-transparent to-mint-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Below Image */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Heading */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gradient transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-mint-200/20 dark:bg-mint-200/10 text-mint-600 dark:text-mint-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-br from-mint-200 to-mint-400 hover:from-mint-300 hover:to-mint-500 text-dark-900 font-semibold rounded-2xl transition-all duration-300"
          >
            <span>View Project</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-96 h-96 bg-mint-400/10 dark:bg-mint-400/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Recent projects we've brought to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
