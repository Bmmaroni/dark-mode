import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {

  const [darkMode, setDarkMode] = useLocalStorage('darkModeToggle');

  return [darkMode, setDarkMode];
};