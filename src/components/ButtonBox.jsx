import React from 'react'

const ButtonBox = ( {text, onClick}) => {
  return (
    <button onClick={onClick} className="px-7 py-2 mt-5 bg-[#FFD700] font-poppins text-[#070707] border-2 font-semibold border-[#FFD700] rounded-xl cursor-pointer hover:bg-[#E5C100] hover:border-[#E5C100]">
            {text}
          </button>
  )
}

export default ButtonBox
