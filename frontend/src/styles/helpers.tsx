import  {primaryColor,secondaryColor} from './colors';

export const getColorFromString = (color:string):string=>{
    if(color=='primary')return primaryColor
    if(color=='secondary')return secondaryColor
    return color

}