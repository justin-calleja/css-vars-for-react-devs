import React from 'react';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from 'react-use-localstorage';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Sidebar, { useSidebarState } from './Sidebar';

function App() {
  const [colorMode, setColorMode] = useLocalStorage('colorMode', '');
  const [isSidebarOpen, toggleSidebar] = useSidebarState();

  window.setColorMode = setColorMode;
  window.toggleSidebar = toggleSidebar;

  return (
    <ThemeProvider
      theme={{
        ...theme,
        colorMode,
      }}
    >
      <GlobalStyles />
      <Sidebar isOpen={isSidebarOpen}>Hello</Sidebar>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
        nesciunt.
      </p>
    </ThemeProvider>
  );
}

export default App;
