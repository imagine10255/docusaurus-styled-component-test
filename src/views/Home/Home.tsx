import styled from 'styled-components';
import Header from './_components/Header';
import WaveWrapper from './_components/WaveWrapper';
import TutorialSection from './_components/TutorialSection';
import BuildAnythingSection from './_components/BuildAnythingSection';
import SayingSection from './_components/SayingSection';
import ModernFeaturesSection from './_components/ModernFeaturesSection';
import ResponsiveSection from './_components/ResponsiveSection';
import React from 'react';

interface IProps extends FCProps {

}

const Home = ({
    className,
}: IProps) => {
    return <HomeRoot className={className}>
            <Header/>

            <Wrapper>
                <WaveWrapper/>
                <TutorialSection/>
            </Wrapper>

            <Bg>
                <BuildAnythingSection/>
            </Bg>

            <SayingSection/>

            <ModernFeaturesSection/>

            <ResponsiveSection/>

    </HomeRoot>;
};

export default Home;




const Bg = styled.div`
  background: linear-gradient(to bottom, #202045 0%, #1c1c1e 50%, #1c1c1e 100%);
  margin-bottom: 150px;
`;

const Wrapper = styled.div`
  //min-height: 800px;
  position: relative;
  padding-top: 230px;
  z-index: 0;
`;



const HomeRoot = styled.main`

`;
