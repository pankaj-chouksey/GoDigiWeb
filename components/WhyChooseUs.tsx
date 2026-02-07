'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Smartphone, Search, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast Next.js Websites',
    description: 'Lightning-fast performance with Next.js optimization',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Responsive Design',
    description: 'Perfect experience across all devices and screen sizes',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices for maximum visibility',
  },
  {
    icon: Check,
    title: 'Modern Premium UI/UX',
    description: 'Cutting-edge design that captivates and converts',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Ongoing support and maintenance for your peace of mind',
  },
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
    <section className="py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-0 w-96 h-96 bg-mint-200/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 right-0 w-80 h-80 bg-mint-400/10 rounded-full blur-3xl"
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
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver excellence in every project
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-3xl p-6 hover:border-mint-200/30 transition-all duration-300 group"
            >
              {/* Icon with Sparkle Effect */}
              <div className="relative mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint-200 to-mint-400 flex items-center justify-center glow-mint"
                >
                  <feature.icon className="w-7 h-7 text-dark-900" />
                </motion.div>
                {/* Sparkle decoration */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-mint-200 rounded-full"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-mint-400 dark:group-hover:text-mint-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

