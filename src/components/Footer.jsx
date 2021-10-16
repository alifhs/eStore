import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";

const Container = (props) => <div className="flex">{props.children}</div>;

const Left = (props) => (
  <div className="flex-1 flex flex-col p-20">{props.children}</div>
);
const Right = (props) => <div className="flex-1 ">{props.children}</div>;

const Center = (props) => <div className="flex-1">{props.children}</div>;
const Description = (props) => (
  <p className=" mt-5 mb-5">{props.children}</p>
);
const SocialContainer = (props) => (
  <div className=" flex ">{props.children}</div>
);
const SocialIcon = (props) => (
  <div className=" w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-white bg-blue-400">
    {props.children}
  </div>
);
const Logo = (props) => <h1 className=" text-3xl font-bold">{props.children}</h1>;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>eStore</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          voluptates, voluptatum dolore repudiandae magnam autem, dolores alias
          numquam neque nam consequuntur ea ducimus consectetur est in,
          voluptatem pariatur ullam eius?
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>

          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center></Center>

      <Right></Right>
    </Container>
  );
};
