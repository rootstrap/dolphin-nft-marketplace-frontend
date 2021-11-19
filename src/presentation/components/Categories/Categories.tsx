import { Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { dropDownListCategories } from 'app/constants/contants';
import styles from './Categories.module.scss';

export const Categories = ({ anchorEl = null, handleClose }: CategoriesProps) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      open={open}
      disableScrollLock
      anchorEl={anchorEl}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <div className={styles.categories}>
        {dropDownListCategories.map(category => (
          <a href={category.route}>
            <MenuItem key={category.key} value={category.value} disabled={category.disabled}>
              {category.value}
            </MenuItem>
          </a>
        ))}
      </div>
    </Menu>
  );
};

interface CategoriesProps {
  anchorEl?: HTMLElement;
  handleClose: () => void;
}
