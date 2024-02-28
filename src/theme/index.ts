import { ThemeOverride, extendTheme } from "@chakra-ui/react";

import { BadgeTheme as Badge } from "./BadgeTheme";
import { ButtonTheme as Button } from "./ButtonTheme";
import { TagTheme as Tag } from "./TagTheme";

export const colors = {
  background: "#F1F1F1",
};

export const hyperTheme: ThemeOverride = extendTheme({
  fonts: {
    heading: `'Director-Variable', sans-serif`,
    body: `'Switzer', sans-serif`,
  },
  textStyles: {
    primary: {
      fontFamily: `'Switzer', sans-serif`,
    },
    secondary: {
      fontFamily: `'Director-Variable', sans-serif`,
      fontWeight: 100,
      textTransform: "uppercase",
    },
  },
  fontSizes: {
    xxl: "48px",
    xl: "28px",
    lg: "24px",
  },
  colors: {
    background: "#F1F1F1",
  },
  components: {
    Button,
    Badge,
    Tag,
    Select: {
      variants: {
        black: {
          field: {
            border: "1px",
            borderRadius: "0",
            _focus: {
              ring: "2px",
              ringColor: "gray.300",
            },
          },
          text: {},
        },
      },
    },
    Input: {
      variants: {
        gray: {
          field: {
            backgroundColor: "rgba(242,242,242,1)",
            borderRadius: "8px",
            textAlign: "right",
          },
          text: {},
        },
        black: {
          field: {
            border: "1px",
            borderRadius: "0",
            _focus: {
              ring: "2px",
              ringColor: "gray.300",
            },
          },
          text: {},
        },
      },
      baseStyle: {
        field: {
          borderRadius: "0",
        },
        addon: {
          borderRadius: "0",
        },
      },
    },
    Modal: {
      defaultProps: {
        isCentered: true,
      },
    },
  },
} as ThemeOverride);
