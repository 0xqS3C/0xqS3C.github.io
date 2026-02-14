'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            <span className="text-gray-500">{'//'} </span>Team Affiliation
          </h1>
          <p className="text-xl text-gray-400">
            Collaborating with the cybersecurity community
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-cyber h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🛡️</div>
                <div>
                  <h2 className="text-3xl font-bold text-cyber-magenta">
                    {siteConfig.team.name}
                  </h2>
                  <p className="text-cyber-cyan">{siteConfig.team.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                {siteConfig.team.description}
              </p>

              <div className="space-y-3">
                <h3 className="text-cyber-cyan font-semibold">Focus Areas:</h3>
                <ul className="space-y-2">
                  {siteConfig.team.focus.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-400">
                      <span className="text-cyber-green">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-cyber h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">👤</div>
                <div>
                  <h2 className="text-3xl font-bold text-cyber-cyan">
                    {siteConfig.author.name}
                  </h2>
                  <p className="text-gray-400">@{siteConfig.author.username}</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>{siteConfig.author.title}</p>
                
                <div className="border-l-2 border-cyber-cyan pl-4">
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href={`mailto:${siteConfig.author.email}`}
                    className="text-cyber-cyan hover:text-cyber-green transition-colors"
                  >
                    {siteConfig.author.email}
                  </a>
                </div>

                <div className="border-l-2 border-cyber-magenta pl-4">
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a 
                    href={siteConfig.author.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-magenta hover:text-cyber-green transition-colors"
                  >
                    @{siteConfig.author.githubUsername}
                  </a>
                </div>

                <div className="border-l-2 border-cyber-green pl-4">
                  <p className="text-sm text-gray-400">Instagram</p>
                  <a 
                    href={siteConfig.author.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-green hover:text-cyber-cyan transition-colors"
                  >
                    @{siteConfig.author.instagramUsername}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="card-cyber text-center">
            <h3 className="text-2xl font-bold text-cyber-cyan mb-4">
              Collaboration & Community
            </h3>
            <p className="text-gray-300 mb-6">
              I believe in the power of collaboration and knowledge sharing within the cybersecurity community. 
              Through team participation, I contribute to collective learning and help tackle complex security challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/projects" className="btn-cyber">
                View Projects
              </Link>
              <Link href="/writeups" className="btn-cyber-magenta">
                Read Writeups
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
