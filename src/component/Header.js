import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { Box } from "@mui/system";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const Header = () => {
  const item = useSelector((state)=> state.cart.cartItems);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: 'black'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'sticky'}}>
          <Typography variant="h5" noWrap color='inherit' component="a" href="/" sx={{textDecoration: 'none'}}>
            <strong> SHOP-CART </strong>
          </Typography>

          <div className="Navbar-Menu" style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Link
            to="/"
            style={{ fontSize: '1.25rem' ,color: 'inherit',display: { xs: 'none', sm: 'block' }, margin: '0 0.75rem', textDecoration: 'none' }}
          >
            <strong>
            Home
            </strong>
          </Link>
          <Link
            to="/Cart"
            style={{ fontSize: '1.25rem' ,color: 'inherit',display: { xs: 'none', sm: 'block' }, margin: '0 0.75rem', textDecoration: 'none' }}
          >
            <strong>
            Cart
            </strong>
          </Link>
          <Link
            to="#"
            style={{ fontSize: '1.25rem' ,color: 'inherit',display: { xs: 'none', sm: 'block' }, margin: '0 0.75rem', textDecoration: 'none' }}
          >
            <strong>
            About
            </strong>
          </Link>
          </div>

          <div className="Navbar-Icon" style={{display: 'flex', justifyContent: 'space-around'}}>
          <Search sx={{display: 'flex', alignItems: 'center'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton sx={{mx:5}} >
            <Badge badgeContent={item.length} color="primary">
            <ShoppingCartRoundedIcon color="secondary" fontSize="large" href='/Cart' />
            </Badge>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Header;
