// page.tsx
'use client'
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const createNewPage = (e: React.FormEvent) => {
    e.preventDefault();

    const placeName = e.currentTarget.querySelector('input')?.value;

    if (placeName) {
      router.push(`/${encodeURIComponent(placeName)}`);
    }
  };

  return (
    <main className='flex flex-col gap-5 justify-between items-center p-5'>
      <h2>My Place</h2>
      <form className='flex flex-col gap-5' onSubmit={createNewPage}>
        <input
          type="text"
          placeholder='Your Place'
          className='border-2 rounded-md p-2 bg-transparent outline-none'
        />
        <button type="submit" className='text-white p-2 px-4 rounded-md bg-black'>
          Create
        </button>
      </form>
    </main>
  );
};

export default Home;
