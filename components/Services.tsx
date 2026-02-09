'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code2, Users, Brain, Cloud, DollarSign, Settings, Layers } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    icon: Lightbulb,
    title: 'Platform Strategy & Product Design',
    description: 'Product discovery, UX research, wireframing, and scalable roadmap planning.',
    color: 'from-mint-200 to-mint-300',
  },
  {
    icon: Code2,
    title: 'Full-Stack Platform Development',
    description: 'Custom web apps, backend architecture, databases, and feature-rich systems.',
    color: 'from-mint-300 to-mint-400',
  },
  {
    icon: Users,
    title: 'Marketplace & Community Features',
    description: 'User-generated content, social graphs, search, moderation, and engagement.',
    color: 'from-mint-400 to-mint-500',
  },
  {
    icon: Brain,
    title: 'AI & Intelligent Systems',
    description: 'Recommendation engines, content tagging, semantic search, and personalization.',
    color: 'from-mint-200 to-mint-400',
  },
  {
    icon: Cloud,
    title: 'Scalability & DevOps',
    description: 'Cloud architecture, CI/CD, performance optimization, and monitoring.',
    color: 'from-mint-300 to-mint-500',
  },
  {
    icon: DollarSign,
    title: 'Monetization & Growth',
    description: 'Payments, subscriptions, analytics dashboards, and A/B testing frameworks.',
    color: 'from-mint-200 to-mint-500',
  },
  {
    icon: Settings,
    title: 'Maintenance & Evolution',
    description: 'Continuous development, security updates, and technical debt cleanup.',
    color: 'from-mint-400 to-mint-300',
  },
  {
    icon: Layers,
    title: 'Enterprise Solutions',
    description: 'Multi-tenant systems, authentication, roles, permissions, and real-time features.',
    color: 'from-mint-500 to-mint-200',
  },
]

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    isDragging.current = true
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft
    scrollLeft.current = scrollContainerRef.current.scrollLeft
    scrollContainerRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return
    isDragging.current = false
    scrollContainerRef.current.style.cursor = 'grab'
  }

  const handleMouseLeave = () => {
    if (!scrollContainerRef.current) return
    isDragging.current = false
    scrollContainerRef.current.style.cursor = 'grab'
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-mint-200/10 dark:bg-mint-200/5 rounded-full blur-3xl"
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
            End-to-end platform solutions that scale
          </p>
        </motion.div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex gap-6 pb-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.05,
                  }}
                  className="flex-shrink-0 w-[280px] sm:w-[320px]"
                >
                  <div className="glass rounded-3xl p-6 sm:p-8 h-full">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 glow-mint`}
                    >
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-dark-900" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-gray-500 dark:text-gray-500 mt-6"
          >
            ← Scroll to explore more →
          </motion.p>
        </div>
      </div>
    </section>
  )
}

