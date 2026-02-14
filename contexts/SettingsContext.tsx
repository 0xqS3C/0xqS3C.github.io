'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface ThemeSettings {
  colorScheme: 'cyber' | 'matrix' | 'neon' | 'ocean' | 'sunset'
  fontSize: 'small' | 'medium' | 'large'
  animationsEnabled: boolean
  glowIntensity: 'low' | 'medium' | 'high'
  blurIntensity: 'low' | 'medium' | 'high'
}

const defaultSettings: ThemeSettings = {
  colorScheme: 'cyber',
  fontSize: 'medium',
  animationsEnabled: true,
  glowIntensity: 'medium',
  blurIntensity: 'medium',
}

interface SettingsContextType {
  settings: ThemeSettings
  updateSettings: (newSettings: Partial<ThemeSettings>) => void
  resetSettings: () => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<ThemeSettings>(defaultSettings)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolioSettings')
    if (saved) {
      try {
        setSettings(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse settings:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('portfolioSettings', JSON.stringify(settings))
      applySettings(settings)
    }
  }, [settings, isLoaded])

  const updateSettings = (newSettings: Partial<ThemeSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }
  return context
}

// Apply settings to CSS variables
function applySettings(settings: ThemeSettings) {
  const root = document.documentElement

  // Color schemes
  const colorSchemes = {
    cyber: {
      primary: '#00d9ff',
      secondary: '#ff00ff',
      tertiary: '#00ff88',
      accent: '#d700ff',
    },
    matrix: {
      primary: '#00ff00',
      secondary: '#00cc00',
      tertiary: '#33ff33',
      accent: '#00aa00',
    },
    neon: {
      primary: '#ff006e',
      secondary: '#8338ec',
      tertiary: '#fb5607',
      accent: '#ffbe0b',
    },
    ocean: {
      primary: '#0077b6',
      secondary: '#00b4d8',
      tertiary: '#90e0ef',
      accent: '#48cae4',
    },
    sunset: {
      primary: '#ff6b6b',
      secondary: '#ff9f43',
      tertiary: '#ffd93d',
      accent: '#ee5a6f',
    },
  }

  const colors = colorSchemes[settings.colorScheme]
  root.style.setProperty('--color-primary', colors.primary)
  root.style.setProperty('--color-secondary', colors.secondary)
  root.style.setProperty('--color-tertiary', colors.tertiary)
  root.style.setProperty('--color-accent', colors.accent)

  // Font sizes
  const fontSizes = {
    small: '14px',
    medium: '16px',
    large: '18px',
  }
  root.style.setProperty('--base-font-size', fontSizes[settings.fontSize])

  // Glow intensity
  const glowIntensities = {
    low: '5px',
    medium: '15px',
    high: '25px',
  }
  root.style.setProperty('--glow-intensity', glowIntensities[settings.glowIntensity])

  // Blur intensity
  const blurIntensities = {
    low: '4px',
    medium: '8px',
    high: '16px',
  }
  root.style.setProperty('--blur-intensity', blurIntensities[settings.blurIntensity])

  // Animations
  if (!settings.animationsEnabled) {
    root.style.setProperty('--animation-duration', '0s')
  } else {
    root.style.setProperty('--animation-duration', '0.3s')
  }
}
