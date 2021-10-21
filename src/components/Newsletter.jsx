// import { Description } from '@material-ui/icons'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'


const Container = (props)=> (
    <div className=' bg-white flex items-center flex-col justify-center' style={{ height: '70vh' }}>
        {props.children}
    </div>
)

const Title = (props) => (
    <h1 className='text-4xl font-semibold mb-5'>
        {props.children}
    </h1>
)

const Description = (props) => (
    <div className='text-2xl text-center font-light mb-5'>
            {props.children}
    </div>
)

const InputContainer = (props)=>(
    <div className='w-1/2 h-12 border-solid border border-gray-300 flex  mb-5 '>
        {props.children}
    </div>
)

const Input = (props)=>(
    <input className='border-none w-4/5  pl-2' placeholder={props.placeholder}/>
)

const Button = (props)=>(
    <button className=' border-none w-1/5 bg-green-400 text-white'>
        {props.children}
    </button>
)

export const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder='Your email' />
                <Button>
                     <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}
