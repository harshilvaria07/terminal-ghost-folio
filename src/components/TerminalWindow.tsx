import React from 'react';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  title = "terminal", 
  children, 
  className = "" 
}) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-muted-foreground text-sm ml-2 font-terminal">
          {title}
        </span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};