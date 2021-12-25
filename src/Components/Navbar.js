import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import brand from "../Components/Images/logo.png";

const Navbar = () => {
    const [showNav, setshowNav] = useState(false);
    const [PopupState, setPopupState] = useState(false);
    const onPopupTrigger = () => setPopupState(!PopupState);
    const onNavTrigger = () =>{
        if(window.scrollY > 100){
            setshowNav(true);
        }else{
            setshowNav(false);
        }
    }
    useEffect(() => {
        const navLink = document.querySelectorAll("#links");
        navLink.forEach(element => {
            element.addEventListener("click", ()=>{
                setPopupState(false);
            })
        });

        window.addEventListener("scroll", onNavTrigger);
        return ()=> {
            window.removeEventListener("scroll", onNavTrigger);
        };
    }, []);
    
    return (
        <>
            <Header className={`navonFixed ${showNav && "navonStikcy"}`}>
                <Nav>
                    <NavLink to="/" className="navbrand"><img src={brand} alt="logo/solar" /></NavLink>
                    <ul className="display-none">
                        <li><NavLink to="/" className={`navLink ${showNav && "navlink-nobg"}`}>Home</NavLink></li>
                        <li><NavLink to="/about" className={`navLink ${showNav && "navlink-nobg"}`}>About</NavLink></li>
                        <li><NavLink to="/projects" className={`navLink ${showNav && "navlink-nobg"}`}>Projects</NavLink></li>
                        <li><NavLink to="/products" className={`navLink ${showNav && "navlink-nobg"}`}>Products</NavLink></li>
                        <li><NavLink to="/contact" className={`navLink ${showNav && "navlink-nobg"}`}>Contact</NavLink></li>
                    </ul>
                    <HamburgerMenu>
                        <li><button type="button" onClick={onPopupTrigger} className="hamburgermenu">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button></li>
                    </HamburgerMenu>
                </Nav>
            </Header>
            <PopupMenu>
                <SmartMenu onpopupShow={PopupState}>
                    <li><NavLink id="links" to="/" className="navLink">Home</NavLink></li>
                    <li><NavLink id="links" to="/about" className="navLink">About</NavLink></li>
                    <li><NavLink id="links" to="/projects" className="navLink">Projects</NavLink></li>
                    <li><NavLink id="links" to="/products" className="navLink">Products</NavLink></li>
                    <li><NavLink id="links" to="/contact" className="navLink">Contact</NavLink></li>
                </SmartMenu>
            </PopupMenu>     
        </>
    );
};
const PopupMenu = styled.nav`
    display: none !important;
    @media screen and (max-width: 991px){
        display: flex !important;
    }
`;
const SmartMenu = styled.div`
    position: fixed;
    top: 5rem;
    right: 4rem;
    z-index: 3000;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(0.7rem);
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px  inset;
    border-radius: 0.345rem;
    border-bottom: 0.15rem solid #f2f6ff;
    padding: 1rem 1.5rem 1.7rem 1.5rem;
    width: 11rem;
    display: flex;
    min-height: auto;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;

    transition: all 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    opacity: ${event => event.onpopupShow ? '1' : '0'};
    visibility: ${event => event.onpopupShow ? 'visible' : 'hidden'};
    transform: ${event => event.onpopupShow ? 'skewY(0deg) rotate(0deg) translateY(0px)' : 'skewY(-5deg) rotate(5deg) translateY(-30px)'};

    @media screen and (max-width: 767px){
        position: fixed;
        top: 5rem;
        right: 3.5rem;
    }
    @media screen and (max-width: 375px){
        width: 9rem;
    }

    li{
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1rem 0 0.15rem 0;
        border-bottom: 0.13rem solid rgb(247, 71, 17);
        > .navLink{
            color: #000;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 1.2rem;
            @media screen and (max-width: 550px){
                font-size: 1rem;
            }
            @media screen and (max-width: 375px){
                font-size: 0.85rem;
            }
        }
    }
`;
const HamburgerMenu = styled.ul`
    display: none !important;

    @media screen and (max-width: 991px){
        display: flex !important;
    }

    li{

        > .hamburgermenu{
            outline: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.35rem !important;
            border-radius: 10% !important;
            background: var(--background-color) !important;
            box-shadow: rgb(31 47 71 / 25%) 0px 20px 40px, rgb(0 0 0 / 10%) 0px 1px 5px, rgb(255 255 255 / 40%) 0px 0px 0px 0.5px inset !important;

            svg{
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 1.5;
                stroke: #fff;
                width: 35px;
                height: 35px;

                @media screen and (max-width: 550px){
                    width: 25px;
                    height: 25px;
                }

            }
        }
    }
`;
const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 5vh;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: 2500;
    display: flex;
    min-height: auto;
    align-items: center;
    transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
`;
const Nav = styled.nav`
    width: 85vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-shrink: 0;
    justify-content: space-between;

    @media screen and (max-width: 1200px){
        width: 91vw;
        margin: 0 auto;
    }
    
    > .navbrand{
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img{
            width: auto;
            height: auto;
            object-fit: contain;

            @media screen and (max-width: 550px){
                width: 135px;
                height: auto;
            }
        }
    }

    ul{
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        li{
            list-style: none;
            > .navLink{
                position: relative;
                padding: 0.5rem 1rem;
                margin: 0 0 0 0.5rem;
                font-weight: normal;
                font-style: normal;
                border-radius: 0.345rem;
                color: rgba(0,0,0,1);
                transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(1rem);

                @media screen and (max-width: 1200px){
                    padding: 0.5rem 0.7rem;
                    font-size: 0.85rem;
                }

                &::before{
                    position: absolute;
                    content: "";
                    top: 100%;
                    left: 0;
                    right: 0;
                    width: 0;
                    height: 2px;
                    border-radius: 0.345rem;
                    background: var(--background-color);
                    transition: all 500ms cubic-bezier(0.23, 1, 0.320, 1) 0s;
                }

                &:hover{
                    &::before{
                        width: 100%;
                    }
                    color: #FFF;
                    background: rgba(255, 255, 255, 0.25);
                    box-shadow: rgb(31 47 71 / 25%) 0px 20px 40px, rgb(0 0 0 / 10%) 0px 1px 5px, rgb(255 255 255 / 40%) 0px 0px 0px 0.5px inset;
                }
            }
        }
    }
`;
export default Navbar;
