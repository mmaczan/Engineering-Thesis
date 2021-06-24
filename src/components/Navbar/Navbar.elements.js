import styled from 'styled-components';
import { Container } from '../../globalStyles';
import {Link} from 'react-router-dom';
import { Button } from '../../globalStyles';


export const Nav = styled.nav`
background: #343434;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
    @media screen and (max-width: 960px){
        background: #FAE303;
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`
export const NavImg = styled.img`
width: 75px;
height: 75px;
`;


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

}

`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #343434;
    }
` ;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&::hover{
    border-bottom: 2px solid #FAE303;
}

    @media screen and (max-width: 960px){
        width: 100%;
        height: auto;
        &::hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 0.8rem;
height: 100%;
transition: all 0.3s ease 0.3s;
    &:hover{
        color: #FAE303;
        transform: translateY(-5px);
        text-decoration: none;
        padding-bottom: 20px;

    }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 15px;
        width: 100%;
        display: table;

        &:hover{
            color: #FAE303;
            transition: all 0.3s ease;
        }
    }
`;

export const NavButton = styled(Button)`
${Button}

        @media screen and (max-width: 960px){
            width: 200px;
            }
`;