import React from 'react'

const Container = (props) => (
    <div className=" text-white h-8 bg-green-400 text-center font-semibold"> 
        { props.children}
    </div>
)

export const Announcement = () => {
    return (
      <Container>
          Great Offer ! 10% discount till december 31
      </Container>
    )
}
