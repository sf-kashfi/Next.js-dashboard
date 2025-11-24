"use client";

import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline, PaletteMode } from "@mui/material";

interface Props {
    children: ReactNode;
}

interface ColorModeContextType {
    toggleColorMode: () => void;
    mode: PaletteMode;
}

const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => { },
    mode: "light",
});

export function useColorMode() {
    return useContext(ColorModeContext);
}

export default function ThemeProvider({ children }: Props) {
    const [mode, setMode] = useState<PaletteMode>("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === "light" ? "dark" : "light"));
            },
            mode,
        }),
        [mode]
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: { main: "#1976d2" },
                    secondary: { main: "#9c27b0" },
                },
                typography: { fontFamily: "Roboto, Arial, sans-serif" },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <StyledEngineProvider injectFirst>
                <MUIThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </MUIThemeProvider>
            </StyledEngineProvider>
        </ColorModeContext.Provider>
    );
}
