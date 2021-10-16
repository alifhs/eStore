import React from 'react'


const Container = (props) => (
        <div className="flex-1 m-1 relative" >
            {props.children}
        </div>
)
const Info = (props) => (
        <div className="absolute  top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            {props.children}
        </div>
)
const Title = (props) => (
        <h1 className="text-4xl text-white font-bold">
            {props.children}
        </h1>
)

const Button = (props) => (
    <button className='bg-transparent cursor-pointer border-2 border-solid border-gray-400 p-2 rounded'>
        {props.children}
    </button>
)

const Image = (props) => (
    <img  className="w-full object-cover" src={props.src} style={{ height: '70vh' }} alt ="img" />
)

// const Info = (props)


export const CategoryItem = ({item}) => {
    return (
        <Container>
           <Image src={item.img} />
           <Info>
               <Title>{item.title}</Title>
               <Button>SHOP NOW</Button>
           </Info>
        </Container>
    )
}
