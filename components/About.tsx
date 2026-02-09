'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Jatin',
    role: 'Full Stack Developer',
    image: '/images/jatin.jpeg',
  },
  {
    name: 'Om Pawar',
    role: 'UI/UX Designer',
    image: '/images/ompawar.jpeg',
  },
  {
    name: 'Pankaj',
    role: 'Backend Developer',
    image: '/images/pankaj.jpg',
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-dark-900 via-[#0a2e2a] to-dark-900 dark:from-dark-900 dark:via-[#0a2e2a] dark:to-dark-900">
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Who <span className="text-gradient">We Are</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A passionate team transforming ideas into digital reality
          </p>
        </motion.div>

        {/* Three Pill-Shaped Images */}
        <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15 
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative overflow-hidden"
              style={{
                width: index === 1 ? '280px' : '240px',
                height: index === 1 ? '420px' : '380px',
                borderRadius: index === 1 ? '140px' : '120px',
              }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mint-900/80 via-transparent to-transparent" />

              {/* Member Details - Always Visible at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-mint-200">{member.role}</p>
              </div>

              {/* Border Glow on Hover */}
              <div 
                className="absolute inset-0 border-4 border-mint-200/0 group-hover:border-mint-200/50 transition-all duration-500"
                style={{
                  borderRadius: index === 1 ? '140px' : '120px',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5
          }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-gradient mb-2">
              100+
            </div>
            <div className="text-sm text-gray-400">Projects</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-gradient mb-2">
              50+
            </div>
            <div className="text-sm text-gray-400">Clients</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-gradient mb-2">
              5+
            </div>
            <div className="text-sm text-gray-400">Years</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

