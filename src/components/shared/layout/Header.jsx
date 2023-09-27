import styled from "styled-components"
import {BsCart2} from 'react-icons/bs';
import {MdKeyboardArrowDown} from 'react-icons/md'
import { useSelector } from "react-redux";
const NavContainer = styled.nav`
display: flex;
align-items: center;
background-color: var(--primary-green);
padding: 14px 80px;
column-gap: 80px;
color: white;
.logo{
    color: #FFF;
    font-size: 24px;
}
`
const ItemsContainer = styled.div`
flex : 1;
display: flex;
align-items: center;
justify-content: space-between;
.linksWrapper{
    flex: 5;
    display: flex;
    list-style: none;
    align-items: center;
    column-gap: 80px;
    >li{
        cursor: pointer;
    }
}
.cart{
  flex :1;
  position: relative;
  margin-right: -100px;
  &-score{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -7px;
    left: -7px;
    height: 14px;
    width: 14px;
    font-size: 8px;
    border-radius: 50%;
    background-color: lightgreen;
    z-index: 1;
  
  }
  &-icon{
    transform: rotateY(180deg);
    font-size: 20px;
    cursor: pointer;
}
}
.user{
    flex : 1;
    display: flex;
    align-items: center;
    cursor: pointer;
}

`
const LOGO = ()=><h1 className="logo">Reeco</h1>

const Header = () => {
  const links = ["Store","Orders","Analytics"];
  const data = useSelector(state=>state.items)
  return (
    <NavContainer>
      <LOGO/>
      <ItemsContainer>
        <div className="linksWrapper">
            {links.map(item=><li key={item}>{item}</li>)}
        </div>
        <div className="cart">
          <BsCart2 className="cart-icon"/>
          <div className="cart-score">{data.length}</div>
        </div>
        <div className="user">
            Hello, James <MdKeyboardArrowDown fontSize={20}/>
        </div>
      </ItemsContainer>
    </NavContainer>
  )
}
export default Header
