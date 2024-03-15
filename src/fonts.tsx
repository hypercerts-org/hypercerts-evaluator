import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Director-Regular";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Director-Regular.woff2) format("woff2"), url(/fonts/Director-Regular.woff) format("woff");
      }

      @font-face {
        font-family: "Director-Variable";
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(/fonts/Director-Variable.woff2) format("woff2"), url(/fonts/Director-Variable.woff) format("woff");
      }
      `}
  />
);

export default Fonts;
