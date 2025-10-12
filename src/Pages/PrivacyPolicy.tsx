import { motion } from 'motion/react';
import { Shield, Eye, Lock, Database, Users, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal identification information (name, email address, phone number)',
        'Demographic information such as postcode, preferences and interests',
        'Other information relevant to customer surveys and/or offers',
        'Non-personal identification information about users whenever they interact with our site'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Information',
      content: [
        'To personalize user experience and deliver content and product offerings',
        'To improve our website based on information and feedback we receive',
        'To send periodic emails regarding orders or other products and services',
        'To administer contests, promotions, surveys or other site features'
      ]
    },
    {
      icon: Lock,
      title: 'Information Protection',
      content: [
        'We adopt appropriate data collection, storage and processing practices',
        'We implement security measures to protect against unauthorized access',
        'We maintain appropriate safeguards to protect personal information',
        'We regularly review our security procedures and update them as necessary'
      ]
    },
    {
      icon: Users,
      title: 'Sharing Information',
      content: [
        'We do not sell, trade, or rent personal identification information to others',
        'We may share generic aggregated demographic information with trusted partners',
        'We may use third party service providers to help us operate our business',
        'We may release information when required by law or to protect our rights'
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@sems.ae' },
    { icon: Phone, label: 'Phone', value: '+971 508194875, +971 564526626' },
    { icon: MapPin, label: 'Address', value: 'Dubai, UAE' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-8"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Shield className="w-8 h-8 text-white" />
              <span className="font-mono text-sm tracking-[0.3em] text-white/60">PRIVACY POLICY</span>
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                YOUR PRIVACY
              </motion.span>
              <motion.span 
                className="block text-outline"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                MATTERS TO US
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                color: "#fff",
                transition: { duration: 0.3 }
              }}
            >
              At Shuaib Events Management L.L.C, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-32 bg-white text-black relative">
        <div className="absolute inset-0 grid-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Icon and Title */}
                <div className="lg:col-span-4">
                  <motion.div
                    className="flex items-center space-x-4 mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-black text-white flex items-center justify-center clip-hexagon"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <section.icon className="w-8 h-8" />
                    </motion.div>
                    <motion.h2 
                      className="text-3xl lg:text-4xl font-bold font-mono tracking-wider"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        color: "#000",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {section.title}
                    </motion.h2>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <div className="space-y-4">
                    {section.content.map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start space-x-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.2
                          }}
                          whileHover={{ 
                            scale: 1.5,
                            backgroundColor: "#000",
                            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                            transition: { duration: 0.3 }
                          }}
                        ></motion.div>
                        <motion.p 
                          className="text-lg text-black/80 leading-relaxed font-light group-hover:text-black transition-colors"
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {item}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-32 bg-black text-white relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                ADDITIONAL
              </motion.span>
              <motion.span 
                className="block text-outline"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                INFORMATION
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold font-mono tracking-wider mb-4 relative"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#fff",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="absolute -left-4 top-0 w-1 h-8 bg-white opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      scaleY: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  />
                  Cookies
                </motion.h3>
                <motion.p 
                  className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  Our website may use cookies to enhance user experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
                </motion.p>
              </motion.div>

              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold font-mono tracking-wider mb-4 relative"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#fff",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="absolute -left-4 top-0 w-1 h-8 bg-white opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      scaleY: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  />
                  Third Party Links
                </motion.h3>
                <motion.p 
                  className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
                </motion.p>
              </motion.div>

              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold font-mono tracking-wider mb-4 relative"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#fff",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="absolute -left-4 top-0 w-1 h-8 bg-white opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      scaleY: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  />
                  Changes to Privacy Policy
                </motion.h3>
                <motion.p 
                  className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  We reserve the right to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold font-mono tracking-wider mb-4 relative"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#fff",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="absolute -left-4 top-0 w-1 h-8 bg-white opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      scaleY: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  />
                  Your Rights
                </motion.h3>
                <motion.p 
                  className="text-white/80 leading-relaxed mb-4"
                  whileHover={{ 
                    scale: 1.02,
                    color: "#fff",
                    transition: { duration: 0.3 }
                  }}
                >
                  You have the right to:
                </motion.p>
                <ul className="space-y-2 text-white/80">
                  {[
                    "Access your personal data",
                    "Correct inaccurate personal data",
                    "Request deletion of your personal data",
                    "Object to processing of your personal data"
                  ].map((right, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                        whileHover={{ 
                          scale: 2,
                          backgroundColor: "#fff",
                          boxShadow: "0 0 15px rgba(255,255,255,0.8)",
                          transition: { duration: 0.3 }
                        }}
                      ></motion.div>
                      <motion.span
                        whileHover={{ 
                          scale: 1.02,
                          color: "#fff",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {right}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold font-mono tracking-wider mb-4 relative"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#fff",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="absolute -left-4 top-0 w-1 h-8 bg-white opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      scaleY: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  />
                  Contact Information
                </motion.h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                      className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                      whileHover={{ 
                        x: 5,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <info.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.p 
                          className="text-sm text-white/60 font-mono group-hover:text-white/80 transition-colors duration-300"
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {info.label}
                        </motion.p>
                        <motion.p 
                          className="text-white group-hover:text-white font-medium transition-colors duration-300"
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {info.value}
                        </motion.p>
                    </div>
                  </motion.div>
                ))}
                </div>
              </motion.div>
            </motion.div>
              </div>
            </div>
      </section>

      {/* Last Updated */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            className="text-lg text-black/60 font-mono"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              color: "#000",
              transition: { duration: 0.3 }
            }}
          >
            This privacy policy was last updated on December 2024
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;