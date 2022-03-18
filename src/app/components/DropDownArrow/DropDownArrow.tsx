import { ArrowDropDownOutlined, ArrowDropUpOutlined } from '@material-ui/icons';

export const DropDownArrow = ({ isContentVisible }: DropDownArrowProps) => {
  return isContentVisible ? (
    <ArrowDropUpOutlined fontSize="large" />
  ) : (
    <ArrowDropDownOutlined fontSize="large" />
  );
};

interface DropDownArrowProps {
  isContentVisible: boolean;
}
