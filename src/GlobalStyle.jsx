import styled from 'styled-components';

export const StylesMainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: 56px;
  border-radius: 200px;
  font-size: 16px;
  line-height: 1.33;
  color: ${(props) => props.theme.color.whiteColor};
  background-color: ${(props) => props.theme.color.buttonLinkColor};

  &:hover {
    background-color: ${(props) => props.theme.color.buttonLinkColorHover};
  }

  &.active {
    background-color: ${(props) => props.theme.color.buttonLinkColorHover};
  }
`;

const globalStyle = {
  color: {
    whiteColor: '#FFFFFF',
    mainBkgColor: '#F7F7F7',
    mainTextColor: '#101828',
    secondTextColor: '#475467',
    grayTextColor: '#6C717B',
    buttonLinkColor: '#E44848',
    buttonLinkColorHover: '#D84343',
    borderColor: '#DADDE1',
    itemsBkgColor: '#F2F4F7',
  },
  font: {
    weights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
    size: {
      regular: '16px',
      medium: '20px',
      large: '48px',
    },
  },
  lineHeight: {
    regular: '1.2',
    medium: '1.5',
  },
  gaps: {
    s: '8px',
    m: '10px',
    x: '12px',
    xl: '32px',
    xxl: '64px',
  },
};

export default globalStyle;
