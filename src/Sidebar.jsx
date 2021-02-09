import { useState } from 'react';
import styled from 'styled-components';
import { breakpointsToCssVarsStringFactory } from './theme';

const widths = ['288px', '176px', '256px'];

const Sidebar = styled.div`
  ${({ theme }) =>
    breakpointsToCssVarsStringFactory(
      theme.breakpoints,
      'width',
    )({ theme, values: widths })}

  width: var(--width);
  left: calc(-1 * var(--width));

  background-color: var(--colors-secondaryBackground);
  position: fixed;
  height: 100%;
  overflow-x: hidden;
  transition: left 0.2s ease-in;
  z-index: 100;

  ${({ isOpen }) => (isOpen ? { left: 0 } : {})};
`;

export const useSidebarState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return [isOpen, toggle];
};

export default Sidebar;
