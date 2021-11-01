import { ReactElement } from 'react';

export interface Route {
  path: string;
  component: ReactElement;
  exact?: boolean;
  private?: boolean;
}
