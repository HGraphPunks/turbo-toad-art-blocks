import * as React from 'react';
import {
  Typography,
  Button,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';
import nftImg from '../assets/nft.png'
import iconLooksRare from '../assets/icon-looksrare.svg'
import iconOpenSea from '../assets/icon-opensea.svg'
import iconRarible from '../assets/icon-rarible.svg'


export default function Index() {

  // Update to be content for mint
  const meta = {
    title: "A small yellow toad in a space helmet",
    artist: "@TurboToadToken",
    artistWallet: "0x211daf53d67c9bef19336864c10675b99a699da4",
    description: "Meet Turbo Toad, the vibrant and energetic mascot of Turbo Toad Token (TTT)! With its striking yellow hue and an infectious grin, Turbo Toad embodies the spirited nature of the TTT community. Always ready for action, this lively amphibian leaps fearlessly into the world of crypto, inspiring others to join the Toad Army on their incredible journey. Turbo Toad's unyielding enthusiasm and determination make it the perfect symbol for TTT's pursuit of innovation and success in the ever-evolving crypto landscape.",
    attributes: [
      { property: "mechanic", value: "Open Edition" },
      { property: "token Standard", value: "ERC1155" },
      { property: "blockchain", value: "Ethereum" },
    ],
    details: [
      { property: "price", value: "1.0 TURBO" },
      { property: "total Minted", value: "6,495" },
    ],
    icons: [
      { icon: iconOpenSea, link: "https://opensea.io/assets/ethereum/0x49690ca88faf70025748bb15ec87cb0df85b3935/1" },
      { icon: iconLooksRare, link: "https://looksrare.org/collections/0x49690ca88faf70025748bb15ec87cb0df85b3935/1" },
      { icon: iconRarible, link: "https://arweave.net/ORlKz1V8K6jiVhFbMAgv3n7oJS75LHq8NhR-skLeoUc" },
      { icon: iconRarible, link: "https://etherscan.io/address/0x49690ca88faf70025748bb15ec87cb0df85b3935" },
    ]
  };
  

  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <>
      <div className={styles.nftView}>
        <div style={{width: 'auto'}}>
          
            <div className={styles.nftImgContainer}>
              <div className={styles.nftImgHeader}>ETH</div>
              <img alt={"NFT art"} src={nftImg?.src} className={styles.nftImg} />
              <Typography
                variant='h5'
                textAlign='left'
                style={{margin: '0px 0 10px'}}
                fontWeight='bold'
                color='white'
              >
                {meta.title}
              </Typography>
              <div className={styles.nftOwner}>
                {meta.description}
              </div>
              <div className={styles.iconContainer}>
                 {meta?.icons.map(({icon, link}) => (
                    <Link href={link}>
                      <img src={icon.src}  className={styles.icons}/>
                    </Link>
                  ))}
                </div>
            </div>
        </div>
        <div>
          <div className={styles.nftImgProperties}>
                <div className={styles.propertiesContainer}>
                  {meta?.attributes.map(({property, value}, index) => (
                    <div className={styles.propertyContainer} key={index}>
                      <div>
                        <Typography
                          variant='body2'
                          style={{margin: '0px 0 0', textTransform: 'capitalize'}}
                          color='#f8c260'
                        >
                          {property}
                        </Typography>
                        <Typography
                          variant='body1'
                          style={{margin: '0px 0 0', textTransform: 'capitalize'}}
                          color='#fff'
                        >
                          {value}
                        </Typography>
                        
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.detailsContainer}>
                  {meta?.details.map(({property, value}) => (
                    <div className={styles.detailItem}>
                      <div className={styles.detailLabel}>{property}</div>
                      <div className={styles.detailValue}>{value}</div>
                    </div>
                  ))}
                </div>
                <Button
                  variant='contained'
                  style={{
                    border: '2px solid #f8c260',
                    color: '#f7f975',
                    background: '#080808',
                    margin: '30px auto 70px',
                    width: '100%',
                    height: "60px",
                    fontSize: "20px",
                    display: 'flex',
                  }}
                >
                  Mint
                </Button>
          </div>
         
        </div>
      </div>
    </>
  );
}

