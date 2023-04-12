// import React from 'react'


 export interface ButtonProps {
    children : any
    className : string
    onClick : () => void
 }

const Button : React.FC<ButtonProps>= ({children, onClick, className}) => {
  return (
    <button>{children}</button>
  )
}

export default Button