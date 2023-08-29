import * as style from "./styleButton"


const Button = ({children,onClick}) => {

  return(
    <style.DivButton>
      <style.Button onClick={ onClick }>{children}</style.Button>
    </style.DivButton>
  )
}

export default Button;