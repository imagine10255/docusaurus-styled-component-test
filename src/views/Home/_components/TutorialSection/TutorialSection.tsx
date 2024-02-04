import styled from 'styled-components';
import React from 'react';
import {Container, Grid, Row, Col, Flex, auto} from 'bear-react-grid';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TutorialCard from './_components/TutorialCard';
import CourseButton from '../CourseButton';

interface IProps extends FCProps {
    className?: string;
}

const TutorialSection = ({
    className,
}: IProps) => {
    const {siteConfig} = useDocusaurusContext();

    const dataList = [
        {
            title: 'Grid System',
            desc: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.',
            features: [
                {text: 'Row', href: '/docs/layout/grid-system/row'},
                {text: 'Col', href: '/docs/layout/grid-system/col'},
            ],
        },
        {
            title: 'Component',
            desc: 'Use alternate layout system built on CSS Grid with examples and code snippets.',
            features: [
                {text: 'Container', href: '/docs/layout/container'},
                {text: 'Grid', href: '/docs/layout/grid'},
                {text: 'Flex', href: '/docs/layout/flex'},
            ]
        }
    ]

    return <TutorialSectionRoot className={className}>
        <Container fluid="sm">
            <Row>
                <Col col={12} md={8} lg={6} className="mx-auto mr-xl-auto mb-4">
                    <Flex className="flex-column align-items-center align-items-xl-start row-gap-3 text-center text-xl-left">
                        <SubTitle>Grid System</SubTitle>
                        <Title>{siteConfig.title}</Title>
                        <Desc>{siteConfig.tagline}</Desc>

                        <CourseButton href="/docs/why" isOutline>
                            <img src="/img/tutorial/tutorials.svg" alt="more"/>
                            <span>Read the docs</span>
                        </CourseButton>
                    </Flex>
                </Col>

                <Col col={12} xl="auto">
                    <Grid col={1} sm={auto(2)} className="justify-content-center justify-items-center g-4">
                        {dataList.map((row, index) => {
                            return <TutorialCard key={`tutorial_${index}`} data={row}/>;
                        })}
                    </Grid>
                </Col>
            </Row>

        </Container>

    </TutorialSectionRoot>;
};

export default TutorialSection;



const Desc = styled.p`
    font-size: 17px;
    line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.h2`
    font-weight: bold;
    font-size: 40px;
`;

const SubTitle = styled.div`
`;



const TutorialSectionRoot = styled.section`
  padding-bottom: 200px; // 需要撐開外容器的 Wave 背景
`;
