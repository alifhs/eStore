import {  Facebook, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'


const Container = (props)=> (
    <div className='flex'>
        {props.children}
    </div>
)

const Left = (props)=> (
    <div className='flex-1'>
        {props.children}
    </div>
)
const Right = (props)=>(
    <div className='flex-1 '>
        {props.children}
    </div>
)

const Center = (props)=>(
    <div className='flex-1'>
        {props.children}
    </div>
)
const Description = (props)=>(
    <div className='flex-1'>
        {props.children}
    </div>
)
const SocialContainer = (props)=>(
    <div className='flex-1'>
        {props.children}
    </div>
)
const SocialIcon = (props)=>(
    <div className='flex-1'>
        {props.children}
    </div>
)
const Logo = (props)=>(
    <div className='flex-1'>
        {props.children}
    </div>
)



export const Footer = () => {
    return (
        <Container>
            <Left >
                <Logo>eStore</Logo>
                <Description >

                </Description>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                        <Twitter />
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>

            </Center>

            <Right>

            </Right>
        </Container>
    )
}
