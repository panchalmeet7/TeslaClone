import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>

        <Section
            title="Model S"
            discription="Order Online For Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            RightBtnText="Existing inventory"
        />
        <Section
            title="Model Y"
            discription="Order Online For Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            RightBtnText="Existing inventory"
        />
        <Section
            title="Model 3"
            discription="Order Online For Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            RightBtnText="Existing inventory"
        />
        <Section
            title="Model X"
            discription="Order Online For Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            RightBtnText="Existing inventory"    
        />
        <Section
            title="Solar Panels"
            discription="Lowest Cost Solar Panels in America"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            RightBtnText="Learn More"
        />
        <Section
            title="Solar Roof"
            discription="Produce Clean Energy From Your Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            RightBtnText="Learn More"
        />
        <Section
             title="Accessories"

             backgroundImg="accessories.jpg"
             leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container =styled.div`
    height:100vh;
`
    