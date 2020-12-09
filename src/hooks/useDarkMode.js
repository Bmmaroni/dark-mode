import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkModeToggle', false);

  return [darkMode, setDarkMode];
};