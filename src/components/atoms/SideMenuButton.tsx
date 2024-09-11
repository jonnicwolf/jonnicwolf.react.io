import { FC,useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from "styled-components";

interface Props {
  img?: string,
  onclick?: ()=> void,
  fontSize?: string,
}

const SideMenuButton: FC<Props> = ({ img, onclick, fontSize,  }) => {
  const {darkmode} = useContext(DarkmodeContext);

  return (
    <StyledButton darkmode={darkmode} onClick={onclick} fontSize={fontSize}>
      <i className={img} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  border-radius: 50%;
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  background: transparent;
`;

export default SideMenuButton;
