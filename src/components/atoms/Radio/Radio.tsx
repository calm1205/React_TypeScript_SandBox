import React from 'react';
import { RadioStyle } from './RadioStyle';

export type RadioProps = {
  isActive: boolean;
};

export const Radio: React.FC<RadioProps> = ({ isActive }) => {
  return (
    <RadioStyle>
      <div className={isActive ? 'active' : ''}></div>
    </RadioStyle>
  );
};
