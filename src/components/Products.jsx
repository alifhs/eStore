import React from 'react'
import { popularProducts } from '../data/data'
import { Product } from './Product'


const Container = (props)=> (
    <div className="flex bg-white justify-between flex-wrap">
        {props.children}
    </div>
)

export const Products = () => {
    return (
        <Container>
            {
                popularProducts.map((item, index)=> {
                    return <Product item={item} key={item.id}/>
                })
            }
        </Container>
    )
}
