import React from 'react';

import {GridThemeProvider, Container, Grid, Flex, media, Row, Col} from 'bear-react-grid';
import styled from 'styled-components';
import gridTheme from '@site/src/config/gridTheme';
// import Button from '@site/src/components/atoms/Button';

import 'bear-react-grid/dist/index.css';

export default function FrameResponsive(): JSX.Element {
    return (
        <Main>
            <GridThemeProvider gridTheme={gridTheme}>
                <Container>
                    <Row>

                        <Col col={12} lg={6} className="order-lg-last">
                            <Grid col={1} sm={2} md={4} lg={2} className="order-0 order-lg-2">
                                <PhotoGridCol className="g-col-md-2">
                                    <Photo src="/img/responsive/01.webp" alt="xx" className=""/>
                                </PhotoGridCol>
                                <Photo src="/img/responsive/02.webp" alt="2" className="d-none d-sm-block"/>
                                <Photo src="/img/responsive/03.webp" alt="3" className="d-none d-md-block"/>
                            </Grid>
                        </Col>

                        <Col col={12} lg={6}>
                            <Grid col={1} xl={2} className="g-2">
                                <TitleWrapper>
                                    <SubTitle>natural ingredients</SubTitle>
                                    <Title>Strawberry Blueberry Pie</Title>

                                    <Flex className="align-items-center">
                                        <Star width="24" height="24" fill="none" aria-hidden="true">
                                            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </Star>
                                        <Score>4.89 <span>(128)</span></Score>
                                    </Flex>
                                </TitleWrapper>

                                <Flex className="align-items-center">
                                    {/*<Button type="button" color="primary" onClick={() => {}}>Check availability</Button>*/}
                                </Flex>

                                <div className="g-col-sm-2 g-col-lg-1">
                                    <Desc>
                                        Use herbal all-natural fermented flour to combine with blueberries, and use strawberries to decorate to make the pie more delicious.
                                        If paired with a cup of cappuccino, the taste will be sublimated to another level, just like the feeling of a flower blooming.
                                    </Desc>
                                </div>
                            </Grid>
                        </Col>

                    </Row>

                </Container>
            </GridThemeProvider>
        </Main>
    );
}


const PhotoGridCol = styled.div`
  position: relative;
  left: 0;
  top: 0;
  z-index: 0;
`;


const TitleWrapper = styled.div`
  z-index: 9;
`;


const Photo = styled.img`
  border-radius: 0.5rem;
  object-fit: cover;
  height: 150px;
  width: 100%;
`;


const Score = styled.span`
  font-size: 12px;
  color: rgb(100, 53, 201);

  span {
    color: rgb(148 163 184);
  }

`;


const Star = styled.svg`
  stroke: rgb(100, 53, 201);
`;

const SubTitle = styled.div`
  margin-top: -70px;
  z-index: 9;
  padding-left: 15px;
  color: #fff;

  ${media.sm`
    margin-top: 0;
    padding-left: 0;
    color: rgb(148 163 184);
  `}
`;

const Desc = styled.p`
  font-size: 14px;
  color: rgb(148, 163, 184);
  margin-bottom: 0;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 15px;
  padding-left: 15px;

  ${media.sm`
    padding-left: 0;
    margin-bottom: 0;
  `};

  ${media.md`
    font-size: 1.5rem;
  `}
`;


const Main = styled.main`
  background-color: rgb(44, 44, 44);
  height: 420px;
  padding: 20px 0;
`;
