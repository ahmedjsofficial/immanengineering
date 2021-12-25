import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ProtfolioAPI } from '../API/API.js';
import { Fade, Slide } from 'react-awesome-reveal';

const ProjectPoto = () => {
    return (
        <>
            <Section>
                <Container>
                    <Fade direction="top-left"><Titlte><h2>Recent Projects</h2><h1>Our Work</h1></Titlte></Fade>
                    <GridImg>
                        {
                            ProtfolioAPI && ProtfolioAPI.map((val,ind)=>(
                                <div key={ind}><Slide direction="down"><Image><img src={val.wrkImgSrc} alt="ourwork/img" /></Image></Slide></div>
                            ))
                        }
                    </GridImg>
                    <ButtonTheme>
                        <NavLink to="/contact" className="LearnMoreButton">Contact US</NavLink>
                    </ButtonTheme>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    padding: 5rem 0 5rem 0;
`;
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    @media screen and (max-width: 767px){
        width: 95%;
    }
`;
const Titlte = styled.div`
    padding: 0rem 0;
    position: relative;
    h2{
        color: #000;
        font-weight: 500;
        @media screen and (max-width: 767px){
            font-size: 1rem;
        }
    }
    h1{
        font-size: 3rem;
        font-weight: 700;
        background: var(--background-color);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        box-sizing: content-box;
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(242, 165, 93, 0.3);
        @media screen and (max-width: 767px){
            font-size: 2rem;
        }
    }        
`;
const GridImg = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 1.5rem;
    margin-top: 3vh;
    @media screen and (max-width: 991px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;
const Image = styled.div`
    width: 100%;
    height: 25vh;
    border-radius: 1rem;
    object-position: center;
    box-shadow: rgb(0 0 0 / 5%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
        transition: all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;

        &:hover{
            transform: scale(1.07);
        }
    }
`;
const ButtonTheme = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 5vh 0 0 0;
    
    > .LearnMoreButton{
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 400;
        cursor: default;
        border-radius: 1rem;
        box-sizing: border-box;
        position: relative;
        padding: 1rem 3rem;
        text-transform: uppercase;
        transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
        box-shadow: 0.3rem 0.3rem 0.7rem rgb(0 0 0 / 10%);
        background: var(--background-color);

        @media screen and (max-width: 991px){
            font-size: 1.3rem;
        }
        @media screen and (max-width: 550px){
            font-size: 1rem;
            padding: 1rem 2rem;
        }
        @media screen and (max-width: 375px){
            font-size: 1rem;
            padding: 1rem 1.5rem;
        }

        &:hover{
            transform: translateY(-0.5rem);
            box-shadow: 0 0 0.5rem rgb(255 255 255 / 20%) , rgb(23 0 102 / 30%) 0 0 0rem, rgb(0 0 0 / 30%) 0.1rem 0rem 0.7rem;
        }
    }
`;
export default ProjectPoto;
