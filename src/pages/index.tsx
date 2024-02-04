import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {GridThemeProvider} from 'bear-react-grid';
import styled from 'styled-components';
import gridTheme from '@site/src/config/gridTheme';
import GlobalStyle from '@site/src/components/organize/home/GlobalCSS';

import Footer from '@site/src/components/organize/home/Footer';
import Home from '@site/src/views/Home';
import 'bear-react-carousel/dist/index.css';
import 'bear-react-grid/dist/index.css';



export default function HomePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.tagline}
            description={siteConfig.title}

            noFooter={true}
        >
            <Ban>
                TEst
            </Ban>
            <GridThemeProvider gridTheme={gridTheme}>
                {/*<Home/>*/}

                {/*<Footer/>*/}

            </GridThemeProvider>

            <GlobalStyle/>
        </Layout>
    );
}


const Ban = styled.div`
    color: red;
`;


const Main = styled.main`
  //background: rgb(31, 31, 71);
  //z-index: -1;
`;


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
