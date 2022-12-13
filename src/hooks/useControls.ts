import { useContext } from 'react';
import { ControlsContext } from '../context/ControlsContext';

export function useControls() {
  const ctx = useContext(ControlsContext);
  return ctx;
}
