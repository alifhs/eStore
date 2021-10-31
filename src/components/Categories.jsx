import React from 'react'
import { categories } from '../data/data'
import { CategoryItem } from './CategoryItem'
import './categories.css'

const Container = (props) => (
    <div className="flex p-5 justify-between flex-wrap mobile-container">
        {props.children}
    </div>
)



export const Categories = () => {
    return (
        <Container>
           
           {categories.map((item, index) => {
               return  <CategoryItem key={index} item={item} />
           
           })}
         

        </Container>
    )
}
