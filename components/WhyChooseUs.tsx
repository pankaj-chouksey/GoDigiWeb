'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, Smartphone, Search, HeadphonesIcon, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    icon: Zap,
    title: 'Fast Next.js Websites',
    description: 'Lightning-fast performance with Next.js optimization. We leverage server-side rendering, static generation, and intelligent code splitting to deliver blazing-fast load times and seamless user experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Responsive Design',
    description: 'Perfect experience across all devices and screen sizes. Our designs adapt fluidly from mobile to desktop, ensuring your users get the best experience regardless of how they access your site.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices for maximum visibility. We implement proper meta tags, structured data, semantic HTML, and performance optimizations to help your site rank higher in search results.',
  },
  {
    icon: Check,
    title: 'Modern Premium UI/UX',
    description: 'Cutting-edge design that captivates and converts. We create intuitive interfaces with beautiful animations, thoughtful interactions, and attention to every detail that makes your brand stand out.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Ongoing support and maintenance for your peace of mind. We provide continuous updates, bug fixes, performance monitoring, and technical assistance to keep your platform running smoothly.',
  },
]

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-0 w-96 h-96 bg-mint-200/10 dark:bg-mint-200/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 right-0 w-80 h-80 bg-mint-400/10 dark:bg-mint-400/5 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.05 
              }}
              className="glass rounded-3xl overflow-hidden border-2 border-mint-200/20 dark:border-mint-400/20 hover:border-mint-300/40 dark:hover:border-mint-300/40 transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      rotate: openIndex === index ? [0, -10, 10, -10, 0] : 0 
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-mint-200 to-mint-400 flex items-center justify-center flex-shrink-0"
                  >
                    <feature.icon className="w-6 h-6 text-dark-900" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gradient transition-colors">
                    {feature.title}
                  </h3>
                </div>

                {/* Chevron */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

