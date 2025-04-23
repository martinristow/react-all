'use client'

export default function errorBoundary({error, reset} : {error: Error; reset: () => void}){
    return <div>{error.message} <button className='cursor-pointer bg-gray-700' onClick={reset}>Try again</button></div>
}