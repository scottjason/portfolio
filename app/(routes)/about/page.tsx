import Link from 'next/link';

export default async function About() {
  return (
    <main className='flex h-screen min-h-full flex-col p-8'>
      <div className='pb-12'>
        <div className='mt-32'>
          <h2 className='max-w-sm text-[2rem] font-light text-cyan-200 xs:text-4xl'>
            a few words about me
          </h2>
        </div>
        <div className='my-4 mb-0 max-w-md border-x-0 border-b border-stone-800' />
        <p className='mt-4 max-w-3xl bg-gradient-to-r from-slate-100 to-cyan-300 bg-clip-text text-xl font-light tracking-widest text-transparent'>
          I have somewhat of an unusual background; a very creative background
          rooted in music and software.
        </p>
        <p className='text-md mb-6 mt-6 max-w-6xl font-light tracking-widest text-slate-50'>
          I built and deployed my first website in 1999. I had started a{' '}
          <Link
            href='https://en.wikipedia.org/wiki/Thriving_Ivory'
            target='_blank'
            className='cursor-pointer text-cyan-400 hover:text-cyan-300'
          >
            band
          </Link>{' '}
          in college and needed to develop an online presence.
        </p>
        <p className='text-md mb-6 max-w-6xl font-light tracking-widest text-slate-50'>
          I&apos;ve always been a tinkerer at heart but it wasn&apos;t until
          midway through my sophomore year of college where I found myself
          actually needing a more robust solution— the first single started
          taking off at radio all over the world.
        </p>
        <div className='my-4 max-w-4xl border-x-0 border-b border-stone-800' />
        <p className='text-md mb-6 max-w-6xl font-light tracking-widest text-slate-50'>
          Moving forward, I taught myself the fundamentals of basic web
          development while simultaneously working as a professional musician. I
          used an old PHP framework to build a fan community and collected and
          stored the fan data in a MSQL database. Years later, the band was
          signed and I handed the technical aspect off to the &quot;new
          media&quot; department of the label. The first single went RIAA
          Certifed Gold and won Apple&apos;s vote for one of the{' '}
          <Link
            href='https://www.youtube.com/watch?v=S38-mjy5NtA'
            target='_blank'
            className='cursor-pointer text-cyan-400 hover:text-cyan-300'
          >
            top 10 most influential songs of the 21st century&apos;s first
            decade.
          </Link>{' '}
        </p>
        <div className='my-4 mb-0 max-w-4xl border-x-0 border-b border-transparent' />
        <p className='text-md mb-6 max-w-6xl font-light tracking-widest text-slate-50'>
          I was continuously updating and revamping the site, mostly focusing on
          frontend as the backend didn&apos;t change much once it was set up.
        </p>
        <div className='my-2 max-w-4xl border-x-0 border-b border-transparent' />
        <p className='text-md mb-6 max-w-6xl font-light tracking-widest text-slate-50'>
          A few years later I left the music industry and continued my other
          passion for software. I moved to San Francisco, attended a bootcamp
          and eventually got my first job as a Software Engineer.
        </p>
        <div className='my-4 max-w-4xl border-x-0 border-b border-stone-800' />
        <p className='text-md mb-6 max-w-6xl font-light tracking-widest text-slate-50'>
          Fast-forward to 2023 and I have eight plus years of professional
          experience. I have worked on everything from intelligent mirrors to
          grocery delivery apps to enterprise ecommerce.
        </p>
        <div className='my-4 max-w-4xl border-x-0 border-b border-stone-800' />
        <p className='text-md mb-6 max-w-6xl font-light tracking-widest text-slate-50'>
          As for music, I still release the occasional song and perform one or
          two shows a year for{' '}
          <Link
            href='https://angelsonthemoon.org/'
            target='_blank'
            className='cursor-pointer text-cyan-400 hover:text-cyan-300'
          >
            charitable
          </Link>{' '}
          causes.
        </p>
      </div>
    </main>
  );
}
