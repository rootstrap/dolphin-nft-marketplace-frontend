import RedGerard from 'app/assets/winterGrid/RedGerard.jpg';
import NancyKerrygan from 'app/assets/winterGrid/NancyKerrygan.jpg';
import LindseyJacobellis from 'app/assets/winterGrid/LindseyJacobellis.jpg';
import KendallCoyne from 'app/assets/winterGrid/KendallCoyne.jpg';
import JohnShuster from 'app/assets/winterGrid/JohnShuster.jpg';
import JoeMantia from 'app/assets/winterGrid/JoeMantia.jpg';
import GusKenworthy from 'app/assets/winterGrid/GusKenworthy.jpg';
import ChrisMazdzer from 'app/assets/winterGrid/ChrisMazdzer.jpg';

const random = Math.random().toString(36).slice(2);

export const winterGridItems = [
  {
    id: random,
    name: 'KENDALL COYNE SCHOFIELD',
    sport: 'Ice Hockey',
    image: KendallCoyne,
  },
  /* {
    id: random,
    name: 'JESSIE DIGGINS',
    sport: 'Cross Country Skiing',
    image: NancyKerrygan,
  }, */
  {
    id: random,
    name: 'RED GERARD',
    sport: 'Snowboard',
    image: RedGerard,
  },
  {
    id: random,
    name: 'LINDSEY JACOBELLIS ',
    sport: 'Snowboard',
    image: LindseyJacobellis,
  },
  {
    id: random,
    name: 'GUS KENWORTHY',
    sport: 'Freestyle Skiing',
    image: GusKenworthy,
  },
  {
    id: random,
    name: 'NANCY KERRIGAN',
    sport: 'Figure Skating',
    image: NancyKerrygan,
  },
  /*  {
    id: random,
    name: 'HILARY KNIGHT',
    sport: 'Ice Hockey',
    image: NancyKerrygan,
  }, */
  {
    id: random,
    name: 'JOEY MANTIA',
    sport: 'Speed Skating',
    image: JoeMantia,
  },
  {
    id: random,
    name: 'CHRIS MAZDZER',
    sport: 'Luge',
    image: ChrisMazdzer,
  },
  /* {
    id: random,
    name: 'TINA MAZE',
    sport: 'Alpine Skiing',
    image: NancyKerrygan,
  }, 
  {
    id: random,
    name: 'MARK MCMORRIS',
    sport: 'Snowboard',
    image: NancyKerrygan,
  },*/
  {
    id: random,
    name: 'JOHN SHUSTER',
    sport: 'Curling',
    image: JohnShuster,
  },
];
