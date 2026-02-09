'use client'

import { motion } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'

export default function UIUX() {
  return (
    <section id="uiux" className="py-16 relative overflow-hidden bg-gradient-to-b from-transparent via-mint-50/30 to-transparent dark:via-dark-900/50 max-h-screen flex items-center">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-mint-200/20 dark:bg-mint-200/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-mint-400/20 dark:bg-mint-400/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-mint-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">UI/UX Design</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Where design <span className="text-gradient">meets magic</span>
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 1 
          }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Decorative Elements */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-12 -left-12 w-24 h-24 border-2 border-mint-200/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-12 -right-12 w-32 h-32 border-2 border-mint-400/30 rounded-full"
          />

          {/* Video Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden glass border-2 border-mint-200/20 dark:border-mint-400/20 shadow-2xl">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-mint-200/10 via-transparent to-mint-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              
              {/* Video */}
              <div className="relative aspect-[12/9] lg:aspect-video bg-gradient-to-br from-mint-100 via-mint-50 to-mint-200 dark:from-dark-800 dark:via-dark-850 dark:to-dark-900">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/Untitled design.mp4" type="video/mp4" />
                  {/* Fallback content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-mint-200 to-mint-400 flex items-center justify-center mb-6 glow-mint-strong"
                    >
                      <Play className="w-10 h-10 text-dark-900 ml-1" fill="currentColor" />
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                      Design Showcase
                    </p>
                  </div>
                </video>
              </div>

              {/* Shine Effect */}
              <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: '200%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mint-200/30 to-mint-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
