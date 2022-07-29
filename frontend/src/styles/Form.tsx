import styled,{createGlobalStyle} from 'styled-components/macro';
import { textColor,primaryColor } from './colors';

export const Form = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    gap:1rem;
`
export const FormController = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    align-items: flex-start;
    gap:1rem;
`
export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    color:${textColor};
`