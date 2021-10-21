import React from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "../data/data";
import './slider.css'

const Container = (props) => (
  <div className="w-full h-screen relative overflow-hidden mobile-slider ">
    {props.children}
  </div>
);

const Arrow = (props) => (
  <div
    onClick={props.handleClick}
    className={`w-12 z-10 h-12 bg-gray-200 rounded-full absolute ${
      props.direction + "-3"
    } my-auto top-0 bottom-0  flex items-center justify-center cursor-pointer opacity-50`}
  >
    {props.children}
  </div>
);

const Wrapper = (props) => (
  <div
    style={{
      transform: `translateX(${props.slideIndex * -100}VW)`,
      transition: "all 1.5s ease",
    }}
    className="h-full  flex bg-gray-200"
  >
    {props.children}
  </div>
);

const Slide = (props) => (
  <div
    className={"flex items-center w-screen h-screen flex-shrink-0 " + props.bg}
  >
    {props.children}
  </div>
);
const ImageContainer = (props) => (
  <div className="flex-1">{props.children}</div>
);
const InfoContainer = (props) => (
  <div className="flex-1 p-12 my-auto ">{props.children}</div>
);

const Title = (props) => <h1 className=" text-7xl">{props.children}</h1>;
const Description = (props) => (
  <p className=" my-12 text-xl font-medium">{props.children}</p>
);
const Button = (props) => (
  <button className=" bg-transparent cursor-pointer border-2 border-solid border-gray-400 p-2 rounded">
    {props.children}
  </button>
);

const Image = (props) => (
  <img src={props.src} className="h-4/5" alt={props.alt ?? ""} />
);
export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow
        direction="left"
        handleClick={() => {
          handleClick("left");
        }}
      >
        <ArrowLeftOutlinedIcon />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Show Now</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <Arrow
        direction="right"
        handleClick={() => {
          handleClick("right");
        }}
      >
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};
