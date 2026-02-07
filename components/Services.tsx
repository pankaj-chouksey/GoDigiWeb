'use client'

import { motion } from 'framer-motion'
import { Code, Sparkles, Palette, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Custom websites built with modern technologies and best practices for optimal performance.',
    color: 'from-mint-200 to-mint-300',
  },
  {
    icon: Sparkles,
    title: 'Next.js Websites',
    description: 'Lightning-fast, SEO-optimized websites powered by Next.js for superior user experience.',
    color: 'from-mint-300 to-mint-400',
  },
  {
    icon: Palette,
    title: 'Branding & UI/UX Design',
    description: 'Complete brand identity and user experience design that resonates with your audience.',
    color: 'from-mint-400 to-mint-500',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Growth',
    description: 'Strategic SEO and digital marketing to grow your online presence and drive results.',
    color: 'from-mint-200 to-mint-400',
  },
]

export default function Services() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-mint-200/10 rounded-full blur-3xl"
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full hover:border-mint-200/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 glow-mint`}
                >
                  <service.icon className="w-8 h-8 text-dark-900" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-mint-400 dark:group-hover:text-mint-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mint-200/0 to-mint-400/0 group-hover:from-mint-200/5 group-hover:to-mint-400/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

