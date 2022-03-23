import Common from 'app/assets/heroletesCarousel/Common.png';
import Bronze from 'app/assets/heroletesCarousel/Bronze.png';
import Silver from 'app/assets/heroletesCarousel/Silver.png';
import Gold from 'app/assets/heroletesCarousel/Gold.png';
import { packIds } from '../constants';
import { nftPack } from 'app/interfaces/NFT/NFT';

const text =
  'This action-packed collection features a combination of decorated legends and current winter athlete stars, including medalists Red Gerard, Hilary Knight and Kendall Coyne Schofield, as well as figure skating legend Nancy Kerrigan.';

export const carouselItems: CarouselItem[] = [
  {
    collectiblesPerPack: '3 common',
    costPerPack: 3,
    date: 'Available Now',
    image: Common,
    isPackForSale: true,
    price: 19,
    text,
    tier: 'common',
    title: 'Winter Sports Champions',
  },
  {
    collectiblesPerPack: '3 common, 2 bronze',
    costPerPack: 3,
    date: 'Available Now',
    image: Bronze,
    isPackForSale: true,
    price: 49,
    text,
    tier: 'bronze',
    title: 'Winter Sports Champions',
  },
  {
    collectiblesPerPack: '3 common, 2 bronze, 1 silver',
    costPerPack: 3,
    date: 'Available Now',
    image: Silver,
    isPackForSale: true,
    price: 99,
    text,
    tier: 'silver',
    title: 'Winter Sports Champions',
  },
  {
    collectiblesPerPack: '3 common, 2 bronze, 1 silver, 1 gold',
    costPerPack: 3,
    date: 'Available Now',
    image: Gold,
    isPackForSale: true,
    price: 249,
    text,
    tier: 'gold',
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
  tier: nftPack;
  title: string;
}

export const nftsPerPack = {
  creatures: [packIds.creatures],
  common: [packIds.common, packIds.common, packIds.common],
  bronze: [packIds.common, packIds.common, packIds.common, packIds.bronze, packIds.bronze],
  silver: [packIds.common, packIds.common, packIds.common, packIds.bronze, packIds.bronze, packIds.silver],
  gold: [
    packIds.common,
    packIds.common,
    packIds.common,
    packIds.bronze,
    packIds.bronze,
    packIds.silver,
    packIds.gold,
  ],
};

export const pricePerPack = {
  creatures: 175,
  common: 19,
  bronze: 49,
  silver: 99,
  gold: 249,
};
