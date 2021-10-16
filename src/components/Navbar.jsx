
import { Search } from "@material-ui/icons";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
;

// import {Sear} from '@mui/icons-material/Search';
const Wrapper = (props) => (
  <div className="px-5 flex-1 my-auto flex justify-between items-center">
    {props.children}
  </div>
);




 const Container = (props) => {
    return (
        <div className='h-16 flex items-center'>
           {props.children}
        </div>
    )
}
const Left = (props) => (
  <div className=" flex-1 flex items-center "> {props.children}</div>
);
const Center = (props) => <div className="flex-1"> {props.children}</div>;
const Right = (props) => <div className="flex-1 flex justify-end"> {props.children}</div>;
const Language = (props) => (
  <div className="cursor-pointer text-base">{props.children}</div>
);

const Logo = (props) => (
  <h1 className="font-bold text-center text-5xl">{props.children}</h1>
);
const Input = (props) => <input className="border-none" type="text" />;

const MenuItem = (props) => (
  <div className="text-sm cursor-pointer ml-6">{props.children}</div>
);
const SearchContainer = (props) => (
  <div className="border-2 border-solid border-gray-200 flex ml-6 items-center ">
    {props.children}
  </div>
);
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          {" "}
          <Logo>e-Store</Logo>{" "}
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
           <Badge  badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
           </Badge>
         
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
