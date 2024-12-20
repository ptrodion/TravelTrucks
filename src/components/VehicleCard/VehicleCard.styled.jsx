import styled from 'styled-components';

export const WrapperBlock = styled.div`
  width: 524px;
  min-height: 320px;
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
  height: auto;
  border-radius: 10px;
`;

export const CardHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
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

export const CardReviews = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Rating = styled.li`
  display: flex;
  align-items: center;
  margin-left: 4px;
  margin-right: 16px;
`;

export const Location = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Description = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.color.secondTextColor};
  margin-bottom: 24px;
`;

export const CharacteristicsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.gaps.s};
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const CharacteristicsItem = styled.li`
  background-color: ${(props) => props.theme.color.itemsBkgColor};
  padding: 12px 18px;
  border-radius: 100px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.gaps.s};
`;
