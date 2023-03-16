import { useState } from "react";
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';

export const useCaracter = () =>{
    const [pos, setPos] = useState({ x: 3, y: 5 });
    const [side, setSide] = useState<CharacterSides>('Up');

    const moveLeft = () =>{
            setPos( (pos) => ({
                x: Move(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
                y: pos.y
            }) );
        setSide('left');
    };

    const moveRight = () =>{
        setPos( (pos) => ({
            x: Move(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
            y: pos.y
        }) );
        setSide('right');
    };

        const moveDown = () =>{
            setPos( (pos) => ({
                x: pos.x,
                y: Move(pos.x, pos.y + 1) ? pos.y + 1 : pos.y  
            }) );
        setSide('down');
    };

        const moveUp = () =>{
            setPos( (pos) => ({
                x: pos.x,
                y: Move(pos.x, pos.y - 1) ? pos.y - 1 : pos.y  
            }) );
        setSide('Up');
    };

    const Move = (x: number, y: number) =>{
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined){
            if(mapSpots[y][x] === 1){
                return true;
            }
        }
        return false;
    }

    return{
        x: pos.x,
        y: pos.y,
        side,
        moveLeft,
        moveRight,
        moveUp,
        moveDown
    };
}