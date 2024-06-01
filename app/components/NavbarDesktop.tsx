'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';
import { mailtoLink, githubUrl, linkedInUrl } from '../constants/index';

export const NavbarDesktop = (): JSX.Element => {
  const pathname = usePathname();
  const isActive = (targetPath: string): boolean => pathname === targetPath;
  return (
    <nav className='fixed inset-x-0 inset-y-0 z-30 h-[100px] border-b border-gray-800 bg-gray-950 shadow-2xl'>
      <div className='flex w-screen items-center justify-between p-8'>
        <section>
          <Link
            href={'/'}
            className={`hover:gradient-text hidden text-2xl font-light uppercase tracking-widest text-slate-50 text-slate-50 hover:text-cyan-400 hover:transition-all sm:block`}
          >
            <p className='bg-gradient-to-l from-slate-100 to-cyan-100 bg-clip-text text-xl text-transparent sm:max-w-xs sm:text-3xl'>
              Scott Jason
            </p>
          </Link>
        </section>
        <section className='mt-1 flex'>
          <Link
            href={'/about'}
            className={`ml-4 hidden cursor-pointer text-lg font-light uppercase tracking-widest hover:text-cyan-400 hover:transition-all sm:block ${
              isActive('/about') ? 'text-cyan-300' : 'text-slate-50'
            } hover:gradient-text`}
          >
            ABOUT
          </Link>
          <Link
            href={'/experience'}
            className={`duration-2000 ml-4 hidden cursor-pointer text-lg font-light uppercase tracking-widest transition ease-in hover:text-cyan-400 sm:block ${
              isActive('/experience') ? 'text-cyan-300' : 'text-slate-50'
            } hover:gradient-text`}
          >
            EXPERIENCE
          </Link>
          <Link
            href={'/projects'}
            className={`duration-2000 ml-4 hidden cursor-pointer text-lg font-light uppercase tracking-widest transition ease-in hover:text-cyan-400 sm:block ${
              isActive('/projects') ? 'text-cyan-300' : 'text-slate-50'
            } hover:gradient-text`}
          >
            PROJECTS
          </Link>
          <h2 className='duration-2000 hover:gradient-text ml-4 hidden cursor-pointer text-lg font-light uppercase tracking-widest text-slate-50 transition ease-in hover:text-cyan-400 sm:block'>
            RESUME
          </h2>
          <Link
            href={mailtoLink}
            className='duration-2000 hover:gradient-text ml-4 hidden cursor-pointer text-lg font-light uppercase tracking-widest text-slate-50 transition ease-in hover:text-cyan-400 sm:block'
          >
            CONTACT
          </Link>
        </section>
        <section className='flex text-2xl text-slate-50'>
          <RxHamburgerMenu className='hover:gradient-text block sm:hidden' />
          <AiFillGithub
            onClick={() => window.open(githubUrl, '_blank')}
            className='duration-2000 hover:gradient-text ml-5 hidden cursor-pointer transition ease-in hover:text-cyan-400 sm:block'
          />
          <CiLinkedin
            onClick={() => window.open(linkedInUrl, '_blank')}
            className='duration-2000 hover:gradient-text ml-5 hidden cursor-pointer transition ease-in hover:text-cyan-400 sm:block'
          />
          <Link
            href={mailtoLink}
            className='duration-2000 hover:gradient-text transition ease-in hover:text-cyan-400'
          >
            <AiOutlineMail className='mx-5 hidden cursor-pointer sm:block' />
          </Link>
        </section>
      </div>
    </nav>
  );
};
