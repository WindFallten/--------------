// components/ThemeSwitcher.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    <div className="flex border rounded-full p-2 space-x-2  ">
      <button
        onClick={() => handleThemeChange('light')}
        className={`rounded-full p-1 ${theme === 'light' ? 'bg-gray-300 text-white' : 'text-gray-600 dark:text-gray-400'}`}
      >
        <Image
          className="dark:invert"
          src="/sun.svg"
          alt="Light"
          width={15}
          height={15}
        />
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`rounded-full p-1 ${theme === 'dark' ? 'bg-gray-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}
      >
        <Image
          className="dark:invert"
          src="/moon.svg"
          alt="Dark"
          width={15}
          height={15}
        />
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        className={`rounded-full p-1 ${theme === 'system' ? 'bg-gray-500 text-white' : 'text-gray-600 dark:text-gray-400'}`}
      >
        <Image
          className="dark:invert"
          src="/system.svg"
          alt="System"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
}
