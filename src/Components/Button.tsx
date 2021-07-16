import React from 'react'

export interface btn{
    children:string |React.FC
    theme:string
    type: 'submit' | 'reset' | 'button'
}
const  Button : React.FC<btn> = ({children, theme,type}) => {
    return (<button
          type={type}
          className={"py-2 px-4 rounded-lg shadow-lg " + theme}
        >
          {children}
        </button>
    );
}

export default React.memo(Button);
