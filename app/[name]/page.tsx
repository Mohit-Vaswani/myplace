import React from 'react'
import TwitterCard from '@/components/TwitterCard'
import YoutubeCard from '@/components/YoutubeCard'

const name = ({ params }: { params: { name: string } }) => {
    return (
        <main className='p-5 flex flex-col justify-center items-center'>
            <h2> <span className='font-semibold'>{params.name}'s</span> Place</h2>
            <div className='flex gap-8 items-center w-full mt-5'>
            <TwitterCard/>
            <YoutubeCard/>
            </div>
        </main>
    )
}

export default name