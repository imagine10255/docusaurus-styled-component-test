import styled from 'styled-components';
import {Grid, Flex, Container} from 'bear-react-grid';
import React from 'react';
import Link from '@docusaurus/Link';

interface IProps extends FCProps {

}

const Footer = ({
    className,
}: IProps) => {
    return <FooterRoot className={className}>
        <Container>
            <Grid col={2} sm={4} className="mb-5 g-4">
                <Flex className="flex-column gap-2">
                    <NavTitle>Getting Started</NavTitle>
                    <NavLink to="/docs/why">Why Bear Grid</NavLink>
                    <NavLink to="/docs/getting-started">Getting Started</NavLink>
                    <NavLink to="/docs/config">Config</NavLink>
                    <NavLink to="/docs/utilities">Utilities</NavLink>
                    <NavLink to="/docs/breakpoints">Breakpoints</NavLink>
                    <NavLink to="/docs/category/grid-system">Grid System</NavLink>
                    <NavLink to="/docs/category/layout">CSS Grid</NavLink>
                </Flex>
                <Flex className="flex-column gap-2">
                    <NavTitle>Faq</NavTitle>
                    <NavLink to="/docs/faqs/started-nextjs">Started NextJS</NavLink>
                    <NavLink to="/docs/faqs/migration-to-5">Migration</NavLink>
                </Flex>

                <Flex className="flex-column gap-2">
                    <NavTitle>Community</NavTitle>
                    <NavLink to="https://github.com/imagine10255/bear-react-grid">GitHub</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </Flex>

                <Flex className="flex-column gap-2">
                    <NavTitle>Other Library</NavTitle>
                    <NavLink href="https://github.com/imagine10255/bear-react-carousel">Bear React Carousel</NavLink>
                    <NavLink href="https://github.com/imagine10255/bear-react-table">Bear React Table</NavLink>
                    <NavLink href="https://github.com/imagine10255/bear-react-locale">Bear React Locale</NavLink>
                    <NavLink href="https://github.com/imagine10255/bear-react-router-hash">Bear React Router Hash</NavLink>
                    <NavLink href="https://github.com/imagine10255/bear-react-toaster">Bear React Toaster</NavLink>
                    <NavLink href="https://github.com/imagine10255/bear-react-dropdown">Bear React Dropdown</NavLink>
                    <NavLink href="https://github.com/imagine10255/bear-react-datepicker">Bear React Datepicker</NavLink>
                    <NavLink href="https://github.com/imagine10255/bear-react-iconsvg">Bear React IconSvg</NavLink>
                </Flex>
            </Grid>

            <SiteInfo>
                <Logo src="/img/logo.svg"/>
                <p>Bear React Grid</p>
            </SiteInfo>

        </Container>
    </FooterRoot>;
};

export default Footer;






const NavLink = styled(Link)`
    font-size: 15px;
    color: rgb(148, 163, 184);
`;

const NavTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
`;


const SiteInfo = styled.div`
    display: flex;
    flex-direction: row;
  align-items: center;
  border-top: 1px solid rgb(51, 65, 85);
  
  padding-top: 20px;
  font-size: 23px;
  //margin-bottom: 40px;
  gap: 8px;
  
`;


const Logo = styled.img`
    height: 30px;
`;

const FooterRoot = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
