import {Col, Container, Grid, media, Row, Flex, auto} from 'bear-react-grid';
import styled from 'styled-components';
import FeatureCard from './_components/FeatureCard';
import React from 'react';
import DemoPreview from './_components/DemoPreview';
import BrowserOnly from '@docusaurus/BrowserOnly';
import MDXContent from '@theme/MDXContent';


// @ts-ignore
import DemoCode from './_components/demo-code.mdx';
import TutorialCard from '@site/src/components/organize/home/TutorialSection/_components/TutorialCard';

interface IProps extends FCProps {

}

const BuildAnythingSection = ({
    className,
}: IProps) => {

    const renderInfo = () => {

        const dataList = [
            {imageUrl: '/img/build-anything/react.svg', text: 'ReactJS'},
            {imageUrl: '/img/build-anything/styled-components.png', text: 'Styled Components'},
            {imageUrl: '/img/build-anything/bootstrap.png', text: 'Bootstrap'},
        ]

        return <Container fluid="sm" className="mb-4">
            <Row>
                <Col col={12} md={8} lg={6} className="mx-auto mr-xl-auto ml-xl-0 mb-4">
                    <Flex className="flex-column align-items-center align-items-xl-start row-gap-3 text-center text-xl-left">
                        <SubTitle>Build anything</SubTitle>
                        <Title>Build whatever you layout.</Title>
                        <Desc>Provides components for convenient and quick typesetting. Other parts are equipped with auxiliary methods and definitions of Styled-component, which facilitates maintenance through names.</Desc>
                    </Flex>
                </Col>

                <Col col={12} xl="auto">
                    <Grid col={auto(3)} className="justify-content-center justify-items-center g-4">
                        {dataList.map((row, index) => {
                            return <FeatureCard key={`feature_${index}`} {...row}/>;
                        })}
                    </Grid>
                </Col>
            </Row>
        </Container>;
    }


    const renderExample = () => {
        return <SimpleExample>
            <Container fluid="md">
                <Row>
                    <Col col={9} md={7} lg={6} xl={7} xxl={6} className="mx-auto mx-lg-0 my-auto">
                        <DemoPreview/>
                    </Col>

                    <Col col={12} lg>
                        <CodeContent>
                            <BrowserOnly>
                                {() => {
                                    return <MDXContent>
                                        <DemoCode/>
                                    </MDXContent>
                                }}
                            </BrowserOnly>
                        </CodeContent>
                    </Col>
                </Row>
            </Container>
        </SimpleExample>;
    }

    return <BuildAnythingRoot>
        {renderInfo()}
        {renderExample()}
    </BuildAnythingRoot>;
};


export default BuildAnythingSection;






const Desc = styled.p`
    font-size: 17px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 130%;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 40px;
`;

const SubTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
`;



const CodeContent = styled.div`
  height: 300px;
  overflow: auto;
  
  ${media.lg`
    height: 500px;
  `}
  ${media.xl`
    height: 400px;
  `}
`;


const CardBg = styled.div`
  max-width: 400px;
  margin: 0 auto;
  
  ${media.lg`
       max-width: none;
  `}
`;


const SimpleExample = styled.div`
  background: center;
  background-image: url("/img/simple-example/bg.webp");
  background-size: 141.5rem 100%;
`;


const BuildAnythingRoot = styled.section`
    margin-bottom: 20px;
  z-index: 0;
  position: relative;
`;
