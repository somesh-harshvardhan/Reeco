import styled from "styled-components"
import Header from "./Header"
import PageDetails from "../page-details/PageDetails"


const LayoutContainer = styled.div`
 
`

const Layout = ({children,pageDetailsProps}) => {
  return (
    <LayoutContainer>
        <Header/>
        <PageDetails {...pageDetailsProps}/>
        {children}
    </LayoutContainer>
  )
}

export default Layout