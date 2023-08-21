"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import Robo from "../public/assests/robo.png";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setNavBar } from "@/redux/slice";
const pages = ["Products", "Pricing", "Blog"];
import { signIn, signOut, useSession } from "next-auth/react";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function NavBar() {
  const { data: session } = useSession();
  const UserImage = session?.user?.image;

  const dispatch = useDispatch();
  const navBars = useSelector((state) => state.data.navBar);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(82deg, rgba(19,65,80,1) 0%, rgba(67,58,59,1) 98%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          {navBars && (
            <Link
              onClick={() => dispatch(setNavBar(false))}
              href="/"
              passHref
              suppressHydrationWarning={true}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                HOME
              </Typography>
            </Link>
          )}

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {navBars && (
            <Typography
              variant="h5"
              noWrap
              // component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link
                onClick={() => dispatch(setNavBar(false))}
                href={"/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                HOME
              </Link>
            </Typography>
          )}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
             {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box
            sx={{
              flexGrow: 0,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              gap: "9px",
            }}
          >
            {UserImage && (
              <Avatar src={UserImage} sx={{ width: 35, height: 35 }} />
            )}
            {session && session.user ? (
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={() => signOut()}
                sx={{ ml: 2 }}
              >
                logout
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={() => {
                  signIn("google");
                }}
                sx={{ ml: 2 }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
