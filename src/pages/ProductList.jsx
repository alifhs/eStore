import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const Container = (props) => <div>{props.children}</div>;
const Wrapper = (props) => (
  <div className=" p-2 flex flex-col sm:p-12 sm:flex-row">{props.children}</div>
);
const ImgContainer = (props) => <div className="flex-1">{props.children}</div>;

const Image = (props) => (
  <div className="w-full h-80vh object-cover  ">{props.children}</div>
);

const Title = (props) => <h1 className="text-3xl m-5">{props.children}</h1>;

const FilterContainer = (props) => (
  <div className="flex justify-between">{props.children}</div>
);

const Filter = (props) => <div className="m-5">{props.children}</div>;

const FilterText = (props) => (
  <span className=" text-xl font-semibold">{props.children}</span>
);

const Select = (props) => <select className='ml-4'>{props.children}</select>;

const Option = (props) => <option selected={props.selected} disabled={props.disabled}>{props.children}</option>;

export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled={true} selected={true}>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled={true} selected={true}>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
           
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select >
            <Option selected={true}>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
            
           
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
