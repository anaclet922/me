// src/data/projects.js
export const PROJECTS = [
  // Enterprise & Core Systems
  { 
    name: 'PolicyArtisan',       
    icon: 'ti-settings',  
    desc: 'Core enterprise system at RADIANT YACU for policy management and administration.',                            
    stack: ['PHP', 'JS', 'NodeJS','CodeIgniter','JavaScript','MySQL', 'REST API', 'SMS Gateway', 'RabbitMQ'],   
    featured: true,
    company: 'RADIANT YACU'
  },
  { 
    name: 'CreditShield',       
    icon: 'ti-shield',  
    desc: 'Loan protection system providing comprehensive coverage and risk management for financial institutions.',                            
    stack: ['PHP','Laravel', 'JS', 'ReactJS', 'REST API', 'MySQL', 'RabbitMQ'],   
    featured: true,
    company: 'RADIANT YACU'
  },
  { 
    name: 'RSE.rw',       
    icon: 'ti-chart-line',  
    desc: 'Rwanda Stock Exchange platform for market data, trading information, and investment insights.',                            
    stack: ['PHP','CodeIgniter','JavaScript','API Integration'],   
    live: 'https://rse.rw/',
    featured: true
  },
  { 
    name: 'Investment Clinic',       
    icon: 'ti-chart-pie',  
    desc: 'Investment advisory platform helping users make informed financial decisions.',                            
    stack: ['PHP','CodeIgniter','Chart.js','API'],   
    live: 'https://investmentclinic.rse.rw/'
  },

  // Mobile & USSD
  { 
    name: '*531# USSD Service',       
    icon: 'ti-device-sim',  
    desc: 'USSD-based service providing mobile access to financial and insurance services via feature phones.',                            
    stack: ['USSD','PHP','API Gateway','SMS Gateway'],
    featured: true
  },
  { 
    name: 'Fundle App',       
    icon: 'ti-device-mobile',  
    desc: 'Cross-platform mobile app enabling seamless financial transactions with Flutter/Dart and Django backend.',                            
    stack: ['Flutter/Dart','Django','Python','REST API'],       
    github: 'https://github.com/anaclet922',
    featured: true
  },
  { 
    name: 'Cipher Saver',     
    icon: 'ti-lock',           
    desc: 'Secure password and cipher management app with local encryption using Hive database.',                         
    stack: ['Flutter/Dart','Getx','Hive','Encryption'],           
    github: 'https://github.com/anaclet922/cipher' 
  },

  // Web Applications
  { 
    name: 'Mo-Capital',       
    icon: 'ti-building-bank',  
    desc: 'Financial services web application for Mo-Capital with secure transactions and account management.',                            
    stack: ['PHP','CodeIgniter','REST API','JavaScript'],   
    live: 'https://mocapital.co.rw/',
    featured: true
  },
  { 
    name: 'Munezero.rw',       
    icon: 'ti-heart',  
    desc: 'Community platform focused on well-being and positive impact initiatives.',                            
    stack: ['PHP','CodeIgniter','JavaScript','MySQL'],
    live: 'https://munezero.rw/'
  },
  { 
    name: 'Bauinzu.com',       
    icon: 'ti-home',  
    desc: 'Real estate and property management platform for listings and transactions.',                            
    stack: ['PHP','CodeIgniter','jQuery','MySQL'],
    live: 'https://bauinzu.com/'
  },

  // Developer Tools & Utilities
  { 
    name: 'Event Ticketing System',  
    icon: 'ti-ticket',         
    desc: 'Complete event management platform with booking, payment gateway, and PDF ticket generation.',           
    stack: ['PHP','CodeIgniter','jQuery','PDFGen'],           
    github: 'https://github.com/anaclet922/event' 
  },
  { 
    name: 'Bulk SMS Sender',  
    icon: 'ti-message-dots',   
    desc: 'Bulk messaging platform with contact management, group segmentation, and delivery tracking.',                          
    stack: ['PHP','CodeIgniter','REST API','SMS Gateway'],         
    github: 'https://github.com/anaclet922/sms_system' 
  },
  { 
    name: 'docx2pdf Converter',         
    icon: 'ti-file-type-pdf',  
    desc: 'Batch document conversion utility that transforms Word documents to PDF format programmatically.',                                
    stack: ['Python','PHP','CLI'],                         
    github: 'https://github.com/anaclet922/docx2pdf' 
  },

  // Open Source Packages
  { 
    name: 'rwanda-locations (npm)',         
    icon: 'ti-brand-npm',  
    desc: 'npm package providing administrative hierarchy data for Rwanda (Provinces → Districts → Sectors → Cells → Villages).',                                
    stack: ['TypeScript','Node.js','JSON'],                         
    npm: 'https://www.npmjs.com/package/rwanda-locations',
    downloads: '4K+',
    featured: true
  },
  { 
    name: 'rwanda_locations (Pub.dev)',         
    icon: 'ti-brand-flutter',  
    desc: 'Flutter/Dart package for accessing Rwanda administrative locations data.',                                
    stack: ['Dart','Flutter','JSON'],                         
    pub: 'https://pub.dev/packages/rwanda_locations'
  }
];