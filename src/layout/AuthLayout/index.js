import React from 'react'
import HeaderSub from "~/layout/components/HeaderSub";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <HeaderSub />
            <div className='auth__layout_content'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
