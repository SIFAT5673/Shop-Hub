
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-14 h-8 p-0 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300"
    >
      <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-primary transition-transform duration-300 flex items-center justify-center ${
        theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
      }`}>
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-primary-foreground" />
        ) : (
          <Moon className="w-3 h-3 text-primary-foreground" />
        )}
      </div>
    </Button>
  );
};
