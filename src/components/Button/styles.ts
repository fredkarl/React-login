import styled from 'styled-components';
import { IButtonProps } from './types';


export const ButtonContainer = styled.button<IButtonProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    cursor:pointer;

    &:hover {
       ${props => props.disabled ? `opacity: 0.6;` : `cursor:wait;` };
    }
    
`