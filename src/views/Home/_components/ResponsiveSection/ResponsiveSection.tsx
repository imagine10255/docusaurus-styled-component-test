import {Container, Grid, media, Col} from 'bear-react-grid';
import styled from 'styled-components';
import React, {useEffect} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import MDXContent from '@theme/MDXContent';


import DemoCode from './_components/demo-code.mdx';
import Browser from '../ResponsiveSection/_components/Browser';


interface IProps extends FCProps {

}

const ResponsiveSection = ({
  className,
}: IProps) => {


    const renderInfo = () => {
        const info = {
            subTitle: 'Responsive Web Design',
            title: 'Mobile First.',
            desc: 'We\'ve got first-class CSS grid support, and supports auxiliary class Class CSS, no need to define Styled-components for an attribute',
        }

        return <Container>
            <Col col={12} xl={7} className="d-flex flex-column gap-2 text-center text-xl-left">
                <SubTitle>{info.subTitle}</SubTitle>
                <Title>{info.title}</Title>
                <Desc>{info.desc}</Desc>
            </Col>
        </Container>;
    }


    const renderBrowser = () => {
        return <BrowserOnly>
            {() => {
                return <Browser/>;
            }}
        </BrowserOnly>;
    }

    const renderExample = () => {
        return <Container>
            <CodeContent className="filter-mask-b">
                <BrowserOnly>
                    {() => {
                        return <MDXContent>
                            <DemoCode/>
                        </MDXContent>
                    }}
                </BrowserOnly>
            </CodeContent>
        </Container>;
    }

    return <ResponsiveSectionRoot className={className}>
        {renderInfo()}
        {renderBrowser()}
        {renderExample()}
    </ResponsiveSectionRoot>;
};


export default ResponsiveSection;




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



const ResponsiveSectionRoot = styled.section`
    margin-bottom: 60px;
  z-index: 0;
  position: relative;

`;




