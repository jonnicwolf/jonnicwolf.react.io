import { FC, } from 'react';
import { useDarkmode } from '../../Darkmode';

import styled from "styled-components";

interface Props {
  img?: string,
  onclick?: () => void,
  fontSize?: string,
};

interface StyledButtonProps {
  darkmode: boolean,
};

const SideMenuButton: FC<Props> = ({ img, onclick, }) => {
  const {darkmode} = useDarkmode();

  return (
    <StyledButton darkmode={darkmode} onClick={onclick}>
      <i className={img} />
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
  border-radius: 50%;
  color: ${props => props.darkmode ? 'white' : 'black'};
  background: transparent;
`;

export default SideMenuButton;
