'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const featuredProjects = [
    {
      title: 'web application',
      category: 'software',
      image: '/assets/Healthcare & Telemedicine Mobile App.jpg',
    },
    {
      title: 'UI/UX',
      category: 'design',
      image: '/assets/download (13).jpg',
    }
  ]

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-dark-900 px-4 sm:px-6 lg:px-8 pt-20"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint-200/30 dark:bg-mint-200/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-1">

        {/* Main Headline - Large & Bold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24 h-[30vh] flex align-middle justify-center flex-col"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-none tracking-tight ">
            <span className="block text-gray-900 dark:text-white">DIGITAL</span> <span className="block text-gradient">SOLUTIONS</span>
            
          </h1>
          <p className="text-gray-900 dark:text-gray-300 text-[12px] mx-3">
            We are a team of developers who are passionate about creating digital solutions that help businesses grow.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl"
        >
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href="#portfolio"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                {/* Category Badge */}
                <div className="self-start">
                  <span className="inline-block px-4 py-2 rounded-full glass border border-white/20 text-white text-xs sm:text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-mint-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl ring-2 ring-mint-300/50" />
              </div>
            </motion.a>
          ))}
        </motion.div>

     
      </div>
    </section>
  )
}
