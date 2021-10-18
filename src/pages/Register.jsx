import React from "react";

const Container = (props) => (
  <div
    className="w-screen h-screen flex items-center justify-center"
    style={{
      background:
        'linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255, 0.7)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
      
    }}
  >
    {props.children}
  </div>
);

const Wrapper = (props) => <div className='w-5/12 p-5 bg-white '>{props.children}</div>;
const Form = (props) => <form className='flex flex-wrap '>{props.children}</form>;
const Title = (props) => <h1>{props.children}</h1>;
const Agreement = (props) => <span className=' text-xs my-5'>{props.children}</span>;
const Button = (props) => <button className=' bg-gray-400 border-none py-4 px-5 w-2/5 text-white  '>{props.children}</button>;
const Input = (props) => <input className='border-2 mt-5 mr-2  flex-1 min-w p-2' placeholder={props.placeholder} />;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creatign an account , I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
