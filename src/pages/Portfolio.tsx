import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, ExternalLink, Terminal, Shield, Bug } from 'lucide-react';
import { TerminalWindow } from '@/components/TerminalWindow';
import { GlitchText } from '@/components/GlitchText';
import { TypingAnimation } from '@/components/TypingAnimation';
import { ContactForm } from '@/components/ContactForm';
import { SkillsMatrix } from '@/components/SkillsMatrix';
import { MatrixRain } from '@/components/MatrixRain';

const Portfolio = () => {
  const projects = [
    {
      title: 'Enterprise WAF Implementation',
      description: 'Led comprehensive WAF deployment using Akamai and Imperva solutions for enhanced web application security.',
      tech: ['Akamai WAF', 'Imperva', 'Rule Configuration', 'Security Policies'],
      status: 'Completed',
      link: '#'
    },
    {
      title: 'VAPT Assessment Framework',
      description: 'Developed automated vulnerability assessment workflows using Nessus, Acunetix, and Burp Suite.',
      tech: ['Burp Suite', 'Nessus', 'Acunetix', 'VAPT Methodology'],
      status: 'Ongoing',
      link: '#'
    },
    {
      title: 'Cloud Security Monitoring',
      description: 'Implemented AWS security monitoring using Inspector and Kibana for real-time threat detection.',
      tech: ['AWS Inspector', 'Kibana', 'Elasticsearch', 'Cloud Security'],
      status: 'Active',
      link: '#'
    }
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Ethical Hacking Certification',
    'Security Operations Specialist',
    'Vulnerability Assessment Professional'
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixRain />
      
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="font-terminal text-primary">
              <GlitchText text="[SECURITY_EXPERT]" className="text-lg font-bold" />
            </div>
            <div className="flex gap-6 text-sm font-terminal">
              <a href="#about" className="text-terminal-cyan hover:text-primary transition-colors">about.sh</a>
              <a href="#skills" className="text-terminal-cyan hover:text-primary transition-colors">skills.py</a>
              <a href="#projects" className="text-terminal-cyan hover:text-primary transition-colors">projects.md</a>
              <a href="#contact" className="text-terminal-cyan hover:text-primary transition-colors">contact.sh</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="ascii-art text-center mb-8 text-primary">
{`    ____                      _____                      _ _         
   / ___|   _   _ _ __   ___ _ |_   _|__  _ __ _ __ ___   (_) |_ _   _ 
  | |  | | | | | '_ \\ / _ \\ '__|| |/ _ \\| '__| '_ \` _ \\  | | __| | | |
  | |__| |_| | | |_) |  __/ |   | | (_) | |  | | | | | | | | |_| |_| |
   \\____\\__, | | .__/ \\___|_|   |_|\\___/|_|  |_| |_| |_| |_|\\__|\\__, |
        |___/  |_|                                              |___/ `}
          </div>
          
          <div className="terminal-prompt text-2xl mb-4">
            <TypingAnimation text="whoami" speed={150} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-terminal">
            <GlitchText text="Varia Harshil" className="text-primary" />
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 font-terminal text-terminal-cyan">
            <TypingAnimation 
              text="Associate Security Operations Specialist | Purple Team | VAPT Expert" 
              speed={50}
              showCursor={false}
            />
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-terminal">
              <Terminal className="w-4 h-4 mr-2" />
              View Portfolio
            </Button>
            <Button variant="outline" className="border-border text-foreground font-terminal hover-glow">
              <Shield className="w-4 h-4 mr-2" />
              Security Reports
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <TerminalWindow title="about_me.txt" className="hover-glow">
            <div className="space-y-4">
              <div className="terminal-prompt">cat about_me.txt</div>
              <div className="text-foreground leading-relaxed font-terminal">
                <p className="mb-4">
                  Passionate cybersecurity expert with <span className="text-terminal-green">2+ years</span> of hands-on experience as a 
                  purple team specialist, combining both red team and blue team methodologies for comprehensive security operations.
                </p>
                <p className="mb-4">
                  Skilled in <span className="text-terminal-cyan">Vulnerability Assessment and Penetration Testing (VAPT)</span>, 
                  WAF operations, EDR management, and advanced log analysis using Elasticsearch Kibana. 
                  Proven expertise in <span className="text-terminal-yellow">cloud security, incident response, and threat hunting</span>.
                </p>
                <p className="mb-4">
                  Experienced with enterprise security tools including <span className="text-terminal-yellow">AWS Inspector, Burp Suite, Nessus, 
                  Imperva, Akamai, and Symantec</span>. Specialized in false positive analysis and security automation.
                </p>
                <div className="text-terminal-green font-terminal">
                  <span className="text-terminal-cyan">$</span> echo "Current status: Available for new challenges"
                  <br />
                  <span className="text-muted-foreground">Current status: Available for new challenges</span>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsMatrix />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <TerminalWindow title="projects_list.json" className="hover-glow">
            <div className="space-y-6">
              <div className="terminal-prompt">Loading project database...</div>
              
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-muted border-border p-6 hover-glow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-primary font-terminal">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded font-terminal ${
                        project.status === 'Completed' ? 'bg-primary text-primary-foreground' :
                        project.status === 'Active' ? 'bg-secondary text-secondary-foreground' :
                        'bg-accent text-accent-foreground'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 font-terminal text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-background text-terminal-cyan px-2 py-1 rounded font-terminal border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="font-terminal">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </section>

        {/* Certifications */}
        <section>
          <TerminalWindow title="certifications.sh" className="hover-glow">
            <div className="space-y-4">
              <div className="terminal-prompt">ls -la /certifications/</div>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded border border-border">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-terminal text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="text-terminal-green font-terminal text-sm mt-4">
                <span className="text-terminal-cyan">$</span> echo "Certifications verified and up-to-date"
                <br />
                <span className="text-muted-foreground">Certifications verified and up-to-date</span>
              </div>
            </div>
          </TerminalWindow>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactForm />
        </section>

        {/* Social Links */}
        <section>
          <TerminalWindow title="social_links.sh" className="hover-glow">
            <div className="space-y-4">
              <div className="terminal-prompt">Connecting to external networks...</div>
              <div className="flex justify-center gap-6">
                <Button variant="outline" className="font-terminal hover-glow">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="font-terminal hover-glow">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="font-terminal hover-glow">
                  <Bug className="w-5 h-5 mr-2" />
                  HackTheBox
                </Button>
              </div>
            </div>
          </TerminalWindow>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center font-terminal text-sm text-muted-foreground">
            <div className="ascii-art text-primary mb-2">
              root@portfolio:~$
            </div>
            <p>Connection terminated. Logging out...</p>
            <p className="text-terminal-green">System secure. No vulnerabilities detected.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;