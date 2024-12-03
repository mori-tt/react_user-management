import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
  globalCss: {
    "html, body": {
      backgroundColor: "gray.200",
      color: "gray.800",
    },
  },
});

export default theme;
