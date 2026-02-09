'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
    bio: 'Leading design innovation with 10+ years of experience',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    bio: 'Full-stack expert specializing in Next.js and React',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'pankaj',
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
    bio: 'Crafting user experiences that delight and convert',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
]

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-mint-400/10 rounded-full blur-3xl"
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
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        {/* Pill-Shaped Diagonal Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap min-h-[600px]"
        >
          {teamMembers.map((member, index) => {
            // Diagonal positioning for each pill
            const positions = [
              'md:translate-y-[-60px] md:rotate-[-8deg]',
              'md:translate-y-[0px] md:rotate-[2deg] md:scale-110 z-10',
              'md:translate-y-[60px] md:rotate-[8deg]'
            ]
            
            return (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                className={`group relative overflow-hidden w-[280px] h-[500px] ${positions[index]} transition-all duration-500`}
                style={{
                  borderRadius: '140px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                }}
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold text-white mb-1 text-center">{member.name}</h3>
                    <p className="text-sm text-mint-200 mb-3 text-center">{member.role}</p>
                    <p className="text-sm text-gray-300 mb-6 text-center">{member.bio}</p>
                    
                    {/* Social Links */}
                    <div className="flex gap-3 justify-center">
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-mint-200 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-mint-200 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-mint-200 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 glow-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: '140px' }} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
