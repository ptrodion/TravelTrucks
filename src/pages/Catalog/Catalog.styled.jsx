import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 48px 64px;
  gap: ${(props) => props.theme.gaps.xxl};
  height: 100vh;
`;

export const WrapperBlockList = styled.div`
  min-width: 888px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gaps.xl};
`;
