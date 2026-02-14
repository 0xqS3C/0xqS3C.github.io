'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="1n1t"
        subtitle=".tech"
        description={siteConfig.author.title}
        actions={[
          { label: 'View Projects', href: '/projects', variant: 'primary' },
          { label: 'Contact Me', href: '/contact', variant: 'secondary' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">
            <span className="text-gray-500">// </span>System Modules
          </h2>
          <p className="text-gray-400">
            Investigating incidents, analyzing systems, and building automation tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.systemModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={module.href} className="block">
                <div className="card-cyber h-full hover:scale-[1.02] transition-transform duration-300">
                  <div className="mb-4">
                    {module.icon === 'code' && (
                      <svg className="w-8 h-8 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {module.icon === 'user' && (
                      <svg className="w-8 h-8 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {module.icon === 'mail' && (
                      <svg className="w-8 h-8 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-cyber-cyan mb-3">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 flex-grow">
                    {module.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-cyber-border/50 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-cyber-border/30">
                    <span className="text-cyber-cyan text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Access Module
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-lg inline-block">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-cyber-cyan mb-2">
                  {siteConfig.stats.ctfRank}
                </div>
                <div className="text-sm text-gray-400">CTF Rank</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-magenta mb-2">
                  {siteConfig.stats.projects}
                </div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-green mb-2">
                  {siteConfig.stats.uptime}
                </div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
