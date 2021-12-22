import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { socialMediaLinks } from 'app/constants/contants';
import styles from './StartMap.module.scss';

export const StartMap = () => {
  const [isStartMapVisible, setIsStartMapVisible] = useState(false);

  const handleVisible = () => setIsStartMapVisible(!isStartMapVisible);

  return (
    <div className={styles.startmap}>
      <div className={styles.startmap__titleContainer}>
        <Typography gutterBottom variant="h5" className={styles.startmap__title} onClick={handleVisible}>
          STARMAP
        </Typography>
      </div>

      {isStartMapVisible && (
        <>
          <Typography gutterBottom className={styles.startmap__textTitle}>
            PRE-DROP
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            Season 1 of Creature Chronicles is announced, and focuses on the story of The Exiled Aliens who
            are communicating with the world through{' '}
            <a href={socialMediaLinks.discord} target="_blank">
              Discord.
            </a>
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            10% of the mint will be reserved and assigned for airdrops, referral programs, promotions and
            future charity donations.
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            During the pre-drop phase, the team will be launching various promotions, contests, and AMAs with
            Anthony Francisco and friends, aimed at rewarding the growing community and building a whitelist
            for the pre-sale. <i> Currently underway.</i>
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            In addition, we will be announcing five amazing collabs with you - our amazing community members.
            Skilled members of the community will be tapped to collaborate with Anthony on the creation of the
            rarest Exiled Aliens’ NFTs that will be designed and then gifted to those members at the reveal.
          </Typography>

          <Typography gutterBottom className={styles.startmap__textTitle}>
            PRESALE
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            Presale will be reserved for Discord whitelist members and partners. Presale is limited to 30% of
            the total NFT supply. <i>Whitelist is open now</i>
          </Typography>

          <Typography gutterBottom className={styles.startmap__textTitle}>
            PUBLIC-SALE
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            Sale price will be $200 USD or around 1.3 SOL per Creature Chronicles: Exiled Aliens NFT avatar.
            The drop will be offered on FTX where buyers can mint with any crypt currency they want and we
            will also accept credit cards. Buyers will also be able to mint directly on the Solana blockchain.
          </Typography>

          <Typography gutterBottom className={styles.startmap__textTitle}>
            SELL OUT
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            Two rare Exiled Aliens NFTs, held by the humans, will be teleported back to{' '}
            <a href={socialMediaLinks.planetary} target="_blank">
              The Planetary Society
            </a>
            to help raise funds to support a rescue mission through the black hole to bring home the space
            tourists.
          </Typography>

          <Typography gutterBottom className={styles.startmap__textTitle}>
            REVEAL
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            You’re invited to our exclusive reveal party, hosted by Anthony Francisco and friends. Meet your
            fellow members and get to know our community. There will be special guests and the reveal of
            contests.
          </Typography>

          <Typography gutterBottom className={styles.startmap__textTitle}>
            POST REVEAL
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            Seasonal-inspired avatars airdropped to all holders.
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            Out with the old and in with the new. New contest winners are announced and the prizes are super
            rare alien eggs. The gestation period lasts 3 months and when these eggs hatch they reveal
            ultra-rare baby Exiled Alien avatars.
          </Typography>

          <Typography gutterBottom className={styles.startmap__textTitle}>
            Q1
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            All current holders are invited to a graphic design masterclass hosted by Anthony Francisco and
            friends.
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            Now that you have developed your design skills, we want to see how creative you are. We will
            reveal a design assignment in which all current holders can participate. The winners, chosen by
            Anthony, will receive an over-the-top trip to meet Anthony and the team at the 2022 Comic Con
            International in San Diego (July).
          </Typography>
          <Typography gutterBottom className={styles.startmap__text}>
            As an Exiled Alien NFT holder you will receive a digital graphic novel NFT chronicling the
            adventures of ⏃⏁⍀⟟⎐⟟⏃⋏⌇ in Season 1 and which will feature a tease of the next Creature Chronicles
            character and a whitelist spot for the Season 2 drop.
          </Typography>
        </>
      )}
    </div>
  );
};
