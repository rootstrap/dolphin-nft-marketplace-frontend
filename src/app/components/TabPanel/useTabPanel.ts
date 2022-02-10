import { useState } from 'react';

export const useTabPanel = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return {
    selectedTab,
    handleChange,
  };
};
