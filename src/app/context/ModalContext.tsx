import React, { createContext, ReactNode, useState } from 'react';

const initialState: ModalContextState = {
  loginModalIsOpen: false,
  setLoginModalIsOpen: () => {},
  signupModalIsOpen: false,
  setSignupModalIsOpen: () => {},
  kycModalIsOpen: false,
  setKycModalIsOpen: () => {},
  ccModalIsOpen: false,
  setCcModalIsOpen: () => {},
  creditCardModalIsOpen: false,
  setCreditCardModalIsOpen: () => {},
  checkboxesModalIsOpen: false,
  setCheckboxesModalIsOpen: () => {},
  forgotPasswordModalIsOpen: false,
  setForgotPasswordModalIsOpen: () => {},
};

export const ModalContext = createContext(initialState);

export interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState<boolean>(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState<boolean>(false);
  const [kycModalIsOpen, setKycModalIsOpen] = useState<boolean>(false);
  const [ccModalIsOpen, setCcModalIsOpen] = useState<boolean>(false);
  const [creditCardModalIsOpen, setCreditCardModalIsOpen] = useState<boolean>(false);
  const [checkboxesModalIsOpen, setCheckboxesModalIsOpen] = useState<boolean>(false);
  const [forgotPasswordModalIsOpen, setForgotPasswordModalIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        loginModalIsOpen,
        setLoginModalIsOpen,
        signupModalIsOpen,
        setSignupModalIsOpen,
        kycModalIsOpen,
        setKycModalIsOpen,
        ccModalIsOpen,
        setCcModalIsOpen,
        creditCardModalIsOpen,
        setCreditCardModalIsOpen,
        checkboxesModalIsOpen,
        setCheckboxesModalIsOpen,
        forgotPasswordModalIsOpen,
        setForgotPasswordModalIsOpen,
      }}
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
  kycModalIsOpen: boolean;
  setKycModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ccModalIsOpen: boolean;
  setCcModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  creditCardModalIsOpen: boolean;
  setCreditCardModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  checkboxesModalIsOpen: boolean;
  setCheckboxesModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  forgotPasswordModalIsOpen: boolean;
  setForgotPasswordModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
