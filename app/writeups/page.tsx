'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'
import { useState } from 'react'

export default function WriteupsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            <span className="text-gray-500">{'//'} </span>CTF Writeups
          </h1>
          <p className="text-xl text-gray-400">
            Detailed solutions and analysis from cybersecurity challenges
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {siteConfig.writeups.map((writeup, index) => (
            <motion.div
              key={writeup.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-cyber">
                <div 
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleExpand(writeup.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-cyber-cyan">
                        {writeup.title}
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-cyber-border/50 text-gray-300">
                        {writeup.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {writeup.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded bg-cyber-border/30 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 ml-auto">
                        {writeup.date}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === writeup.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyber-cyan text-2xl ml-4"
                  >
                    ▶
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === writeup.id ? 'auto' : 0,
                    opacity: expandedId === writeup.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-cyber-border/30 mt-4">
                    <h4 className="text-cyber-green font-semibold mb-2">Description:</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {writeup.description}
                    </p>
                    
                    {writeup.file && (
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400">File:</span>
                        <a 
                          href={writeup.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cyber inline-block"
                          onClick={(e) => e.stopPropagation()}
                        >
                          📄 Download Writeup
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="card-cyber text-center">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">
              More Writeups Coming Soon
            </h3>
            <p className="text-gray-400">
              I regularly participate in CTF competitions and security challenges. 
              Check back for more detailed writeups and analysis!
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
