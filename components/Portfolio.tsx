'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Frameyourway',
    category: 'Next.js • E-Commerce platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Modern e-commerce solution with seamless checkout experience',
    liveUrl: 'https://frameyourway.in/',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Radhe Fitness',
    category: 'React • Fitness platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Analytics dashboard with real-time data visualization',
    liveUrl: 'https://Radhefitness.in',
    githubUrl: 'https://github.com/yourusername/saas-dashboard',
  },
  {
    title: 'Yuvi Gym',
    category: 'Next.js • Futness website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    description: 'Premium corporate website with modern design',
    liveUrl: 'https://yuvi-gym.vercel.app/',
    githubUrl: 'https://github.com/yourusername/corporate-website',
  },
  {
    title: '11 PM Gaming Cafe',
    category: 'React • Landing Page',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    description: 'Stunning landing page for mobile application',
    liveUrl: 'https://11-pm-games.vercel.app/',
    githubUrl: 'https://github.com/yourusername/mobile-app-landing',
  },
  {
    title: 'Portfolio Website',
    category: 'Next.js • Portfolio',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    description: 'Creative portfolio showcase with smooth animations',
    liveUrl: 'https://example.com/portfolio-demo',
    githubUrl: 'https://github.com/yourusername/portfolio-website',
  },
  {
    title: 'Blog Platform',
    category: 'Next.js • Blog',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    description: 'Content-rich blog platform with SEO optimization',
    liveUrl: 'https://example.com/blog-platform',
    githubUrl: 'https://github.com/yourusername/blog-platform',
  },
]

function ProjectCard({ project, index, itemVariants }: { project: any; index: number; itemVariants: any }) {
  const alignments = ['object-top', 'object-center', 'object-bottom']
  const alignment = alignments[index % 3]

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl w-full"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover ${alignment}`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-mint-200 mb-2">{project.category}</p>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
          <div className="flex gap-3 relative z-30">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-mint-200 transition-colors cursor-pointer"
              aria-label={`View ${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-mint-200 transition-colors cursor-pointer"
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 glow-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-mint-400/10 rounded-full blur-3xl"
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
            Showcasing premium projects that transform businesses
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard project={project} index={index} itemVariants={itemVariants} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

