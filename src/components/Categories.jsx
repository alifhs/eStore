import React from 'react'
import { categories } from '../data/data'
import { CategoryItem } from './CategoryItem'

const Container = (props) => (
    <div className="flex p-5 justify-between">
        {props.children}
    </div>
)



export const Categories = () => {
    return (
        <Container>
           
           {categories.map((item, index) => {
               return  <CategoryItem item={item} />
           
           })}
         

        </Container>
    )
}
