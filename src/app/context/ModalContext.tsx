import React, { createContext, ReactNode, useState } from 'react';

const initialState: ModalContextState = {
  loginModalIsOpen: false,
  setLoginModalIsOpen: () => {},
  signupModalIsOpen: false,
  setSignupModalIsOpen: () => {},
};

export const ModalContext = createContext(initialState);

export interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState<boolean>(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{ loginModalIsOpen, setLoginModalIsOpen, signupModalIsOpen, setSignupModalIsOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

interface ModalContextState {
  loginModalIsOpen: boolean;
  setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  signupModalIsOpen: boolean;
  setSignupModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
