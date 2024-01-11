'use client'
import { useState, FormEvent } from 'react';
import { Tweet } from 'react-tweet';

interface TwitterCardProps {}

const TwitterCard: React.FC<TwitterCardProps> = () => {
    const [tweetList, setTweetList] = useState<string[]>([]);
    const [tweetLinkInput, setTweetLinkInput] = useState('');

    const extractTweetId = (tweetLink: string): string | null => {
        const tweetIdRegex = /\/status\/(\d+)/;
        const match = tweetLink.match(tweetIdRegex);
        return match ? match[1] : null;
    };

    const handleCreateTweet = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const tweetId = extractTweetId(tweetLinkInput);

        if (tweetId) {
            setTweetList((prevList) => [...prevList, tweetId]);
            setTweetLinkInput(''); // Clear the input field
        }
    };

    return (
        <div className='w-6/12 flex flex-col'>
            <form className='flex flex-col gap-1' onSubmit={handleCreateTweet}>
                <input
                    type="text"
                    placeholder='Your Place'
                    className='border-2 rounded-md p-2 bg-transparent outline-none'
                    value={tweetLinkInput}
                    onChange={(e) => setTweetLinkInput(e.target.value)}
                />
                <button type="submit" className='text-white p-2 px-4 rounded-md bg-black'>
                    Create
                </button>
            </form>
            {tweetList.map((tweetId) => (
                <Tweet key={tweetId} id={tweetId} />
            ))}
        </div>
    );
};

export default TwitterCard;
