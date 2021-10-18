import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Info = (props) => {
  const classNames = props.info
    ? "w-full h-full absolute bg-black opacity-40 z-30 flex  items-center justify-center"
    : "w-full h-full absolute bg-black opacity-0 z-30 flex  items-center justify-center";
  return (
    <div className={classNames}>
      {props.children}
      <Icon>
        <FavoriteBorderOutlinedIcon />
      </Icon>
      <Icon>
        <SearchOutlinedIcon />
      </Icon>
      <Icon>
        <ShoppingCartOutlinedIcon />
      </Icon>
    </div>
  );
};
const Container = (props) => {
  const [info, setInfo] = useState(false);

  const onMouseEnter = () => {
    setInfo(true);
  };
  const onMouseLeave = () => {
    setInfo(false);
  };
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className=" flex-1 m-1 min-w-380 min h-96 flex items-center justify-center bg-gray-200 relative"
    >
      {props.children}
      <Info info={info} />
    </div>
  );
};

const Circle = (props) => (
  <div className="w-52 h-52 rounded-full bg-yellow-50 absolute">
    {props.children}
  </div>
);

const Image = (props) => (
  <img className="h-3/4 z-10" src={props.src} alt="product img" />
);

const Icon = (props) => (
  <div className=" w-10 h-10 x-40 transform hover:scale-110 rounded-full flex items-center m-2 justify-center bg-white">
    {props.children}
  </div>
);

export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info></Info>
    </Container>
  );
};
