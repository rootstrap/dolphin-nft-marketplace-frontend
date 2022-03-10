import HeroletesBanner from 'app/assets/homeCarousel/HeroletesBanner.png';
import HofvmBanner from 'app/assets/homeCarousel/HofvmBanner.png';
import CreaturesBanner from 'app/assets/homeCarousel/CreaturesBanner.png';
import routesPaths from '../routesPath';

export const homeCarouselItems = [
  {
    title: 'Heroletes',
    text: 'Digital collectibles that bring together the worlds of comic books and groundbreaking athletes...',
    img: HeroletesBanner,
    link: routesPaths.heroletes,
  },
  {
    title: 'Hall of Fame Village Media',
    text: 'Playbooks brings to life the most memorable plays from the college and pro careers of football legends ...',
    img: HofvmBanner,
    link: routesPaths.halloffame,
  },
  {
    title: 'Creature Chronicles',
    text: 'A multi-season graphic event, woven through the universe, built in the metaverse and ready for exploration by our community.',
    img: CreaturesBanner,
    link: routesPaths.creatures,
  },
];
