import React, {useState, useEffect, SetStateAction} from 'react';
import { TypeElement } from 'typescript';
import {CARD_HEIGHT, CARD_WIDTH} from '../constants';
import { CardType } from '../redux/gameSlice';

interface CardProps {
    card: CardType;
    width?: string;
    height?: string;
}

type StateSrc = string | null;

const Card: React.FC<CardProps> = ({card={}, width=CARD_WIDTH, height=CARD_HEIGHT}) => {
    const [src, setSrc]= useState<StateSrc>(null);
    
    useEffect(() => {
        
        (async () => {
            if (!card) return;
            try {
                const { default: namedImport } = await import(`../assets/cards/${card.open ? card.name : '1B'}.svg`);
                setSrc(namedImport);
            } catch (err) {
                throw err;
            }
        })()
    }, [card.name])

    if (src) {
        return <img src={src} alt={card.name} style={{height, width}} />
      }
    
      return null;
}

export default Card;