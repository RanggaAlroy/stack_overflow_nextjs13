'use client';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../ui/button';

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="background-light900_dark200 custom-scrollbar sticky left-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex h-full flex-col gap-6">
        {sidebarLinks.map(item => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <div key={item.route}>
              <Link
                href={item.route}
                className={`${
                  isActive
                    ? 'primary-gradient rounded-lg text-light-900'
                    : 'text-dark300_light900'
                } flex items-center justify-start gap-4 bg-transparent p-4 max-lg:gap-0`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`${isActive ? '' : 'invert-colors'}`}
                />
                <p
                  className={`${
                    isActive ? 'base-bold' : 'base-medium'
                  } max-lg:hidden`}
                >
                  {item.label}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium light-border-2 btn-secondary min-h-[41] w-full rounded-lg px-4 py-3">
              <Image
                src="/assets/icons/account.svg"
                alt="sign in"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41] w-full rounded-lg px-4 py-3">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
