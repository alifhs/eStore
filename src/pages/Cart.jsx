import { Announcement } from "../components/Announcement";
import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = (props) => <div>{props.children}</div>;
const Wrapper = (props) => <div>{props.children}</div>;
const Top = (props) => (
  <div className="flex items-center justify-between p-5">{props.children}</div>
);
const TopButton = (props) => (
  <button
    className={` p-2 font-semibold cursor-pointer border-2 ${
      props.bg === "black" ? "bg-black " : "bg-transparent "
    } ${props.bg === "black" ? "text-white " : ""} `}
  >
    {props.children}
  </button>
);
// const TopTexts = (props) => <div>{props.children}</div>;

const TopTexts = (props) => <div className="">{props.children}</div>;

const TopText = (props) => (
  <span className=" underline cursor-pointer mx-2 ">{props.children}</span>
);
const Title = (props) => (
  <h1 className="font-light text-3xl text-center">{props.children}</h1>
);
const Bottom = (props) => (
  <div className="flex justify-between p-5">{props.children}</div>
);

const Info = (props) => <div className=" flex-3">{props.children}</div>;

const Product = (props) => (
  <div className=" flex justify-between">{props.children}</div>
);
const ProductDetail = (props) => (
  <div className="flex-2 flex ">{props.children}</div>
);
const Image = (props) => (
  <img src={props.src} className=" w-48 " alt="product img" />
);
const Details = (props) => (
  <div className="p-5 flex flex-col justify-around">{props.children}</div>
);
const ProductName = (props) => <span>{props.children}</span>;
const ProductId = (props) => <span>{props.children}</span>;
const ProductColor = (props) => (
  <div className={`w-5 h-5 rounded-full ${props.color}`}>{props.children}</div>
);
const ProductSize = (props) => <span>{props.children}</span>;
const PriceDetail = (props) => (
  <div className="flex-1 flex items-center justify-center flex-col">
    {props.children}
  </div>
);

const RemoveIconContainer = (props) => <button>{props.children}</button>;
const AddIconContainer = (props) => <button>{props.children}</button>;

const ProductAmountContainer = (props) => (
  <div className="flex items-center font-bold">{props.children}</div>
);

const ProductPrice = (props) => <div className="my-2">{props.children}</div>;

const Amount = (props) => (
  <span className=" w-7 h-7 rounded-sm border-2 border-solid flex items-center justify-center">
    {props.children}
  </span>
);
const Summary = (props) => (
  <div className=" flex-1 border-2 border-gray-300 rounded-lg p-5 h-screen/2 ">
    {props.children}
  </div>
);
const SummaryTitle = (props) => (<h1 className='text-3xl font-semibold'>{props.children}</h1>);
const SummaryItem = (props) => <div className={` my-7 flex justify-between ${props.type ==='total' ? ' font-semibold text-2xl ' : ''}`}>{props.children}</div>;
const SummaryItemText = (props) => <span>{props.children}</span>;
const SummaryItemPrice = (props) => <span>{props.children}</span>;

const Button = (props) => <button className='border-2 w-full p-2 bg-black rounded text-white font-semibold'>{props.children}</button>;

export const Cart = () => {
  return (
    <Container>
      <Navbar />

      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton bg="transparent">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>

          <TopButton bg="black">CHECKOUT NOW </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="bg-black" />
                  <ProductSize>
                    <b>Size: </b> 37
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIconContainer>
                    <RemoveIcon />
                  </RemoveIconContainer>
                  <Amount>1</Amount>
                  <AddIconContainer>
                    <AddIcon />
                  </AddIconContainer>
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>

            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="bg-gray-500" />
                  <ProductSize>
                    <b>Size: </b> 37
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIconContainer>
                    <RemoveIcon />
                  </RemoveIconContainer>
                  <Amount>1</Amount>
                  <AddIconContainer>
                    <AddIcon />
                  </AddIconContainer>
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> $ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice> $ 5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice> $ 80</SummaryItemPrice>
            </SummaryItem>
           

            <Button>CHECKOUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
