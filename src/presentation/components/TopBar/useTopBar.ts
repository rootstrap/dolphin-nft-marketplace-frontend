import { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { useLogoutMutation } from 'infrastructure/services/user/UserService';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { ModalContext } from 'app/context/ModalContext';

export const useTopBar = () => {
  const [logout] = useLogoutMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setCreditCardModalIsOpen, setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated, user } = useAppSelector(state => state.user);

  const handleLogout = () => {
    logout({ email: user.email });
  };

  const handleCategories = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    handleCategories,
    anchorEl,
    handleClose,
    isAuthenticated,
    setCreditCardModalIsOpen,
    setSignupModalIsOpen,
    setLoginModalIsOpen,
    handleLogout,
  };
};
