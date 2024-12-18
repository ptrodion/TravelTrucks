import { ButtonStyled } from './Button.styled.jsx';

const Button = ({ innerContent, type, onClick, icon }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      <div>
        {icon}
        {innerContent}
      </div>
    </ButtonStyled>
  );
};

export default Button;
