import styled from "styled-components";

export const Message = styled.h3`
 padding: ${p => `${p.theme.space[4]}px`} 0;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.red};
`