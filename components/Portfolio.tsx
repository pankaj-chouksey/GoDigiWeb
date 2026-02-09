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
    id: 3,
    title: 'FrameYourWay - Custom Framing',
    description: 'Custom picture framing with real-time preview',
    images: ['/images/frameyourway1.jpeg', '/images/frameyourway2.jpeg', '/images/frameyourway3.png'],
    github: 'https://github.com',
    liveUrl: 'https://frameyourway.in',
    tags: ['React', 'Express', 'Stripe']
  },
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
    images: ['/images/adhyayan1.jpeg', '/images/adhyayan2.jpeg', '/images/adhyayan3.jpeg'],
    github: 'https://github.com',
    liveUrl: 'https://adhyayan.com',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL']
  },
  {
    id: 4,
    title: 'GetStay - Hotel Booking',
    description: 'Modern hotel booking platform',
    images: ['/images/getstay1.jpeg', '/images/getstay2.jpeg', '/images/getstay3.jpeg'],
    github: 'https://github.com',
    liveUrl: 'https://getstay.com',
    tags: ['Vue.js', 'Node.js', 'Redis']
  },
  {
    id: 5,
    title: 'Radhe Fitness - Gym Management',
    description: 'Complete gym management system',
    images: ['/images/radhefitness1.jpeg', '/images/radhefitness2.jpeg', '/images/radhefitness3.jpeg'],
    github: 'https://github.com',
    liveUrl: 'https://radhefitness.com',
    tags: ['React', 'Firebase', 'Tailwind']
  },
  {
    id: 6,
    title: 'Yuvi Gym - Fitness Tracking',
    description: 'Personal fitness tracking app',
    images: ['/images/yuvigym1.jpeg', '/images/yuvigym2.jpeg', '/images/yuvigym3.jpeg'],
    github: 'https://github.com',
    liveUrl: 'https://yuvigym.com',
    tags: ['React Native', 'Node.js', 'MongoDB']
  },
  {
    id: 7,
    title: 'Yuvi Gym - Fitness Tracking',
    description: 'Personal fitness tracking app',
    images: ['/images/boysstay1.jpeg', '/images/boysstay2.jpeg', ],
    github: 'https://github.com',
    liveUrl: 'https://yuvigym.com',
    tags: ['React Native', 'Node.js', 'MongoDB']
  }
]

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length, isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    goToSlide((currentIndex - 1 + images.length) % images.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    goToSlide((currentIndex + 1) % images.length)
  }

  if (images.length === 0) return null

  return (
    <div 
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Images Container */}
      <div 
        ref={containerRef}
        className="relative h-0 pb-[56.25%] bg-gradient-to-br from-mint-100 to-mint-200 dark:from-mint-900/20 dark:to-mint-800/20"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
              zIndex: index === currentIndex ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>
        ))}
        
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-mint-200/20 via-transparent to-mint-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      </div>

      {/* Navigation Buttons - Only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  goToSlide(index)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-white w-8 h-2'
                    : 'bg-white/60 hover:bg-white/90 w-2 h-2'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
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
      <div className="glass rounded-3xl overflow-hidden border-2 border-mint-200/20 dark:border-mint-400/20 hover:border-mint-300/40 dark:hover:border-mint-300/40 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl">
        {/* Image Carousel */}
        <ImageCarousel images={project.images} />

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
