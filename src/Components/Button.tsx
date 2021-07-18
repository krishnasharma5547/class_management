import React from 'react'

export interface btn{
    children:string
    theme:string
    type: 'submit' | 'reset' | 'button'
    isSubmitting?:boolean
}
const  Button : React.FC<btn> = ({children, theme,type}) => {
    return (
      <button type={type} className={"py-2 px-4 rounded-lg shadow-lg w-20 " + theme}>
        {children}
      </button>
    );
}

export default React.memo(Button);
