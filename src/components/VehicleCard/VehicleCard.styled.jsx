import styled from 'styled-components';

export const WrapperList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  border: 1px solid ${(props) => props.theme.color.borderColor};
  border-radius: 20px;
  padding: 24px;
`;

export const ListImg = styled.img`
  width: 292px;
  height: 320px;
  border-radius: 10px;
`;
