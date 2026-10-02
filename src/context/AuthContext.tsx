import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, Language } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  register: (name: string, email: string, password?: string, state?: string, interests?: string[]) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  toggleFavoritePlant: (plantId: string) => boolean;
  toggleFavoriteFertilizer: (fertId: string) => boolean;
  isPlantFavorite: (plantId: string) => boolean;
  isFertilizerFavorite: (fertId: string) => boolean;
  recentlyViewedPlants: string[];
  addRecentlyViewedPlant: (plantId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const GUEST_STORAGE_KEY = 'vaijanath_guest_data';
const USER_STORAGE_KEY = 'vaijanath_user';
const TOKEN_KEY = 'vaijanath_token';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem(USER_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const [guestFavorites, setGuestFavorites] = useState<{ plants: string[]; fertilizers: string[] }>(() => {
    const saved = localStorage.getItem(GUEST_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { plants: ['plant-tulsi', 'plant-neem'], fertilizers: ['fert-vermicompost'] };
      }
    }
    return { plants: ['plant-tulsi', 'plant-neem'], fertilizers: ['fert-vermicompost'] };
  });

  const [recentlyViewedPlants, setRecentlyViewedPlants] = useState<string[]>(() => {
    const saved = localStorage.getItem('vaijanath_recent_plants');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(guestFavorites));
  }, [guestFavorites]);

  useEffect(() => {
    localStorage.setItem('vaijanath_recent_plants', JSON.stringify(recentlyViewedPlants));
  }, [recentlyViewedPlants]);

  const login = async (email: string, _password?: string): Promise<boolean> => {
    // Try backend API first, with fallback to local profile
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: _password || 'password123' })
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
        if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
        return true;
      }
    } catch {
      // Backend fallback
    }

    const fallbackUser: UserProfile = {
      id: 'usr_' + Date.now(),
      name: email.split('@')[0].replace('.', ' '),
      email,
      preferredLanguage: 'en',
      location: 'Gujarat, India',
      gardeningInterests: ['Medicinal Plants', 'Organic Fertilizers', 'Fruit Trees'],
      favoritePlantIds: [...guestFavorites.plants],
      favoriteFertilizerIds: [...guestFavorites.fertilizers],
      createdAt: new Date().toISOString()
    };
    setUser(fallbackUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(fallbackUser));
    return true;
  };

  const register = async (name: string, email: string, password?: string, locationState?: string, interests?: string[]): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: password || 'password123', location: locationState, gardeningInterests: interests })
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
        if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
        return true;
      }
    } catch {
      // Fallback
    }

    const newUser: UserProfile = {
      id: 'usr_' + Date.now(),
      name,
      email,
      preferredLanguage: 'en',
      location: locationState || 'Gujarat, India',
      gardeningInterests: interests && interests.length > 0 ? interests : ['Medicinal Plants', 'Organic Fertilizers'],
      favoritePlantIds: [...guestFavorites.plants],
      favoriteFertilizerIds: [...guestFavorites.fertilizers],
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(TOKEN_KEY);
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updated));

    fetch('/api/auth/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`
      },
      body: JSON.stringify(data)
    }).catch(() => {});
  };

  const toggleFavoritePlant = (plantId: string): boolean => {
    if (user) {
      const exists = user.favoritePlantIds.includes(plantId);
      const nextFavorites = exists
        ? user.favoritePlantIds.filter(id => id !== plantId)
        : [...user.favoritePlantIds, plantId];
      updateProfile({ favoritePlantIds: nextFavorites });
      return !exists;
    } else {
      const exists = guestFavorites.plants.includes(plantId);
      const nextPlants = exists
        ? guestFavorites.plants.filter(id => id !== plantId)
        : [...guestFavorites.plants, plantId];
      setGuestFavorites(prev => ({ ...prev, plants: nextPlants }));
      return !exists;
    }
  };

  const toggleFavoriteFertilizer = (fertId: string): boolean => {
    if (user) {
      const exists = user.favoriteFertilizerIds.includes(fertId);
      const nextFavorites = exists
        ? user.favoriteFertilizerIds.filter(id => id !== fertId)
        : [...user.favoriteFertilizerIds, fertId];
      updateProfile({ favoriteFertilizerIds: nextFavorites });
      return !exists;
    } else {
      const exists = guestFavorites.fertilizers.includes(fertId);
      const nextFert = exists
        ? guestFavorites.fertilizers.filter(id => id !== fertId)
        : [...guestFavorites.fertilizers, fertId];
      setGuestFavorites(prev => ({ ...prev, fertilizers: nextFert }));
      return !exists;
    }
  };

  const isPlantFavorite = (plantId: string): boolean => {
    if (user) {
      return user.favoritePlantIds.includes(plantId);
    }
    return guestFavorites.plants.includes(plantId);
  };

  const isFertilizerFavorite = (fertId: string): boolean => {
    if (user) {
      return user.favoriteFertilizerIds.includes(fertId);
    }
    return guestFavorites.fertilizers.includes(fertId);
  };

  const addRecentlyViewedPlant = (plantId: string) => {
    setRecentlyViewedPlants(prev => {
      const filtered = prev.filter(id => id !== plantId);
      return [plantId, ...filtered].slice(0, 8);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        toggleFavoritePlant,
        toggleFavoriteFertilizer,
        isPlantFavorite,
        isFertilizerFavorite,
        recentlyViewedPlants,
        addRecentlyViewedPlant
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
