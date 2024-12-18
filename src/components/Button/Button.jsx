import { useState } from 'react';
import {
  ButtonElementContent,
  ButtonStyled,
  WrapperButtonElements,
} from './Button.styled.jsx';

const Button = ({ innerContent, type, onClick, icon, toggleBorder }) => {
  const [isRedBorder, setIsRedBorder] = useState(false);

  const handleClick = (event) => {
    if (toggleBorder) {
      setIsRedBorder((prev) => !prev);
    }
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <ButtonStyled
      type={type}
      onClick={handleClick}
      className={isRedBorder ? 'selected-filter' : ''}
    >
      <WrapperButtonElements>
        {icon}
        <ButtonElementContent>{innerContent}</ButtonElementContent>
      </WrapperButtonElements>
    </ButtonStyled>
  );
};

export default Button;
