import styled from 'styled-components';

export const WrapperBlock = styled.div`
  width: 524px;
  height: 320px;
`;

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

export const CardHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardHeaderParagraph = styled.h2`
  font-weight: ${(props) => props.theme.font.weights.semiBold};
  font-size: 24px;
  color: ${(props) => props.theme.color.mainTextColor};
  line-height: 1.33;
`;

export const CardHeaderItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.gaps.x};
`;
