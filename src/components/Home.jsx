import React from 'react'
import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Lowest Solar Panel in America"
        description="Money back guaranty"
        backgroundImage="solar-panel.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="more details"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panel"
        backgroundImage="solar-roof.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="more details"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnTxt="shop Now"
        rightBtnTxt=""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height : 100vh;
`