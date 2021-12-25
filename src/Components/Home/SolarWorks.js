import React from 'react';
import styled from 'styled-components';
import { workIconAPIOne, workIconAPITwo } from '../API/API';
import inner_solar from '../Images/inner_solar.png';
import { Fade, Slide } from 'react-awesome-reveal';
const SolarWorks = () => {
    return (
        <>
            <Container>
                <Fade direction="top-left"><Titlte><h2>What we offer!!</h2><h1>How Solar Works</h1></Titlte></Fade>
                <GridContanier>
                    <Slide direction="down"><nav>
                        {
                            workIconAPIOne && workIconAPIOne.map((val, index)=>(
                                <div className="text-box" key={index}>
                                    <div className="navImg">
                                        <img src={val.iconSrc} alt="panel" />
                                    </div>
                                    <div className="navText">
                                        <h4>{val.wrktitle}</h4>
                                        <p>{val.wrkText}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </nav></Slide>
                    <div className="workImg">
                    <Fade direction="up"><img src={inner_solar} alt="solar/work" /></Fade>
                    </div>
                    <Slide direction="down"><nav>
                        {
                            workIconAPITwo && workIconAPITwo.map((val, index)=>(
                                <div className="text-box" key={index} data-aos="slide-up">
                                    <div className="navImg">
                                        <img src={val.iconSrc} alt="panel" />
                                    </div>
                                    <div className="navText">
                                        <h4>{val.wrktitle}</h4>
                                        <p>{val.wrkText}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </nav></Slide>
                </GridContanier>
            </Container>
        </>
    );
};
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 0 0 4rem 0;

    @media screen and (max-width: 767px){
        width: 95%;
        padding: 2rem 0 2rem 0;
    }
`;
const Titlte = styled.div`
    padding: 0rem 0;
    position: relative;
    h2{
        color: #000;
        font-weight: 500;
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
const GridContanier = styled.div`
    padding: 0 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (min-width: 280px) and (max-width: 991px){
        flex-direction: column;
        justify-content: center;
    }
    > .workImg{
        width: 30rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 991px) and (max-width: 1200px){
            width: 20rem;
        }
        @media screen and (min-width: 550px) and (max-width: 991px){
            width: 25rem;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            width: 17rem;
        }

        img{
            width: 100%;
            height: auto;
            max-width: 430px;
            z-index: 1500;
        }
    }

    nav{
        width: 19rem;
        height: auto;
        display: block;

        @media screen and (min-width: 991px) and (max-width: 1200px){
            width: 17rem;
        }
        @media screen and (min-width: 767px) and (max-width: 991px){
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
        }
        @media screen and (min-width: 280px) and (max-width: 767px){
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            margin: 3vh 0; 
        }

        > .text-box{
            display: flex;
            min-height: 5rem;
            align-items: flex-start;
            justify-content: center;
            padding: 0.5rem 0;

            @media screen and (min-width: 767px) and (max-width: 991px){
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;
            }
            @media screen and (min-width: 280px) and (max-width: 767px){
                min-height: 4rem;
            }

            > .navImg{
                width: auto;
                height: auto;

                img{
                    width: 51px;
                    height: 51px;
                    object-fit: contain;
                    @media screen and (min-width: 280px) and (max-width: 1200px){
                        width: 35px;
                        height: 35px;
                        object-fit: cover;
                    }
                }
            }
            > .navText{
                margin-left: 1rem;
                @media screen and (min-width: 767px) and (max-width: 991px){
                    margin: 0 1rem;
                }

                h4{
                    color: rgb(247, 71, 17);
                    font-weight: 500;
                    @media screen and (min-width: 280px) and (max-width: 1200px){
                        font-size: 0.85rem;
                    }
                    @media screen and (min-width: 280px) and (max-width: 375px){
                        font-size: 0.9rem;
                    }
                }
                p{
                    margin-top: 0.5vh;
                    font-size: 0.85rem;
                    @media screen and (min-width: 767px) and (max-width: 1200px){
                        font-size: 0.75rem;
                        margin-top: 1vh;
                    }
                    @media screen and (min-width: 280px) and (max-width: 375px){
                        font-size: 0.9rem;
                        margin-top: 1vh;
                    }
                }
            } 
        }
    }

`;
export default SolarWorks;
