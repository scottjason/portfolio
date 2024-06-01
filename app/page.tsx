export default function Home() {
  return (
    <main className='relative z-20 flex h-screen w-full flex-col'>
      <div className='mx-auto mt-44 flex h-auto w-full flex-col items-center px-8 sm:mt-60 sm:max-w-3xl'>
        <h1 className='text-center text-4xl font-light text-slate-50 transition-all sm:text-5xl md:text-5xl'>
          <span className='block'>hello,</span>
          <span className='block'>my name is scott jason</span>
        </h1>
        <div className='my-6 h-[1px] animate-slide-in bg-white opacity-20'></div>
        <h2 className='min-w-sm min-w-2/3 max-w-sm bg-gradient-to-r from-slate-50 to-cyan-200 bg-clip-text text-center text-xl font-light text-transparent transition-all duration-300 ease-in-out sm:text-2xl'>
          an experienced and product-oriented senior software engineer
        </h2>
        <button className='z-20 mt-6 transform cursor-pointer rounded border border-gray-500 bg-slate-100 px-10 py-4 font-normal uppercase shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 focus:scale-105 focus:bg-gray-200 focus:outline-none'>
          download resume
        </button>
      </div>
    </main>
  );
}
