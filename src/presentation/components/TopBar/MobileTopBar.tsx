import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MenuOutlined } from '@material-ui/icons';
import { useState } from 'react';
import logoImg from 'app/assets/dolphin_logo.png';
import styles from './MobileTopBar.module.scss';
import { UserTopBarInfo } from './UserTopBarInfo';

export const MobileTopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.mobileTopBar}>
      <div className={styles.mobileTopBar__menu}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuOutlined color="secondary" />
        </IconButton>

        <img src={logoImg} alt="logo" className={styles.mobileTopBar__logo} />

        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          <MenuItem key="FAQs" onClick={handleClose} className={styles.mobileTopBar__menuItem}>
            <a href={process.env.REACT_APP_ZENDESK_URL} target="_blank">
              FAQs
            </a>
          </MenuItem>
        </Menu>
      </div>

      <div className={styles.mobileTopBar__user}>
        <UserTopBarInfo />
      </div>
    </div>
  );
};
