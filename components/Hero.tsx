'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div ref={containerRef} className="absolute inset-0" />
      {/* Enhanced Animated Background Blobs with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-mint-200/20 dark:bg-mint-200/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [360, 270, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-mint-400/15 dark:bg-mint-400/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-mint-300/10 dark:bg-mint-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Floating Particles */}
      {mounted && typeof window !== 'undefined' && [...Array(6)].map((_, i) => {
        const randomX = Math.random() * window.innerWidth
        const randomY = Math.random() * window.innerHeight
        const duration = 8 + Math.random() * 4
        const delay = Math.random() * 2
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-mint-200/40 dark:bg-mint-200/60 rounded-full"
            initial={{
              x: randomX,
              y: randomY,
              opacity: 0,
            }}
            animate={{
              y: [randomY, randomY - 200 + Math.random() * 400, randomY],
              x: [randomX, randomX - 200 + Math.random() * 400, randomX],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        )
      })}

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center lg:text-left"
          >
          {/* Enhanced Floating Sparkles */}
          <motion.div
            variants={itemVariants}
            className="inline-block lg:block"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                y: [0, -10, 0],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Sparkles className="w-16 h-16 text-mint-400 dark:text-mint-200 mx-auto drop-shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Headline with Staggered Letters */}
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
          >
            <motion.span
              className="inline-block text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.3,
              }}
              whileHover={{ scale: 1.05 }}
            >
              Transform
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-gradient"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.5,
              }}
              whileHover={{ scale: 1.05 }}
            >
              To Tech
            </motion.span>
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0"
          >
            Premium Web Design & Digital Solutions for Modern Businesses.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.08, 
                y: -5,
                boxShadow: "0 0 40px rgba(167, 232, 225, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-mint-200 to-mint-400 text-dark-900 font-semibold rounded-full flex items-center gap-2 glow-mint-strong transition-all relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-mint-300 to-mint-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ 
                scale: 1.08,
                y: -5,
                borderColor: "rgba(167, 232, 225, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-gray-900 dark:text-white font-semibold rounded-full border border-mint-400/50 dark:border-mint-200/30 hover:border-mint-400 dark:hover:border-mint-200/50 transition-all"
            >
              View Work
            </motion.a>
          </motion.div>
          </motion.div>

          {/* Right Side - Pill-Shaped Team Members */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 100, damping: 15 }}
            className="hidden lg:flex items-center justify-center gap-4 min-h-[500px]"
          >
            {[
              { name: 'Om Pawar', role: 'Lead Developer', image: 'images/ompawar.jpeg' },
              { name: 'Pankaj Chouksey', role: 'UI/UX Designer', image: 'images/pankaj.jpg' },
              { name: 'Jatin Sethiya', role: 'Management lead', image: 'images/jatin.jpeg' },
            ].map((member, index) => {
              const positions = [
                'translate-y-[-40px] rotate-[-8deg]',
                'translate-y-[0px] rotate-[2deg] scale-110 z-10',
                'translate-y-[40px] rotate-[8deg]'
              ]
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 1.2 + index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                  className={`group relative w-[140px] h-[280px] ${positions[index]} transition-all duration-500`}
                  style={{
                    borderRadius: '70px',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '70px' }}>
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-sm font-semibold text-white text-center">{member.name}</h3>
                      <p className="text-xs text-mint-200 text-center">{member.role}</p>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 glow-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderRadius: '70px' }} />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Enhanced Abstract Tech Waves */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl"
        >
          <svg
            viewBox="0 0 1200 200"
            className="w-full h-auto opacity-30 dark:opacity-20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0,100 Q300,50 600,100 T1200,100"
              stroke="#A7E8E1"
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  "M0,100 Q300,50 600,100 T1200,100",
                  "M0,100 Q300,150 600,100 T1200,100",
                  "M0,100 Q300,30 600,100 T1200,100",
                  "M0,100 Q300,50 600,100 T1200,100",
                ],
                pathLength: [0, 1, 0, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,120 Q400,80 800,120 T1600,120"
              stroke="#7DD3C7"
              strokeWidth="1.5"
              fill="none"
              opacity={0.6}
              animate={{
                d: [
                  "M0,120 Q400,80 800,120 T1600,120",
                  "M0,120 Q400,100 800,120 T1600,120",
                  "M0,120 Q400,60 800,120 T1600,120",
                  "M0,120 Q400,80 800,120 T1600,120",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, type: "spring" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="w-6 h-10 border-2 border-mint-400/60 dark:border-mint-200/50 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ 
              y: [0, 16, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-4 bg-mint-400 dark:bg-mint-200 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


