import styled from "styled-components";

export const Title = styled.h2`
padding: ${p => `${p.theme.space[4]}px`} 0;
text-aligin: center;
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.heading};
color: ${p => p.theme.colors.text};
`