import React from 'react';
import { type TSnackBarContainer } from './types';

export const SnackBarContainer = ({ children }: TSnackBarContainer): React.ReactElement => (
  <div className="fixed bottom-8 mx-auto right-0 left-0 px-6 md:px-20 lg:px-20 max-w-[1440px] flex flex-col justify-start items-center lg:items-start z-[90]">
    {children}
  </div>
);
