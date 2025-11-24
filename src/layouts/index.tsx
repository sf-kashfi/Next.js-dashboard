"use client";

import { useState } from "react";
import Link from "next/link";
//mui
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    CssBaseline,
    Box,
    IconButton,
    Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorMode } from "@/theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { toggleColorMode, mode } = useColorMode();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    My Dashboard
                </Typography>
            </Toolbar>

            <List>
                <ListItemButton component={Link} href="/">
                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={Link} href="/form">
                    <ListItemText primary="Form" />
                </ListItemButton>

                <ListItemButton component={Link} href="/shop">
                    <ListItemText primary="Shop" />
                </ListItemButton>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ marginLeft: "auto", cursor: "pointer" }}
                        onClick={toggleColorMode}
                    >
                        <IconButton color="inherit">
                            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>

                        <Typography variant="body2">
                            {mode === "light" ? "Dark Mode" : "Light Mode"}
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    mt: 8,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
