import { LazyExoticComponent } from 'react';

export interface Route {
  [role: string]: RouteElement[];
}

export interface RouteElement {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  exact?: boolean;
  private?: boolean;
}

type JSXComponent = () => JSX.Element;
