import { useState } from 'react';

export function useSidebar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return { open, toggle };
}
