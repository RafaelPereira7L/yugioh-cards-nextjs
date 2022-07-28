import type { NextPage } from 'next';
import React from 'react';

const Footer: NextPage = () => {
  return (
    <nav className="w-full fixed bottom-0">
      <div className="bg-zinc-800 p-4">
        <div className="flex flex-row justify-center text-white w-sm font-medium ">
          <h1>
            Made with 💜 by{' '}
            <a
              target="_blank"
              href="https://rafael-dev.tech"
              className="hover:text-red-500 ease-in-out duration-150"
              rel="noreferrer"
            >
              rafaeldev
            </a>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
