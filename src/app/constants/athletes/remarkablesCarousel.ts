import Remarkables from 'app/assets/Remarkables.png';

export const carouselItems: CarouselItem[] = [
  {
    title: 'Winter Sports Champions',
    date: 'Coming February 2022',
    text: 'This action-packed collection features a combination of decorated legends and current winter athlete stars, including many current competitors in the February games like gold medalists Red Gerard, Hilary Knight and Kendall Coyne Schofield, as well as figure skating legend Nancy Kerrigan. IRLs for this collection include experiences that you can’t get anywhere else!  IRLs may include lessons from the world’s top athletes, hand-picked professional sports gear signed by the pros themselves, and much more.',
    collectiblesPerPack: 3,
    costPerPack: 3,
    tier: 'Gold',
    image: Remarkables,
  },
];

export interface CarouselItem {
  title: string;
  date: string;
  text: string;
  collectiblesPerPack: number;
  costPerPack: number;
  tier: string;
  image: string;
}
