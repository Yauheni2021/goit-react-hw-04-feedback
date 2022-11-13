import styled from "styled-components";

export const Button = styled.button`
padding: ${p => `${p.theme.space[1]}px`} 0;
margin-right: ${p => `${p.theme.space[3]}px`} ;
:last-child {
    margin-right: 0;
}

text-aligin: center;
font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.muted};
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
  width: 80px;
  height: 30px;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  ::first-letter {
    text-transform: capitalize;
  }

   transition-duration: 250ms;
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`
