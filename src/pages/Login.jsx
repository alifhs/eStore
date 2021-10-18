import React from 'react'

const Container = (props) => (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        background:
          'linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255, 0.7)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        
      }}
    >
      {props.children}
    </div>
  );
  
  const Wrapper = (props) => <div className='w-5/12 p-5 bg-white '>{props.children}</div>;
  const Form = (props) => <form className=' '>{props.children}</form>;
  const Title = (props) => <h1>{props.children}</h1>;
  // const Agreement = (props) => <span className=' text-xs my-5'>{props.children}</span>;
  const Button = (props) => <button className=' bg-gray-400 border-none py-2 px-2 w-1/5 text-white block my-2 '>{props.children}</button>;
  const Input = (props) => <input className='border-2 mt-5 mr-2  flex-1 min-w p-2' placeholder={props.placeholder} />;
  const Link = (props)=> <a className='block text-sm my-2 underline' href='/'>{props.children}</a>

export const Login = () => {
    return (
      <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
         
          <Input placeholder="username" />
        
          <Input placeholder="password" />
          
    
          <Button>LOGIN</Button>
          <Link>CAN'T REMEMBER THE PASSWORD? </Link>
         <Link>CREATE A NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
    )
}
