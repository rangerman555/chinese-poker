import React, {useState, useEffect, SetStateAction} from 'react';
import { TypeElement } from 'typescript';
import {CARD_HEIGHT, CARD_WIDTH} from '../constants';

interface CardProps {
    name: string;
    width?: string;
    height?: string;
}

type StateSrc = string | null;

const Card: React.FC<CardProps> = ({name, width=CARD_WIDTH, height=CARD_HEIGHT}) => {
    const [src, setSrc]= useState<StateSrc>(null);
    useEffect(() => {
        (async () => {
            try {
                const { default: namedImport } = await import(`../assets/cards/${name}.svg`);
                setSrc(namedImport);
            } catch (err) {
                throw err;
            }
        })()
    }, [name])

    if (src) {
        return <img src={src} alt={name} style={{height, width}} />
      }
    
      return null;
}

export default Card;