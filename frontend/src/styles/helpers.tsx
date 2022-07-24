import  {primaryColor,secondaryColor, textColor} from './colors';

export const getColorFromString = (color:string):string=>{
    if(color=='primary')return primaryColor
    if(color=='secondary')return secondaryColor
    if(color=='text-color')return textColor
    return color

}