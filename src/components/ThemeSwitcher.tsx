
import { useState, useEffect, useRef } from 'react';
import { Paintbrush, X } from 'lucide-react';

interface ColorTheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
}

const ThemeSwitcher = () => {
  const colorThemes: ColorTheme[] = [
    { id: 'default', name: 'Default', primary: '#264734', secondary: '#F6A300' },
    { id: 'blue', name: 'Blue', primary: '#1E40AF', secondary: '#3B82F6' },
    { id: 'purple', name: 'Purple', primary: '#6B21A8', secondary: '#A855F7' },
    { id: 'red', name: 'Red', primary: '#991B1B', secondary: '#EF4444' }
  ];

  const [activeTheme, setActiveTheme] = useState<string>('default');
  const [open, setOpen] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('colorTheme');
    if (savedTheme) {
      setActiveTheme(savedTheme);
      applyColorTheme(savedTheme);
    }
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const applyColorTheme = (themeId: string) => {
    const theme = colorThemes.find(theme => theme.id === themeId);
    if (!theme) return;
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    localStorage.setItem('colorTheme', themeId);
  };

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    applyColorTheme(themeId);
  };

  // WhatsAppButton is usually at left-4 bottom-6.
  // We'll place ThemeSwitcher 80px (20+44+extra) above bottom-6 for safe spacing.
  // Use left-4 and bottom-[4.5rem]
  return (
    <div className="hidden sm:block fixed left-4 z-50" style={{ bottom: '6.5rem' }}>
      {/* The "Open theme palette" Button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close theme palette" : "Open theme palette"}
        className={`w-11 h-11 bg-white/80 hover:bg-white/65 border border-white/60 shadow-lg rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200
          ${open ? 'ring-2 ring-[var(--color-secondary)] scale-105' : ''}
        `}
        style={{
          boxShadow: '0 8px 20px 0 rgba(38,71,52,0.12), 0 0px 8px 0 rgba(38,71,52,0.14)'
        }}
      >
        {open ? (
          <X className="h-6 w-6 text-[var(--color-secondary)] transition-all" />
        ) : (
          <Paintbrush className="h-6 w-6 text-[var(--color-primary)] transition-all" />
        )}
      </button>
      {/* The Palette Panel: animated and dismissed when closed */}
      <div
        ref={panelRef}
        className={`absolute left-14 top-1/2 -translate-y-1/2
        transition-all duration-200
        ${open
          ? 'opacity-100 pointer-events-auto translate-x-0 scale-100'
          : 'opacity-0 pointer-events-none -translate-x-2 scale-95'}
        `}
      >
        <div
          className="rounded-full border border-white/40 shadow-2xl p-4 flex flex-col gap-3 bg-white/70 backdrop-blur-xl"
          style={{
            minWidth: 64,
            boxShadow: '0 8px 32px 0 rgba(38,71,52,0.13), 0 1.5px 12px 0 rgba(38,71,52,0.12)'
          }}
        >
          {colorThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`
                w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center
                transition-all duration-200 cursor-pointer outline-none
                ${activeTheme === theme.id
                  ? 'border-[var(--color-secondary)] ring-4 ring-[var(--color-secondary)]/20 scale-110'
                  : 'border-transparent hover:border-[var(--color-primary)] hover:scale-105'}
              `}
              style={{
                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
              }}
              aria-label={`Switch to ${theme.name} theme`}
              title={theme.name}
            >
              {activeTheme === theme.id ? (
                <span className="text-white text-xl flex items-center justify-center">
                  <svg viewBox="0 0 16 16" width="18" height="18" className="inline" fill="none">
                    <circle cx="8" cy="8" r="8" fill="white" fillOpacity="0.32"/>
                    <path d="M5.2 8.4L7.1 10.3L11 6.1" stroke="#264734" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              ) : ""}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
