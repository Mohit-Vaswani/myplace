'use client';
import { useState, FormEvent } from 'react';
import { Tweet } from 'react-tweet';
import YouTube from 'react-youtube';

interface YouTubeCardProps {
  videoId: string;
}

const YouTubeCard: React.FC<YouTubeCardProps> = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

interface TwitterCardProps {}

const YoutubeCard: React.FC<TwitterCardProps> = () => {
  const [contentList, setContentList] = useState<{ type: string; id: string }[]>([]);
  const [contentLinkInput, setContentLinkInput] = useState('');

  const extractContentInfo = (contentLink: string): { type: string; id: string } | null => {
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = contentLink.match(youtubeRegex);
    return match ? { type: 'youtube', id: match[1] } : null;
  };

  const handleCreateContent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const contentInfo = extractContentInfo(contentLinkInput);

    if (contentInfo) {
      setContentList((prevList) => [...prevList, contentInfo]);
      setContentLinkInput(''); // Clear the input field
    }
  };

  return (
    <div className='w-6/12 flex flex-col'>
      <form className='flex flex-col gap-1' onSubmit={handleCreateContent}>
        <input
          type="text"
          placeholder='Your Place'
          className='border-2 rounded-md p-2 bg-transparent outline-none'
          value={contentLinkInput}
          onChange={(e) => setContentLinkInput(e.target.value)}
        />
        <button type="submit" className='text-white p-2 px-4 rounded-md bg-black'>
          Create
        </button>
      </form>
      {contentList.map((content) => (
        <div key={content.id}>
          {content.type === 'youtube' ? (
            <YouTubeCard videoId={content.id} />
          ) : (
            <Tweet id={content.id} />
          )}
        </div>
      ))}
    </div>
  );
};

export default YoutubeCard;
