import styled from 'styled-components/macro';
import {getColorFromString} from './helpers';
interface buttonInterface  {
  color?:string|undefined;
  background?:string|undefined;
  px?:string|undefined;
  py?:string|undefined;
  radius?:string|undefined;
  size?:string;
  border?:string;
  valid?:boolean;

}
export const Button = styled.button<buttonInterface>`
padding:${props=>props.px ? props.px :'0.6rem'} ${({py})=>py ? py :'1.5rem'} ;
  cursor:pointer;
  color:${({color})=>getColorFromString(color ? color:"text-color")};
  background-color:${({background})=>getColorFromString(background ? background:"background-color")};
  border-radius:${({radius})=>radius ? radius:"8px"};
  color:${({color})=>getColorFromString(color ? color:"text-color")};
  font-size:${({size})=>size ? size:'1rem'};
  opacity:${({valid})=>valid ? '1':'0.4'};
  pointer-events${({valid})=>valid ? 'all':'none'};
   border:${({border})=>border ? border:'none'};
   transition:all 0.3s ease;

  &:active{
    opacity:0.8;
  }
`
