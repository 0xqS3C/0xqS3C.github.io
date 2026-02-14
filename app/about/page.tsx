'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'
import SkillGroup from '@/components/SkillGroup'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            <span className="text-gray-500">// </span>User Profile: 
            <span className="text-cyber-cyan"> {siteConfig.author.username}</span>
          </h1>
          <p className="text-xl text-gray-400">
            Analyzing the digital footprint, one artifact at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="card-cyber">
              <h3 className="subsection-title">Transmission Incoming...</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Greetings. I&apos;m <span className="text-cyber-cyan font-semibold">
                  {siteConfig.author.name}</span>, better known in the digital realm as{' '}
                  <span className="text-cyber-cyan font-semibold">{siteConfig.author.username}</span>.
                </p>
                <p>
                  Currently pursuing my Bachelor&apos;s in Computer Science with a specialization 
                  in Cybersecurity and Digital Forensics at Jubilee University. My focus lies 
                  in the intersection of security, forensics, and automation.
                </p>
                <p>
                  As a <span className="text-cyber-green">DFIR Specialist</span>, I investigate 
                  digital incidents, analyze artifacts, and reconstruct attack timelines. 
                  I&apos;m passionate about uncovering hidden traces in systems and networks, 
                  turning raw data into actionable intelligence.
                </p>
                <p>
                  When not investigating incidents, I build automation tools in{' '}
                  <span className="text-cyber-cyan">Python</span>, participate in CTF 
                  competitions, and explore new security research. I believe in learning 
                  by breaking things, understanding systems from the inside out.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-cyber">
              <h3 className="subsection-title">System Stats</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyber-cyan pl-4">
                  <div className="text-2xl font-bold text-cyber-cyan">
                    {siteConfig.stats.ctfRank}
                  </div>
                  <div className="text-sm text-gray-400">CTF Rank</div>
                </div>
                <div className="border-l-2 border-cyber-magenta pl-4">
                  <div className="text-2xl font-bold text-cyber-magenta">
                    {siteConfig.stats.projects}
                  </div>
                  <div className="text-sm text-gray-400">Projects Shipped</div>
                </div>
                <div className="border-l-2 border-cyber-green pl-4">
                  <div className="text-2xl font-bold text-cyber-green">
                    {siteConfig.stats.uptime}
                  </div>
                  <div className="text-sm text-gray-400">Active Since</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-cyber mt-6"
            >
              <h3 className="subsection-title">Education</h3>
              {siteConfig.education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-cyber-cyan font-semibold">{edu.degree}</div>
                  <div className="text-gray-400">{edu.institution}</div>
                  <div className="text-sm text-gray-500">{edu.period}</div>
                  <div className="text-sm text-cyber-green">{edu.focus}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="section-title mb-8">
            <span className="text-gray-500">// </span>Skill Matrix
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillGroup
              title="DFIR & Forensics"
              skills={siteConfig.skills.dfir}
              color="cyan"
            />
            <SkillGroup
              title="Security & Testing"
              skills={siteConfig.skills.security}
              color="magenta"
            />
            <SkillGroup
              title="Development"
              skills={siteConfig.skills.development}
              color="green"
            />
          </div>
        </motion.div>
      </section>
    </div>
  )
}
