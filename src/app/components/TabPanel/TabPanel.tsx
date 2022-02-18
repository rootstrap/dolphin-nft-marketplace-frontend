import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTabPanel } from './useTabPanel';
import styles from './TabPanel.module.scss';

export const TabPanel = ({ tabs }: TabPanelInterface) => {
  const { selectedTab, handleChange } = useTabPanel();

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} centered className={styles.tabPanel__tabs}>
        {React.Children.toArray(tabs.map((tab: TabInterface) => <Tab label={tab.tabName} />))}
      </Tabs>
      {React.Children.toArray(
        tabs.map((tab: TabInterface, index: number) => (
          <div role="tabpanel" hidden={selectedTab !== index}>
            {tab.content}
          </div>
        ))
      )}
    </div>
  );
};

interface TabPanelInterface {
  tabs: TabInterface[];
}

interface TabInterface {
  content: React.ReactNode;
  tabName: string;
}
