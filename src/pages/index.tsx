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
            <GridThemeProvider gridTheme={gridTheme}>
                <Home/>

                <Footer/>

            </GridThemeProvider>

            <GlobalStyle/>
        </Layout>
    );
}


