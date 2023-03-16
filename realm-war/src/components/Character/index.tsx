import * as C from  './styles';
import { CharacterSides } from '../../types/CharacterSides'

type Props = {
    x: number,
    y: number,
    side: CharacterSides
}

export const Character = (props: Props) =>{

    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        Up: -90
    } 

    return(
        <C.Conteiner
        size = {size}
        top = {props.y * size}
        left = {props.x * size}
        sidePos={sides[props.side] ?? 0 }
        >
        </C.Conteiner>
    )
};