'use client';
import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string; // '?' stand for 'optional'
}

const LocalSearch = ({
  route,
  imgSrc,
  iconPosition,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] flex-1 grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt="search_icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onClick={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient w-full border-none shadow-none outline-none"
      />

      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt="search_icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
