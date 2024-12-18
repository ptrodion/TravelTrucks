import { useState } from 'react';
import {
  ButtonElementContent,
  ButtonStyled,
  WrapperButtonElements,
} from './Button.styled.jsx';

const Button = ({
  innerContent,
  type,
  onClick,
  icon,
  toggleEquipment,
  toggleType,
}) => {
  const [isToggleEquipment, setIsToggleEquipment] = useState(false);
  const [isToggleType, setIsToggleType] = useState(false);

  const handleClick = (event) => {
    if (toggleEquipment) {
      setIsToggleEquipment(!isToggleEquipment);
    }
    if (toggleType) {
      setIsToggleType(!isToggleType);
    }

    if (onClick) {
      onClick(event);
    }
  };
  return (
    <ButtonStyled
      type={type}
      onClick={handleClick}
      className={`${isToggleEquipment ? 'selected-filter' : ''} ${isToggleType ? 'selected-filter-type' : ''}`}
    >
      <WrapperButtonElements>
        {icon}
        <ButtonElementContent>{innerContent}</ButtonElementContent>
      </WrapperButtonElements>
    </ButtonStyled>
  );
};

export default Button;
