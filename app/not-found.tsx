'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-cyber-cyan text-glow-cyan glitch mb-4">
              404
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-400 mb-2">
              Signal Lost
            </div>
            <div className="text-lg text-gray-500">
              Connection to requested resource terminated
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-8 rounded-lg mb-8"
          >
            <pre className="text-left text-sm text-gray-400 overflow-x-auto">
{`[ERROR] Resource not found
[CODE]  404_NOT_FOUND
[INFO]  The requested page does not exist
[TIP]   Try navigating back to home`}
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/" className="btn-cyber">
              Return to Home
            </Link>
            <Link href="/projects" className="btn-cyber-magenta">
              View Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex items-center justify-center gap-2 text-gray-500"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span>Connection Status: Offline</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
