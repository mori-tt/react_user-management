"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme/theme"; // 作成したテーマをインポート
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      {/* 作成したテーマでdefaultSystemを置き換える */}
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
