import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './actions'

const Counter = () => {

    const dispatch = useDispatch()
    const myState = useSelector( (state) => state.changeTheNumber )

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center' >
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-gray-700' >Increment/Decrement Counter</h1>
            <h1 className='text-2xl font-bold text-gray-600' >Using Rect and Redux</h1>
            <div className='flex gap-2 '>
                <button onClick={()=> dispatch(decNumber(3))} className='text-gray-800 rounded-lg border-2 border-gray-700 font-medium text-xl px-4 py-1 hover:bg-gray-500 hover:text-white'>-</button>
                <input type="text" value={myState} name="" className='border-2 w-14 text-center border-gray-700 rounded-sm px-2' id="" />
                <button onClick={()=> dispatch(incNumber(2))} className='text-gray-800 rounded-lg border-2 border-gray-700 font-medium text-xl px-4 py-1 hover:bg-gray-500 hover:text-white'>+</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Counter
