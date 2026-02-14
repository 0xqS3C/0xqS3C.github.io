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
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-cyan/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-magenta/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 glitch">
            <span className="gradient-text text-glow-cyan inline-block">{title}</span>
            {subtitle && (
              <span className="block text-gray-500 text-4xl md:text-5xl mt-4">{subtitle}</span>
            )}
          </h1>
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {actions && actions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center mt-12"
          >
            {actions.map((action, index) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.variant === 'secondary'
                    ? 'btn-cyber-magenta text-lg px-8 py-4'
                    : 'btn-cyber text-lg px-8 py-4'
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {action.label}
              </Link>
            ))}
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
