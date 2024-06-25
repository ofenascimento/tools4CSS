import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import Switch from "react-switch";


function CustomSwitch(props: any) {
    const { theme } = useTheme();

    return (
        <>
            <Switch
                {...props}
                onColor={theme === 'dark' ? '#1C2939' : '#fff'}                
                onHandleColor="#36BA98"
                className="mt-0 border-2 border-slate-300 shadow-sm"           
                uncheckedIcon={false}
                handleDiameter={10}
                checkedIcon={false}
                offColor={theme === 'dark' ? '#1C2939' : '#fff'}
                offHandleColor="#2563EB"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                id="material-switch"
            /></>
    )
}

export default CustomSwitch