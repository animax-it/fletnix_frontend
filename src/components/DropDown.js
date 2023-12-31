import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../Style/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.gray[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.dropDownMenu}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "black",
          fontSize: "8px",
          marginLeft: "-10px",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        Browse
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            navigate("../homepage");
          }}
          disableRipple
        >
          Home
        </MenuItem>
        <MenuItem
          sx={{
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            navigate("../tvshows");
          }}
          disableRipple
        >
          Tv Shows
        </MenuItem>
        <MenuItem
          sx={{
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            navigate("../movies");
          }}
          disableRipple
        >
          Movies
        </MenuItem>
        <MenuItem
          sx={{
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          disableRipple
        >
          News & Popular
        </MenuItem>
        <MenuItem
          sx={{
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          disableRipple
        >
          My List
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
