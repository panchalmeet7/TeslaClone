import React from 'react'
import styled from "styled-components"
// import Fade from 'react-reveal/Fade'

function Section({title,discription,leftBtnText,RightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
    
        
        <ItemText>
            <h1> {title}</h1>
            <p>{discription} </p>
        </ItemText>
       
        <Buttons>

        <ButtonGroup>
       
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            {RightBtnText  &&  
            <RightButton>
               {RightBtnText}
            </RightButton>

}
            
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const ItemText =styled.div`
padding-top:15vh;
text-align:center;

`
const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:30px;
@media (max-width:768px){
    flex-direction:column;
}

`
const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")` }
`
const LeftButton=styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.90;
    text-transform:uppercase;
    font-size:14px;
    cursor:pointer;
    margin:7px;

`
const RightButton=styled(LeftButton)`
    background:white;
    opacity:0.60;
    color:black;
`

const DownArrow=styled.img`
    height:40px;
    animation:animateDown infinite 1.5s;
    overflow-x:hidden;

`
const Buttons=styled.div`
`
