'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { TSnackBar } from './types';
import { snackbarStyles } from './snackbarStyles';


const SnackBar = ({ id, type, title, subtitle, action }: TSnackBar): React.ReactElement => {
  const { border, icon } = snackbarStyles[type ?? 'info'];

  return (
    <div className={clsx('snackbar pb-2', `snackbar-${id}`)}>
      <div
        className={clsx(
          ' bg-custom-gray-main dark:bg-mainDark border border-slate-300 dark:border-slate-600 p-4 shadow-drop-2 transition-opacity flex z-30  justify-center items-center rounded-lg',
        )}
        role="alert"
      >
        {icon}
        <div className='ml-2'>
          <p className="text-base text-black dark:text-white font-raleway font-medium leading-6 m-0">{title}</p>
          {subtitle && <span className="text-sm font-medium leading-6 dark:text-white">{subtitle}</span>}
        </div>
      </div>
    </div>
  );
};

interface SnackbarResult {
  snackbarList: JSX.Element[]
  showSnackbar: (options: Omit<TSnackBar, 'id'>, duration?: number | null) => void
}

const useSnackbar = (): SnackbarResult => {
  const [snackbarList, setSnackbarList] = useState<TSnackBar[]>([]);

  useEffect(() => {
    snackbarList.forEach((snackbar) => {
      if (snackbar.duration !== null && snackbar.duration !== 0) {
        const id = snackbar.id;
        const timer = setTimeout(() => {
          closeSnackbar(id);
        }, snackbar.duration);
        return () => {
          clearTimeout(timer);
        };
      }
    });
  }, [snackbarList]);

  const showSnackbar = (options: Omit<TSnackBar, 'id'>, duration: number | null = 4000): void => {
    const id = Date.now().toString();
    const newSnackbar = { ...options, id, duration };
    setSnackbarList((prevList) => [...prevList, newSnackbar]);
  };

  const closeSnackbar = (id: string): void => {
    setSnackbarList((prevList) => prevList.filter((snackbar) => snackbar.id !== id));
  };

  return {
    snackbarList: snackbarList.map((snackbar) => (
      <SnackBar
        key={snackbar.id}
        id={snackbar.id}
        type={snackbar.type}
        title={snackbar.title}
        subtitle={snackbar.subtitle}
        action={snackbar.action}
      />
    )),
    showSnackbar,
  };
};

export { SnackBar, useSnackbar };
