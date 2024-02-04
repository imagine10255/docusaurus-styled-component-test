import styled from 'styled-components';
import {Grid, Container, media, Row, Col, auto} from 'bear-react-grid';
import React from 'react';
import CourseButton from '../CourseButton';


const Header = () => {
    const data = {
        title: 'Gird System following Bootstrap design',
        desc: `A utility-first CSS framework packed with classes like <span>d-flex</span>, <span>pt-4</span>,
                and <span>text-center</span> that can be composed to build any design, directly in your markup.`,
        packageName: 'bear-react-grid',
    }
    return <HeaderRoot>
        <Container>
            <Col col={12} lg={8} xxl={6} className="mx-auto text-center d-flex flex-column row-gap-3">
                <Title>{data.title}</Title>
                <Desc dangerouslySetInnerHTML={{__html: data.desc}}/>

                <Grid col={1} sm={auto(2)} className="align-items-start justify-content-center gy-2">
                    <CourseButton href="/docs/why" isOutline>
                        <img src="/img/tutorial/tutorials.svg" alt="more"/>
                        <span>Read the docs</span>
                    </CourseButton>

                    <Command>
                        yarn add {data.packageName}
                    </Command>
                </Grid>
            </Col>

        </Container>
    </HeaderRoot>;
};

export default Header;








const Command = styled.pre`
  background-color: #38373d;
  color: #fff;
  border: 1px solid #504c56;
  padding: 10px 20px;
  border-radius: 30px;

  :before {
    color: #868e96;
    content: "$ ";
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
`;

const Desc = styled.p`
  font-size: 15px;
  color: rgb(148, 163, 184);
  line-height: 1.5;

  span {
    color: var(--ifm-color-primary);
  }

  ${media.lg`
      font-size: 18px;
  `}
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 800;
  font-size: 40px;
  line-height: 100%;

  ${media.lg`
    font-size: 60px;
  `}
`;


const HeaderRoot = styled.div`
  padding-top: 100px;
  background-color: rgb(27, 27, 29);
`;
