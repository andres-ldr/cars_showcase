'use client';

import { CustomButtomProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const CustomButton = ({
  containerStyles,
  handleClick,
  isDisabled,
  textStyles,
  rightIcon,
  btnType,
  title,
}: CustomButtomProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      disabled={false}
      type={btnType || 'button'}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
