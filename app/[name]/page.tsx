import React from 'react'
import TwitterCard from '@/components/TwitterCard'

const name = ({ params }: { params: { name: string } }) => {
    return (
        <main className='p-5 flex flex-col justify-center items-center'>
            <h2> <span className='font-semibold'>{params.name}'s</span> Place</h2>
            <TwitterCard/>
        </main>
    )
}

export default name