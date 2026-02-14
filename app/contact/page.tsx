'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Email',
      value: siteConfig.author.email,
      href: `mailto:${siteConfig.author.email}`,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'cyan',
      description: 'Professional inquiries and collaboration opportunities',
    },
    {
      name: 'GitHub',
      value: `@${siteConfig.author.githubUsername}`,
      href: siteConfig.author.github,
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'magenta',
      description: 'Open-source projects and code repositories',
    },
    {
      name: 'Instagram',
      value: `@${siteConfig.author.instagramUsername}`,
      href: siteConfig.author.instagram,
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'green',
      description: 'Personal updates and behind-the-scenes',
    },
  ]

  const colorClasses = {
    cyan: {
      border: 'border-cyber-cyan/50',
      text: 'text-cyber-cyan',
      glow: 'hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]',
    },
    magenta: {
      border: 'border-cyber-magenta/50',
      text: 'text-cyber-magenta',
      glow: 'hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]',
    },
    green: {
      border: 'border-cyber-green/50',
      text: 'text-cyber-green',
      glow: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]',
    },
  }

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">
            <span className="text-gray-500">{'//'} </span>Establish Connection
            <span className="text-cyber-cyan">_</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate, discuss security research, or just connect? 
            Choose your preferred communication channel below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.name !== 'Email' ? '_blank' : undefined}
              rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-hover p-8 rounded-lg flex flex-col items-center text-center
                         border-2 ${colorClasses[method.color as keyof typeof colorClasses].border}
                         ${colorClasses[method.color as keyof typeof colorClasses].glow}
                         transition-all duration-300 hover:scale-105 group`}
            >
              <div className={`mb-4 ${colorClasses[method.color as keyof typeof colorClasses].text}`}>
                {method.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 ${colorClasses[method.color as keyof typeof colorClasses].text}`}>
                {method.name}
              </h3>
              
              <p className="text-gray-300 font-mono text-sm mb-4">
                {method.value}
              </p>
              
              <p className="text-gray-400 text-sm">
                {method.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={colorClasses[method.color as keyof typeof colorClasses].text}>
                  Connect Now
                </span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cyber-cyan mb-4">
              Response Time
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse"></div>
                <p>Email: Usually within 24-48 hours</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyber-cyan animate-pulse"></div>
                <p>GitHub: Active daily for project collaboration</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyber-magenta animate-pulse"></div>
                <p>Instagram: Casual conversations and updates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
