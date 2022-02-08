import Common from 'app/assets/heroletesCarousel/Common.png';
import Bronze from 'app/assets/heroletesCarousel/Bronze.png';
import Silver from 'app/assets/heroletesCarousel/Silver.png';
import Gold from 'app/assets/heroletesCarousel/Gold.png';
import { packIds } from '../constants';

export const carouselItems: CarouselItem[] = [
  {
    collectiblesPerPack: '3 common',
    costPerPack: 3,
    date: 'Available Now',
    image: Common,
    isPackForSale: true,
    price: 19,
    text: 'This action-packed collection features a combination of decorated legends and current winter athlete stars, including many current competitors in the February games like gold medalists Red Gerard, Hilary Knight and Kendall Coyne Schofield, as well as figure skating legend Nancy Kerrigan. IRLs for this collection include experiences that you can’t get anywhere else. IRLs may include lessons from the world’s top athletes, hand-picked professional sports gear signed by the pros themselves, and much more.',
    tier: 'Common',
    title: 'Winter Sports Champions',
  },
  {
    collectiblesPerPack: '3 common, 2 bronze',
    costPerPack: 3,
    date: 'Feb 11',
    image: Bronze,
    isPackForSale: false,
    price: 49,
    text: 'This action-packed collection features a combination of decorated legends and current winter athlete stars, including many current competitors in the February games like gold medalists Red Gerard, Hilary Knight and Kendall Coyne Schofield, as well as figure skating legend Nancy Kerrigan. IRLs for this collection include experiences that you can’t get anywhere else. IRLs may include lessons from the world’s top athletes, hand-picked professional sports gear signed by the pros themselves, and much more.',
    tier: 'Bronze',
    title: 'Winter Sports Champions',
  },
  {
    collectiblesPerPack: '3 common, 2 bronze, 1 silver',
    costPerPack: 3,
    date: 'Feb 11',
    image: Silver,
    isPackForSale: false,
    price: 99,
    text: 'This action-packed collection features a combination of decorated legends and current winter athlete stars, including many current competitors in the February games like gold medalists Red Gerard, Hilary Knight and Kendall Coyne Schofield, as well as figure skating legend Nancy Kerrigan. IRLs for this collection include experiences that you can’t get anywhere else. IRLs may include lessons from the world’s top athletes, hand-picked professional sports gear signed by the pros themselves, and much more.',
    tier: 'Silver',
    title: 'Winter Sports Champions',
  },
  {
    collectiblesPerPack: '3 common, 2 bronze, 1 silver, 1 gold',
    costPerPack: 3,
    date: 'Feb 18',
    image: Gold,
    isPackForSale: false,
    price: 249,
    text: 'This action-packed collection features a combination of decorated legends and current winter athlete stars, including many current competitors in the February games like gold medalists Red Gerard, Hilary Knight and Kendall Coyne Schofield, as well as figure skating legend Nancy Kerrigan. IRLs for this collection include experiences that you can’t get anywhere else. IRLs may include lessons from the world’s top athletes, hand-picked professional sports gear signed by the pros themselves, and much more.',
    tier: 'Gold',
    title: 'Winter Sports Champions',
  },
];

export interface CarouselItem {
  collectiblesPerPack: string;
  costPerPack: number;
  date: string;
  image: string;
  isPackForSale: boolean;
  price: number;
  text: string;
  tier: string;
  title: string;
}

export const nftsPerPack = {
  creatures: [packIds.creatures],
  common: [packIds.common, packIds.common, packIds.common],
  bronze: [packIds.common, packIds.common, packIds.common],
  silver: [packIds.common, packIds.common, packIds.common],
  gold: [packIds.common, packIds.common, packIds.common],
};
