import { Fragment } from "react"
import GlobalStylesContainer from "./globalstyle"


const GlobalStyles = ({children}) => {
  return (
    <Fragment>
        <GlobalStylesContainer/>
        {children}
    </Fragment>
  )
}

export default GlobalStyles