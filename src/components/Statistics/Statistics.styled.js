import styled from 'styled-components';
export const StatListItem = styled.li`
  display: flex;
  font-size: ${p => p.theme.fontSizes.m};
`;
export const StatListCount = styled.span`
  margin-left: ${p => `${p.theme.space[3]}px`};
`;