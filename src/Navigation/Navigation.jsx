import {AppBar, Box, Toolbar, Typography, IconButton, Drawer, Divider} from "@mui/material";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import "./Navigation.css";


function Navigation() {
    const [mobileView, setMobileView] = useState(false);

    const drawer = (
        <Box onClick={() => {setMobileView(!mobileView);}} sx={{textAlign:"center", backgroundColor:"black"}}>
            <Typography
                color={"White"}
                variant="h6"
                component="div"
                sx={{flexGrow:1, mt:2}}
            >
                iPhone
            </Typography>
            <Divider />
            <ul className="MobileNavigation">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/specs"}>Specs</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
        </Box>
    );
  return (
    <Box className="navigation">
        <AppBar component={"nav"} sx={{ bgcolor: "black"}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{
                        mr:2,
                        display : {sm : "none"}
                    }}
                    onClick={() => {setMobileView(!mobileView);}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    color={"White"}
                    variant="h6"
                    component="div"
                    margin={" 20px 0 0 50px"}
                    sx={{flexGrow:1, fontSize:30, fontWeight:500}}
                >
                    iPhone
                </Typography>
                <Box sx={{display : {xs : "none", sm : "block"}}}>
                    <ul className="navigation-menu">
                        <li sx={{fontsize:"1.25rem"}}>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li sx={{fontsize:"1.25rem"}}>
                            <Link to={"/specs"}>Specs</Link>
                        </li>
                        <li sx={{fontsize:"1.25rem"}}>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <li sx={{fontsize:"1.25rem"}}>
                            <Link to={"/about"}>About</Link>
                        </li>
                    </ul>
                </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
                open={mobileView}
                onClose={() => {setMobileView(!mobileView);}}
                sx={{display:{xs:"block", sm:"none"},
                    "& .MuiDrawer-paper" : {
                        boxSizing : "border-box",
                        width :"240px",
                        backgroundColor : "black"
                    }
                }}
            >
                {drawer}
            </Drawer>
        </Box>
        <Box sx={{p:1}}>
            <Toolbar />
        </Box>
    </Box>
  );
}

export default Navigation;