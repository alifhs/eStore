import { Search } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import './navbar.css'
// import {Sear} from '@mui/icons-material/Search';


const Container = (props) => {
  return <div style={{  }} className="h-16 flex items-center px-4 bg-white mobile-nav-container">{props.children}</div>;
};

const Wrapper = (props) => (
  <div className=" flex-1 my-auto flex justify-between items-center ">
    {props.children}
  </div>
);
const Left = (props) => (
  <div className=" flex-1 flex items-center mobile-nav-container-item "> {props.children}</div>
);
const Center = (props) => <div className="flex-1 mobile-nav-container-item "> {props.children}</div>;
const Right = (props) => (
  <div className="flex-1 flex justify-center items-center mobile-nav-container-item  "> {props.children}</div>
);
const Language = (props) => (
  <div className="cursor-pointer text-base mobile-nav-language">{props.children}</div>
);

const Logo = (props) => (
  <h1 className="font-bold text-center text-5xl mobile-nav-logo">{props.children}</h1>
);
const Input = (props) => <input className="border-none h-full mobile-nav-input block" type="text" />;

const MenuItem = (props) => (
  <div className="text-sm cursor-pointer ml-6 mobile-nav-menu-item">{props.children}</div>
);
const SearchContainer = (props) => (
  <div className="border-2 border-solid border-gray-200 flex  ml-6 items-center mobile-nav-search-container ">
    {props.children}
  </div>
);
const SearchIconContainer = (props) => (
  <div className=" flex items-center justify-center cursor-pointer">{props.children}</div>
);
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIconContainer>
              <Search />
            </SearchIconContainer>
          </SearchContainer>
        </Left>
        <Center>
          {" "}
          <Logo>e-Store</Logo>{" "}
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
