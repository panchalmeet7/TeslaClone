import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
const Header = () => {

    const [Status,setStatus]=useState(false);

  return (

      <Container>
          <a>
              <img src='/images/logo.svg' alt=""/>
          </a>
        <Menu>
            
                <a href='#'>Model s</a>
            
                 <a href='#'>Model y</a>
                 <a href='#'>Model 3</a> 
                 <a href='#'>Model x</a>
        </Menu>  
        <RightMenu>
                <a href="#">shop </a>
                <a href="#">Account</a>
        <CustomMenu onClick={()=>setStatus(true)} />
        </RightMenu>
        <RightNav show={Status}>
            <CloseWrap>   
                <CloseIcon onClick={()=>setStatus(false)}/>
            </CloseWrap>
                <li> <a href='#'>Existing inventory</a> </li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a> </li>
                <li><a href='#'>Cyburtruck</a></li>
                <li><a href='#'>Model S</a></li>
                <li><a href='#'>Model y</a></li>
                <li><a href='#'>Model 3</a> </li>
                <li><a href='#'>Model x</a></li>
        </RightNav>
      </Container>

  )
}

export default Header

const Container = styled.div`
    min-height: 50px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex:1;
    justify-content:center;

    a{
       font-weight:400;
       text-transform:uppercase;
       padding: 0 10px;
       flex-wrap:nowrap;
    }

    @media(max-width:768px) {
        display:none;
        
    }
`
const RightMenu= styled.div`
    display:flex;
    align-items:center;
a{
    font-weight:400;
    text-transform:uppercase;
    margin-right:10px;
} 
`

const CustomMenu=styled(MenuIcon)`

    cursor:pointer;
    
`

const RightNav=styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background:white;
    width:300px;
    z-index:100000;
    text-align:start;
    padding:20px;
    list-style:none;
    display:flex;
    flex-direction:column;
    // if its true show and translate(0)
    // if its false hide it translate(100%)
    transform : ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding:15px 0;
        border-bottom:1px solid grey;

        a{
            font-weight:700;
        }
    }

`
const CloseIcon=styled(ClearIcon)`
    cursor:pointer;
`

const CloseWrap=styled.div`
        display:flex;
        justify-content:flex-end;
`
