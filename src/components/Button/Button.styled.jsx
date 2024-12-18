import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 112px;
  min-height: 96px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.color.borderColor};
  background-color: ${(props) =>
    props.isActive ? props.theme.color.mainTextColor : 'transparent'};

  &:hover {
    border-color: ${(props) => props.theme.color.buttonLinkColor};
  }

  &.selected-filter {
    border-color: ${(props) => props.theme.color.buttonLinkColor};
  }

  &.selected-filter-type {
    border-color: ${(props) => props.theme.color.buttonLinkColor};
  }
`;

export const WrapperButtonElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.gaps.s};
`;

export const ButtonElementContent = styled.p`
  font-weight: ${(props) => props.theme.font.weights.medium};
  display: flex;
`;
