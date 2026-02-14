'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  actions?: Array<{
    label: string
    href: string
    variant?: 'primary' | 'secondary'
  }>
}

export default function Hero({ title, subtitle, description, actions }: HeroProps) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch">
            <span className="text-cyber-cyan text-glow-cyan">{title}</span>
            {subtitle && (
              <span className="text-gray-500">{subtitle}</span>
            )}
          </h1>
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-4"
          >
            {description}
          </motion.p>
        )}

        {actions && actions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.variant === 'secondary'
                    ? 'btn-cyber-magenta'
                    : 'btn-cyber'
                }
              >
                {action.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
