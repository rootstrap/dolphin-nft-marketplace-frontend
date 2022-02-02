import Remarkables from 'app/assets/Remarkables.png';

export const carouselItems: CarouselItem[] = [
  {
    collectiblesPerPack: 3,
    costPerPack: 3,
    date: 'Coming February 2022',
    image: Remarkables,
    price: 19,
    text: 'This action-packed collection features a combination of decorated legends and current winter athlete stars, including many current competitors in the February games like gold medalists Red Gerard, Hilary Knight and Kendall Coyne Schofield, as well as figure skating legend Nancy Kerrigan. IRLs for this collection include experiences that you can’t get anywhere else. IRLs may include lessons from the world’s top athletes, hand-picked professional sports gear signed by the pros themselves, and much more.',
    tier: 'Common',
    title: 'Winter Sports Champions',
  },
];

export interface CarouselItem {
  collectiblesPerPack: number;
  costPerPack: number;
  date: string;
  image: string;
  price: number;
  text: string;
  tier: string;
  title: string;
}
