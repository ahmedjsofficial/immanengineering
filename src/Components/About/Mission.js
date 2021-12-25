import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
const Mission = () => {
    return (
        <>
            <Section>
                <Container>
                    <Slide direction="up"><div>
                        <h1 className="disney-titles">Our Mission</h1>
                        <p>Imman Engineering was initiated by Proffessional Group with only one mission and that is to make Pakistan independent in Energy production by partnering with tier 1 brands to bring quality products at a reasonable and affordable price so more people can afford to adopt renewable energy sources leading to collective growth of the nation and a cleaner, greener Pakistan.</p>
                    </div></Slide>
                    <Slide direction="down"><div>
                        <h1 className="disney-titles">Our Vision</h1>
                        <li>To revolutionize the energy sector of Pakistan</li>
                        <li>To entitle all sectors to a clean, reliable and resilient energy system</li>
                        <li>To conserve our energy reserves and ensure a promising future for our generations</li>
                        <li>To become the market leader by transforming the pattern of energy consumption.</li>
                    </div></Slide>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    padding: 3rem 0;
`;
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    @media screen and (max-width: 991px){
        width: 95%;
    }
    div{
        li{
            color: rgba(0,0,0,0.8);
            list-style: initial;
            list-style-type: square;
            font-weight: 500;
            margin: 1vh 0;
            @media screen and (max-width: 600px){
                font-size: 0.8rem;
            }
            @media screen and (max-width: 375px){
                font-size: 0.7rem;
                margin-left: 0;
                margin-right: 0;
            }
        }
        p{
            margin: 1vh 0;
            @media screen and (max-width: 600px){
                font-size: 0.8rem;
            }
            @media screen and (max-width: 375px){
                font-size: 0.7rem;
            }
        }
    }
`;
export default Mission;
