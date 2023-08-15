import * as style from "./styleButton"


const Button = ({children}) => {

  return(
    <style.DivButton>
      <style.Button >{children}</style.Button>
    </style.DivButton>
  )
}

export default Button;