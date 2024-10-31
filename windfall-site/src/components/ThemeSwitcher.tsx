// components/ThemeSwitcher.tsx
'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    applyTheme(savedTheme || 'system');
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;

    if (selectedTheme === 'system') {
      root.classList.remove('light', 'dark');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      }
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(selectedTheme);
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex border rounded p-2 space-x-2 bg-gray-200 dark:bg-gray-800">
      <button
        onClick={() => handleThemeChange('light')}
        className={`px-3 py-1 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-400'}`}
      >
        Светлая
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`px-3 py-1 rounded ${theme === 'dark' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-400'}`}
      >
        Тёмная
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        className={`px-3 py-1 rounded ${theme === 'system' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-400'}`}
      >
        Системная
      </button>
    </div>
  );
}
