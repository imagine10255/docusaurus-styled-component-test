import {Container, Grid, media, fr, Flex, Col, Row} from 'bear-react-grid';
import styled from 'styled-components';
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import MDXContent from '@theme/MDXContent';
import DemoPreview from './_components/DemoPreview';

import DemoCode from './_components/demo-code.mdx';

interface IProps extends FCProps {}

const ModernFeaturesSection = ({
    className,
}: IProps) => {


    const renderInfo = () => {
        const info = {
            subTitle: 'Modern features',
            title: 'Cutting-edge is our comfort zone.',
            desc: 'We\'ve got first-class CSS grid support, and supports auxiliary class Class CSS, no need to define Styled-components for an attribute',
        }

        return <Container className="pb-2">
            <Col col={12} xl={7} className="d-flex flex-column gap-2 text-center text-xl-left">
                <SubTitle>{info.subTitle}</SubTitle>
                <Title>{info.title}</Title>
                <Desc>{info.desc}</Desc>
            </Col>
        </Container>;
    }


    const renderExample = () => {
        return <Container fluid="md">
            <Row>
                <Col col={8} lg={6} className="mx-auto my-lg-auto mb-3">
                    <DemoPreview/>
                </Col>
                <Col col={12} lg={6}>
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

        </Container>;
    }


    return <ModernFeaturesSectionRoot className={className}>
        {renderInfo()}
        {renderExample()}
    </ModernFeaturesSectionRoot>;
};

export default ModernFeaturesSection;





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
    
`;



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




const ModernFeaturesSectionRoot = styled.section`
    margin-bottom: 150px;
  z-index: 0;
  position: relative;
`;
