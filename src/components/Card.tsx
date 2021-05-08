import React, {useState, useEffect, SetStateAction} from 'react';
import { TypeElement } from 'typescript';

interface CardProps {
    name: string;
    width?: number;
    height?: number;
}

type StateSrc = string | null;

const Card: React.FC<CardProps> = ({name, width='100px', height='150px'}) => {
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