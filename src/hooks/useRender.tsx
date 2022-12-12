import { useContext } from 'react';
import { RenderContext } from '../context/RenderContext';

export function useRender() {
  const ctx = useContext(RenderContext);
  return ctx;
}
