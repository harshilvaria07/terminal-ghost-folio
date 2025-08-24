import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TerminalWindow } from './TerminalWindow';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <TerminalWindow title="contact.sh" className="hover-glow">
      <div className="space-y-4">
        <div className="terminal-prompt">Initiating secure connection...</div>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-terminal-cyan text-sm font-terminal">
              {'>'} Enter your name:
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 bg-muted border-border font-terminal text-foreground"
              placeholder="john_doe"
            />
          </div>

          <div>
            <label className="text-terminal-cyan text-sm font-terminal">
              {'>'} Enter your email:
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 bg-muted border-border font-terminal text-foreground"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="text-terminal-cyan text-sm font-terminal">
              {'>'} Enter your message:
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 bg-muted border-border font-terminal text-foreground min-h-[100px]"
              placeholder="Hello, I'd like to discuss..."
            />
          </div>

          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-terminal animate-pulse-glow"
          >
            {'>'} Execute send_message.sh
          </Button>
        </form>
      </div>
    </TerminalWindow>
  );
};