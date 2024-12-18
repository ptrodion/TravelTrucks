import styled from 'styled-components';

export const Form = styled.form`
  width: 360px;
`;

export const WrapperLocationGeneral = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gaps.s};
  margin-bottom: 40px;
`;

export const ParagraphLocation = styled.p`
  color: ${(props) => props.theme.color.grayTextColor};
  line-height: ${(props) => props.theme.lineHeight.medium};
`;

export const WrapperLocationBlock = styled.div`
  width: 100%;
  height: 56px;
  padding: 18px 20px;
  display: flex;
  text-align: center;
  gap: ${(props) => props.theme.gaps.m};
  background-color: ${(props) => props.theme.color.mainBkgColor};
  border-radius: 12px;
  transition: box-shadow 0.3s ease;
`;

export const ParagraphFilter = styled.p`
  font-weight: ${(props) => props.theme.font.weights.medium};
  color: ${(props) => props.theme.color.secondTextColor};
  line-height: ${(props) => props.theme.lineHeight.medium};
  margin-bottom: 32px;
`;

export const ParagraphFilterEquipment = styled.h3`
  font-weight: ${(props) => props.theme.font.weights.semiBold};
  font-size: ${(props) => props.theme.font.size.medium};
  line-height: ${(props) => props.theme.lineHeight.regular};
  margin-bottom: 32px;

  &:not(:last-child)::after {
    content: '';
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme.color.borderColor};
    margin-top: 24px;
  }
`;

export const WrapperFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.gaps.x};
  margin-bottom: 32px;
`;

export const ButtonSearch = styled.button`
  display: inline-block;
  min-width: 166px;
  height: 56px;
  border-radius: 200px;
  padding: 16px 56.5px;
  line-height: ${(props) => props.theme.lineHeight.medium};
  color: ${(props) => props.theme.color.whiteColor};
  background-color: ${(props) => props.theme.color.buttonLinkColor};

  &:hover {
    background-color: ${(props) => props.theme.color.buttonLinkColorHover};
  }

  &.active {
    background-color: ${(props) => props.theme.color.buttonLinkColorHover};
  }
`;