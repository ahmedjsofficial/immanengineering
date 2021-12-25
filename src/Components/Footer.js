import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
const Footer = () => {
    return (
        <>
            <SolarFooter>
                <Container>
                    <FooterNav><Fade direction="up">
                        <List><NavLink to="" className="LinkTag">Home</NavLink></List>
                        <List><NavLink to="" className="LinkTag">About</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Products</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Projects</NavLink></List>
                        <List><NavLink to="" className="LinkTag">FAQ</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Location</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Contact</NavLink></List></Fade>
                    </FooterNav>
                    <FooterNav><Fade direction="up">
                        <List><NavLink to="" className="LinkTag">Solar System</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Solar Plants</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Solar Panels</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Solar Inverter</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Solar LED Lights</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Solar Batteries</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Solar Bifacial Panels</NavLink></List></Fade>
                    </FooterNav>
                    <FooterNav><Fade direction="up">
                        <List><NavLink to="" className="LinkTag">Connect with us</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Ways to Use</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Solar Information</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Privacy & Policy</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Terms of Us</NavLink></List>
                        <List><NavLink to="" className="LinkTag">Help?</NavLink></List></Fade>
                    </FooterNav>
                    <FooterInfo><Fade direction="up">
                        <li><NavLink to="" className="info-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#757575"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                            <p>imaanengineering1<br />@gmail.com</p>
                        </NavLink></li>
                        <li><NavLink to="" className="info-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#757575"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            <p>+92 307-8842855 <br />+92 303-0000879 </p>
                        </NavLink></li>
                        <li><NavLink to="" className="info-link info-link-size">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#757575"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <p>&copy; Copyright 2021 Imaan <br /> Engeering Solar System</p>
                        </NavLink></li>
                        <li><NavLink to="" className="info-link info-link-size">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2591 2.03287L17.8093 5.65133C17.9623 5.80723 18.0508 6.02056 18.0508 6.2339V17.3847C18.0508 17.8359 17.6886 18.2052 17.2458 18.2052H2.75523C2.31246 18.2052 1.9502 17.8359 1.9502 17.3847V2.61543C1.9502 2.16415 2.31246 1.79492 2.75523 1.79492H13.6956C13.9049 1.79492 14.1142 1.88518 14.2591 2.03287Z" fill="white" fillOpacity="0.3"/><path d="M13.2207 12.4617L15.6358 10.0001L13.2207 7.53857" stroke="white" strokeOpacity="0.6"/><path d="M6.78033 12.4617L4.36523 10.0001L6.78033 7.53857" stroke="white" strokeOpacity="0.6"/><path d="M8.53516 14.1026L11.4655 5.89746" stroke="white" strokeOpacity="0.6"/></svg>
                            <p>DEVELOPED BY <br />JSSTACK DEVELOPERS</p>
                        </NavLink></li></Fade>
                    </FooterInfo>
                </Container>
            </SolarFooter>
        </>
    );
};
const FooterInfo = styled.div`
    
    li{
        list-style: none;
        padding: 0.7rem 0;
        transition: all 250ms ease-in-out;
        @media screen and (max-width: 550px){
            padding: 0.3rem 0;
        }
        > .info-link{
            display: flex;
            align-items: center;
            svg{
                width: 31px;
                height: 31px;
                object-fit: contain;
                stroke-linejoin: round;
                stroke-linecap: round;
                stroke-width: 1;
                transition: all 250ms ease-in-out;
                @media screen and (min-width: 550px) and (max-width: 991px){
                    width: 27px;
                    height: 27px;
                }
                @media screen and (max-width: 550px){
                    width: 25px;
                    height: 25px;
                }
                &:hover{
                    stroke: #f9f9f9;
                }
            }
            p{
                color: #757575;
                padding: 0 0.5rem;
                transition: all 250ms ease-in-out;
                @media screen and (min-width: 550px) and (max-width: 991px){
                    font-size: 0.9rem;
                }
                @media screen and (max-width: 550px){
                    font-size: 0.7rem;
                }
                &:hover{
                    color: #f9f9f9;
                }
            }
        }
        > .info-link-size{
            p{
                color: #757575;
                padding: 0 0.5rem;
                @media screen and (min-width: 550px) and (max-width: 991px){
                    font-size: 0.9rem;
                }
                @media screen and (max-width: 550px){
                    font-size: 0.55rem;
                }
            }
        }
    }

`;
const SolarFooter = styled.footer`
    position: relative;
    border-top: 5px solid #222;
    padding: 65px 5%;
    margin-bottom: 0;
    background: #000;


    @media screen and (max-width: 991px){
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 17rem;
        padding-bottom: 5rem;
    }
    @media screen and (max-width: 767px){
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 15rem;
        padding-bottom: 5rem;
    }
`;
const Container = styled.div`
    display: grid;
    column-gap: 0;
    margin: 0 auto;
    width: 85%;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media screen and (min-width: 280px) and (max-width: 991px){
        width: 100%;
        row-gap: 1.7rem;
        column-gap: 1px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;
const FooterNav = styled.ul`
    padding: 0;
    margin: 0;
    background: #000;
`;
const List = styled.li`
    list-style: none;
    transition: all 250ms ease-in-out;

    > .LinkTag{
        color: #757575;
        padding: 0.5rem;
        font-size: 0.9rem;
        margin: 0.3vh 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        white-space: nowrap;
        word-wrap: break-word;
        transition: all 250ms ease-in-out;
        @media screen and (min-width : 550px) and (max-width : 991px){
            font-size: 0.9rem;
            margin: 0.1vh 0;
            padding: 0.3rem;
        }
        @media screen and (max-width : 550px){
            font-size: 0.7rem;
            margin: 0.1vh 0;
            padding: 0.2rem;	
        }
        &:hover{
            color: #f9f9f9;
        }
    }
`;
export default Footer;
