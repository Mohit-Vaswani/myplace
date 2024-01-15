import React from 'react'

const name = ({ params }: { params: { name: string } }) => {
    return (
        <main className='p-5 flex flex-col justify-center items-center'>
            <h2> <span className='font-semibold'>{params.name}'s</span> Place</h2>
            
        </main>
    )
}

export default name