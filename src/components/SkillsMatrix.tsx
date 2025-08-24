import React from 'react';
import { TerminalWindow } from './TerminalWindow';

const skills = [
  { category: 'VAPT & Security Assessment', level: 92, tools: ['Burp Suite', 'Nessus', 'Acunetix'] },
  { category: 'Cloud Security (AWS)', level: 88, tools: ['AWS Inspector', 'Cloud Security', 'IAM'] },
  { category: 'SIEM & Log Analysis', level: 90, tools: ['Kibana', 'Elasticsearch', 'ELK Stack'] },
  { category: 'WAF & Network Security', level: 87, tools: ['Imperva', 'Akamai', 'Cloudflare'] },
  { category: 'Purple Team Operations', level: 85, tools: ['Red Team', 'Blue Team', 'Threat Hunting'] },
  { category: 'Endpoint Security & EDR', level: 83, tools: ['Symantec', 'EDR Management', 'Incident Response'] },
  { category: 'Threat Intelligence', level: 86, tools: ['SocRadar', 'BitSight', 'Risk Assessment'] }
];

export const SkillsMatrix: React.FC = () => {
  return (
    <TerminalWindow title="skills_matrix.py" className="hover-glow">
      <div className="space-y-4">
        <div className="terminal-prompt">Loading skill assessment...</div>
        
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-terminal-cyan font-terminal text-sm">
                {skill.category}
              </span>
              <span className="text-terminal-green font-terminal text-xs">
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full bg-muted rounded-sm h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool, toolIndex) => (
                <span 
                  key={toolIndex}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-terminal"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-6 text-terminal-green font-terminal text-sm">
          <span className="text-terminal-cyan">$</span> python3 skills_matrix.py --status
          <br />
          <span className="text-muted-foreground">Assessment complete. All systems operational.</span>
        </div>
      </div>
    </TerminalWindow>
  );
};