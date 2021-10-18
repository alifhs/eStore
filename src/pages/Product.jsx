import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = (props) => <div>{props.children}</div>;
const Wrapper = (props) => <div className="flex p-12">{props.children}</div>;
const ImgContainer = (props) => (
  <div className="flex-1 pr-12 pl-12 ">{props.children}</div>
);
const Image = (props) => (
  <img className="w-full h-90vh object-cover" src={props.src} alt="not avail" />
);
const InfoContainer = (props) => <div className="flex-1">{props.children}</div>;
const Title = (props) => (
  <h1 className=" font-extralight text-4xl ">{props.children}</h1>
);
const Desc = (props) => <p className="my-5">{props.children}</p>;
const Price = (props) => (
  <span className="font-thin text-4xl">{props.children}</span>
);
const FilterContainer = (props) => (
  <div className="flex w-1/2 justify-between my-7  ">{props.children}</div>
);
const Filter = (props) => (
  <div className="flex items-center">{props.children}</div>
);
const FilterTitle = (props) => (
  <span className="text-lg font-extralight">{props.children}</span>
);
const FilterColor = (props) => (
  <div
    className={`w-5 h-5 rounded-full bg-${props.color}-600 ml-2 cursor-pointer`}
  >
    {props.children}
  </div>
);
const FilterSize = (props) => (
  <select className="border-2 p-2 ">{props.children}</select>
);
const FilterSizeOption = (props) => <option>{props.children}</option>;

const AddContainer = (props) => <div className='w-1/2 flex justify-between'>{props.children}</div>;

const AmountContainer = (props) => <div className='flex items-center font-bold'>{props.children}</div>;

const Amount = (props) => <span className=' w-7 h-7 rounded-sm border-2 border-solid flex items-center justify-center'>{props.children}</span>;

const Button = (props) => <button className='bg-gray-200 border-2 border-green-400 p-4'>{props.children}</button>;
const RemoveIconContainer = (props) => <button>{props.children}</button>;
const AddIconContainer = (props) => <button>{props.children}</button>;

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Suit</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            saepe, id modi sed distinctio dolor nesciunt corporis molestias,
            ratione sunt qui veniam possimus rem tenetur dolorum libero suscipit
            ea in.{" "}
          </Desc>
          <Price> $20 </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

              <FilterColor color="red" />
              <FilterColor color="blue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveIconContainer>
                <RemoveIcon />
              </RemoveIconContainer>
              <Amount>1</Amount>
              <AddIconContainer>
                <AddIcon />
              </AddIconContainer>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
