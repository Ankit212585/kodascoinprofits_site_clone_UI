// import { css } from "@emotion/react";
import { CssVarsProvider } from "@mui/joy/styles";

export const Mobile = (props) => {
  return CssVarsProvider`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};
