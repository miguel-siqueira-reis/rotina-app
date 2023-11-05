import { useCallback, useState } from 'react';

export const useModal = (initialState: boolean = false, options?: object) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const toggle = useCallback(() => setIsOpen((prevState) => !prevState), []);

  return { isOpen, onClose, onOpen, toggle };
}