import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import RoomIcon from "@mui/icons-material/Room";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React from "react";
import './footer.css'

const Container = (props) => <div className="flex mobile-footer-container">{props.children}</div>;

const Left = (props) => (
  <div className="flex-1 flex flex-col p-6">{props.children}</div>
);
const Right = (props) => <div className="flex-1 p-6">{props.children}</div>;

const Center = (props) => <div className="flex-1 p-6">{props.children}</div>;
const Description = (props) => <p className=" mt-5 mb-5">{props.children}</p>;
const SocialContainer = (props) => (
  <div className=" flex ">{props.children}</div>
);
const SocialIcon = (props) => (
  <div className=" w-10 h-10 mr-4 rounded-full flex items-center justify-center cursor-pointer text-white bg-blue-400">
    {props.children}
  </div>
);
const Logo = (props) => (
  <h1 className=" text-3xl font-bold">{props.children}</h1>
);

const Title = (props) => (
  <h3 className="mb-7 text-2xl font-semibold ">{props.children}</h3>
);

const List = (props) => <ul className=" flex flex-wrap">{props.children}</ul>;
const ListItem = (props) => <li className=" w-1/2">{props.children}</li>;

const ContactItem = (props) => (
  <div className="mb-5 flex items-center">{props.children}</div>
);

const Payment = (props) => <img className='w-1/2' src={props.src} />;

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

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <RoomIcon style={{ marginRight: '10px' }} />  Dhanmondi, Dhaka, Bangladesh
        </ContactItem>
        <ContactItem>
          <PhoneInTalkIcon  style={{ marginRight: '10px' }}/> +88016734353535
        </ContactItem>
        <ContactItem>
          <AlternateEmailIcon  style={{ marginRight: '10px' }}/>  test@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};
