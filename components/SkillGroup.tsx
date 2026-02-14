'use client'

import { motion } from 'framer-motion'

interface SkillGroupProps {
  title: string
  skills: string[]
  color?: 'cyan' | 'magenta' | 'green' | 'purple'
}

export default function SkillGroup({ title, skills, color = 'cyan' }: SkillGroupProps) {
  const colorClasses = {
    cyan: 'text-cyber-cyan border-cyber-cyan/50',
    magenta: 'text-cyber-magenta border-cyber-magenta/50',
    green: 'text-cyber-green border-cyber-green/50',
    purple: 'text-cyber-purple border-cyber-purple/50',
  }

  const bgColorClasses = {
    cyan: 'bg-cyber-cyan/10',
    magenta: 'bg-cyber-magenta/10',
    green: 'bg-cyber-green/10',
    purple: 'bg-cyber-purple/10',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-cyber"
    >
      <h3 className={`text-xl font-bold mb-4 ${colorClasses[color]}`}>
        {title}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`px-4 py-2 border-l-2 ${colorClasses[color]} ${bgColorClasses[color]} 
                       hover:pl-6 transition-all duration-300`}
          >
            <span className="text-gray-300">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
