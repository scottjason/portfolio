'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';
import { mailtoLink, githubUrl, linkedInUrl } from '../constants/index';

export const NavbarMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (targetPath: string): boolean => pathname === targetPath;

  return (
    <>
      <div
        role='button'
        tabIndex={0}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#050915',
          zIndex: 20,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={() => setIsOpen(false)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setIsOpen(false);
          }
        }}
      />
      <nav className='fixed inset-x-0 inset-y-0 z-30 h-[100px] border-b border-gray-800 bg-gray-950 shadow-2xl'>
        <div className='flex w-full items-center justify-between px-6 py-8'>
          <section>
            <Link
              href={'/'}
              className={`text-2xl font-light uppercase tracking-widest text-slate-50`}
              onClick={() => setIsOpen(false)}
            >
              <p className='bg-gradient-to-l from-slate-100 to-cyan-200 bg-clip-text text-2xl text-transparent sm:max-w-xs sm:text-3xl'>
                Scott Jason
              </p>
            </Link>
          </section>
          <section className='flex cursor-pointer text-2xl text-slate-50'>
            <RxHamburgerMenu
              aria-label='Menu'
              onClick={() => setIsOpen(!isOpen)}
            />
          </section>
        </div>
        <div
          className={`overflow-hidden bg-gray-950 transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[1000px] shadow-md' : 'max-h-0'
          }`}
        >
          <div className='flex w-full flex-col items-center justify-center space-y-4 p-8'>
            <Link
              href={'/about'}
              className={`w-full cursor-pointer border-b-[1px] border-gray-300 border-opacity-50 pb-4 text-center text-2xl font-light uppercase tracking-widest transition-all hover:text-cyan-500 ${
                isActive('/about') ? 'text-cyan-400' : 'text-slate-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href={'/experience'}
              className={`w-full cursor-pointer border-b-[1px] border-gray-300 border-opacity-50 pb-4 text-center text-2xl font-light uppercase tracking-widest transition-all hover:text-cyan-500 ${
                isActive('/experience') ? 'text-cyan-400' : 'text-slate-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              EXPERIENCE
            </Link>
            <Link
              href={'/projects'}
              className={`w-full cursor-pointer border-b-[1px] border-gray-300 border-opacity-50 pb-4 text-center text-2xl font-light uppercase tracking-widest transition-all hover:text-cyan-500 ${
                isActive('/projects') ? 'text-cyan-400' : 'text-slate-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </Link>
            <h2 className='w-full cursor-pointer border-b-[1px] border-gray-300 border-opacity-50 pb-4 text-center text-2xl font-light uppercase tracking-widest text-slate-50 hover:text-cyan-500'>
              RESUME
            </h2>
            <Link
              href={mailtoLink}
              className='w w-full cursor-pointer border-b-[1px] border-gray-300 border-opacity-50 pb-4 text-center text-2xl font-light uppercase tracking-widest text-slate-50 transition-all hover:text-cyan-500'
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
            <AiFillGithub
              aria-label='Github'
              onClick={() => {
                window.open(githubUrl, '_blank');
                setIsOpen(false);
              }}
              className='cursor-pointer text-3xl hover:text-cyan-500'
            />
            <CiLinkedin
              aria-label='LinkedIn'
              onClick={() => {
                window.open(linkedInUrl, '_blank');
                setIsOpen(false);
              }}
              className='cursor-pointer text-3xl hover:text-cyan-500'
            />
            <Link
              href={mailtoLink}
              className='text-3xl hover:text-cyan-500'
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineMail
                onClick={() => setIsOpen(false)}
                className='text-3xl hover:text-cyan-500'
                aria-label='Email'
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
