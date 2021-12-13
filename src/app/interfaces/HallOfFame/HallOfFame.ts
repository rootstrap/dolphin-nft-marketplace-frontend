export type Tiers = 'Legend' | 'Icon' | 'Star' | 'Phenom' | '';
export type Legends =
  | 'Marcus Allen'
  | 'Doak Walker'
  | 'Earl Campbell'
  | 'Joe Theismann'
  | 'Shannon Sharpe'
  | 'Tim Brown'
  | 'More Soon'
  | '';

export interface ITiers {
  legend: string;
  icon: string;
  star: string;
  phenom: string;
}

export interface ILegends {
  marcusAllen: string;
  doakWalker: string;
  earlCampbell: string;
  joeTheissmann: string;
  shannonSharpe: string;
  timBrown: string;
  moreSoon: string;
}
