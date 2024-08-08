import React from 'react'

const InputField = ({placeholder, type}) => {
    return (
        <div>
            <input className='bg-[#333333] text-[#E0E0E0] py-2 px-3 rounded-lg w-[400px] hover:bg-[#3d3d3d] cursor-pointer my-4' placeholder={placeholder} type={type} name="" id="" />
        </div>
    )
}

export default InputField
