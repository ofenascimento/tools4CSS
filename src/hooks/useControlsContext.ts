import { useContext } from 'react';
import { ControlsContext } from '../context/ControlsContext';

export function useControlsContext() {
  const ctx = useContext(ControlsContext);
  return ctx;
}
