import { Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { dropDownListCategories } from 'app/constants/contants';
import styles from './Categories.module.scss';

export const Categories = ({ anchorEl = null, handleClose }: CategoriesProps) => {
  const open = Boolean(anchorEl);

  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      <div className={styles.categories}>
        {dropDownListCategories.map(category => (
          <Link to={category.route}>
            <MenuItem key={category.key} value={category.value} disabled={category.disabled}>
              {category.value}
            </MenuItem>
          </Link>
        ))}
      </div>
    </Menu>
  );
};

interface CategoriesProps {
  anchorEl?: HTMLElement;
  handleClose: () => void;
}
