export const siteConfig = {
  name: '1n1t.tech',
  domain: '1n1t.me',
  title: 'Cybersecurity Student · DFIR Specialist · Python Developer',
  description: 'Qusai (1n1t) — Interactive Cyber-Terminal Portfolio. DFIR, Python, and CTF.',
  url: 'https://1n1t.me',
  
  author: {
    name: 'Qusai',
    username: '1n1t',
    title: 'Cybersecurity Student · DFIR Specialist · Python Developer',
    email: 'QHaddad@stud.jubilee.edu.jo',
    github: 'https://github.com/0xqS3C',
    githubUsername: '0xqS3C',
    instagram: 'https://instagram.com/_1n1t_',
    instagramUsername: '_1n1t_',
  },
  
  stats: {
    ctfRank: 'Top 5%',
    projects: '12+ Shipped',
    uptime: 'Since 2020',
  },
  
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Writeups', href: '/writeups' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ],
  
  skills: {
    dfir: [
      'Network Forensics',
      'Disk Imaging',
      'Memory Analysis',
      'Log Correlation',
      'Timeline Analysis',
      'Artifact Recovery',
    ],
    security: [
      'Active Directory',
      'Web Exploitation',
      'Privilege Escalation',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Auditing',
    ],
    development: [
      'Python (OOP)',
      'Bash/Shell Scripting',
      'OpenCV',
      'Automation',
      'Git/GitHub',
      'Linux Administration',
    ],
  },
  
  projects: [
    {
      id: 'simplegame',
      title: 'SimpleGame (OOP)',
      description: 'An interactive Python quiz game demonstrating object-oriented programming principles with class inheritance and encapsulation.',
      category: 'python',
      tags: ['Python', 'OOP', 'Game Development'],
      github: 'https://github.com/0xqS3C/SimpleGame',
      featured: true,
    },
    {
      id: 'virtual-mouse',
      title: 'Virtual Mouse',
      description: 'Hand tracking-based virtual mouse using OpenCV and computer vision. Control your computer with hand gestures.',
      category: 'python',
      tags: ['Python', 'OpenCV', 'Computer Vision', 'Automation'],
      github: 'https://github.com/0xqS3C/Virtual-Mouse',
      featured: true,
    },
    {
      id: 'dfir-toolkit',
      title: 'DFIR Toolkit',
      description: 'Collection of digital forensics and incident response automation scripts for log analysis and artifact extraction.',
      category: 'security',
      tags: ['Python', 'DFIR', 'Automation', 'Forensics'],
      featured: false,
    },
    {
      id: 'network-analyzer',
      title: 'Network Traffic Analyzer',
      description: 'Python-based network packet analyzer for forensic investigations and security monitoring.',
      category: 'security',
      tags: ['Python', 'Networking', 'Security', 'Analysis'],
      featured: false,
    },
  ],
  
  education: [
    {
      degree: 'High School Diploma',
      institution: 'Jubilee School',
      period: '2009',
      focus: 'General Education',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Jubilee University',
      period: '2020 - Present',
      focus: 'Cybersecurity & Digital Forensics',
    },
  ],
  
  team: {
    name: 'JordanSec',
    role: 'Team Member',
    description: 'Active member of JordanSec cybersecurity team, collaborating on CTF competitions and security research.',
    focus: ['CTF Competitions', 'Security Research', 'Knowledge Sharing'],
  },
  
  writeups: [
    {
      id: 'the-final-hop',
      title: 'The Final Hop',
      description: 'On the night of May 21 our SOC received a high-severity alert indicating unusual lateral movement in the Active Directory environment. Internal logs showed the Domain Controller (DC) was accessed by a suspicious account. A few hours later a critical application server became inaccessible. Booting from a recovery image revealed the local Administrator password had been changed without authorization.',
      category: 'DFIR',
      tags: ['Active Directory', 'Lateral Movement', 'Forensics'],
      file: '/writeups/files/the-final-hop-writeup.docx',
      date: '2024',
    },
    // Placeholder for new writeup - user to add details
    {
      id: 'new-writeup',
      title: 'New Writeup Title',
      description: 'Description of the new writeup goes here...',
      category: 'CTF',
      tags: ['Tag1', 'Tag2'],
      file: '/writeups/files/new-writeup.pdf',
      date: '2026',
    },
  ],
  
  systemModules: [
    {
      title: 'Projects',
      description: 'Python tools, automation scripts, and CV applications.',
      tags: ['Python', 'Automation'],
      href: '/projects',
      icon: 'code',
    },
    {
      title: 'About Me',
      description: 'Background, skills, and experience in cybersecurity.',
      tags: ['Bio', 'Skills'],
      href: '/about',
      icon: 'user',
    },
    {
      title: 'Contact',
      description: 'Get in touch for collaborations and opportunities.',
      tags: ['Email', 'Social'],
      href: '/contact',
      icon: 'mail',
    },
  ],
}

export type SiteConfig = typeof siteConfig
