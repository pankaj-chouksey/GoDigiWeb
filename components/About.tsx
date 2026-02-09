'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint-200/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              GoDigiWeb is a premium web design and digital solutions agency dedicated to transforming businesses through cutting-edge technology and stunning design.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We specialize in creating fast, modern, and SEO-optimized websites using Next.js and other cutting-edge technologies. Our team combines creative excellence with technical expertise to deliver digital experiences that not only look amazing but also drive real business results.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              From initial concept to final deployment, we work closely with our clients to understand their vision and bring it to life with premium UI/UX design, responsive layouts, and performance optimization.
            </p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.4
              }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="text-3xl font-bold text-mint-400 dark:text-mint-200 mb-1"
                >
                  100+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.6 }}
                  className="text-3xl font-bold text-mint-400 dark:text-mint-200 mb-1"
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.7 }}
                  className="text-3xl font-bold text-mint-400 dark:text-mint-200 mb-1"
                >
                  5+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Illustration with Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
              delay: 0.2
            }}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative w-full h-96 rounded-3xl overflow-hidden glass group">
              {/* Background Image */}
              <motion.img
                src="images/banner.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/20 to-transparent" />
              
              {/* Animated Shapes Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-mint-200/20 to-mint-400/20 blur-2xl"
                />
              </div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 glow-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

