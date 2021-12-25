import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Controller } from 'swiper';
import "../../../node_modules/swiper/swiper-bundle.css";
import { BannerAPI } from '../API/API';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

SwiperCore.use([Controller, Autoplay]);
const Banner = () => {
    const [SlideState, setSlideState] = useState();
    return (
        <>
            <Main>
                <Swiper
                    tag="div"
                    loop="true"
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides="true"
                    className="swiper-wrapper"
                    control={{ control: SlideState }}
                    onSwiper={setSlideState}
                    autoplay={{ autoplay: true, delay: 3300, disableOnInteraction: false }}
                >
                    {
                        BannerAPI && BannerAPI.map((val, index) => (
                            <SwiperSlide key={index} className="swiper-slide" tag="div">
                                <div style={{ background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.35),rgba(0,0,0,0.35),rgba(0,0,0,0.2)),url(${val.imgSrc})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                                    <div className="container">
                                        <div className="slide-text">
                                            <Fade direction="left"><h1>{val.title1}</h1>
                                                <h1>{val.title2}</h1>
                                                <p>{val.text}</p>
                                                <div className="button-group">
                                                    <NavLink to="/contact" className="btn-theme">{val.btn1}</NavLink>
                                                    <NavLink to="/projects" className="btn-theme">{val.btn2}</NavLink>
                                                </div></Fade>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Main>
        </>
    );
};

const Main = styled.main`
    position: relative;

    > .swiper-container{
        > .swiper-wrapper{
            > .swiper-slide{
                div{
                    position: relative;
                    min-height: auto;
                    
                    > .container{
                        width: 85%;
                        margin: 0 auto;

                        display: flex;
                        min-height: 85vh;
                        align-items: flex-start;
                        flex-direction: column;
                        justify-content: center;

                        @media screen and (min-width: 767px) and (max-width: 1200px){
                            width: 89%;
                            min-height: 75vh;
                        }
                        @media screen and (min-width: 280px) and (max-width: 767px){
                            width: 95%;
                            min-height: 65vh;
                        }
                        > .slide-text{
                            min-height: auto;
                            padding: 2rem 3rem;
                            position: relative;
                            margin-top: 15vh;
                            background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.25));
                            box-shadow: rgb(0 0 0 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
                            @media screen and (min-width: 767px) and (max-width: 1200px){
                                padding: 2rem 0rem 2rem 3rem;
                            }
                            @media screen and (min-width: 550px) and (max-width: 767px){
                                padding: 1.5rem 0rem 1.5rem 2rem;
                                margin-top: 13vh;
                            }
                            @media screen and (min-width: 280px) and (max-width: 550px){
                                padding: 1rem 0rem 1rem 2rem;
                                margin-top: 13vh;
                            }

                            &::before{
                                position: absolute;
                                content: "";
                                top: 0;
                                left: 0;
                                width: 1rem;
                                height: 100%;
                                background: linear-gradient(209.21deg, rgb(200, 11, 11) 13.57%, rgb(242, 165, 93) 98.38%);
                            }
                            h1{
                                font-size: 2.7rem;
                                font-weight: 700;
                                line-height: 1.08;
                                letter-spacing: 0.5px;
                                color: rgb(249,249,249,1);

                                @media screen and (min-width: 767px) and (max-width: 1200px){
                                    font-size: 2rem;
                                }
                                @media screen and (min-width: 550px) and (max-width: 767px){
                                    font-size: 1.5rem;
                                }
                                @media screen and (min-width: 375px) and (max-width: 550px){
                                    font-size: 1.2rem;
                                }
                                @media screen and (min-width: 280px) and (max-width: 375px){
                                    font-size: 0.8rem;
                                }
                            }
                            p{
                                font-size: 1rem;
                                max-width: 650px;
                                margin: 2vh 0;
                                color: rgba(249,249,249,0.8);

                                @media screen and (min-width: 280px) and (max-width: 767px){
                                    max-width: 450px;
                                    margin-top: 1vh;
                                    font-size: 0.7rem;
                                }
                            }        
                            > .button-group{
                                margin-top: 5vh;
                            }         
                        }
                    }
                }
            }
        }
    }

`;
export default Banner;
