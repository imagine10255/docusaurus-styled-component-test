import styled from 'styled-components';
import {Container, Grid, media, Flex} from 'bear-react-grid';
import React, {useEffect, useCallback, useRef} from 'react';
import gridTheme from '@site/src/config/gridTheme';
import {useDragResize} from '@site/src/views/Home/_components/ResponsiveSection/useDragResize';
import clsx from 'clsx';


const Browser = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const {dragRef, controlRef} = useDragResize();

    const demoUrl = `//${window.location.hostname}${window.location.port ? `:${window.location.port}`: ''}/frame-responsive`;


    const browserTabs = [
        {title: 'Bear React Grid - CSS in js grid system', favicon: '/img/logo.svg'},
        {title: 'FoodConf - First good food', favicon: '/img/responsive/browser/food.svg'},
        {title: 'Bear React Carousel - Best slide', favicon: '/img/responsive/browser/carousel.svg'},
    ];

    useEffect(() => {
        const rb = new ResizeObserver(iframeResize);
        if(dragRef.current){
            rb.observe(dragRef.current);
        }
        return () => {
            if(dragRef.current){
                rb.unobserve(dragRef.current);
            } else {
                rb.disconnect();
            }
        }
    }, []);


    const iframeResize = useCallback(() => {
        if(dragRef.current && rootRef.current){
            const clientWidth = dragRef.current.clientWidth;
            let breakpointSize = 'xs';

            if(clientWidth >= 1234){
                breakpointSize = 'xxl';
            }else if(clientWidth >= 1200){
                breakpointSize = 'xl';
            }else if(clientWidth >= 992){
                breakpointSize = 'lg';
            }else if(clientWidth >= 768){
                breakpointSize = 'md';
            } else if(clientWidth >= 576){
                breakpointSize = 'sm';
            }

            rootRef.current.dataset['breakpoint'] = breakpointSize;
        }
    }, []);


    return <BrowserRoot ref={rootRef}>
        <SizeBar/>
        <Container fluid="md">

            <Breakpoints>
                <Breakpoint>xs</Breakpoint>
                <Breakpoint>sm</Breakpoint>
                <Breakpoint>md</Breakpoint>
                <Breakpoint>lg</Breakpoint>
                <Breakpoint>xl</Breakpoint>
                <Breakpoint>xxl</Breakpoint>
            </Breakpoints>

            <CardBg className="pt-5" ref={dragRef}>
                <ResizeBar ref={controlRef}/>

                <Header>
                    <HeaderWrapper col="minmax(50px, auto) minmax(50px, 400px) minmax(50px, auto)">
                        <Flex className="gap-2 align-items-center">
                            <Round/>
                            <Round/>
                            <Round className="mr-3"/>

                            <Navs>
                                <svg width="24" height="24" fill="none">
                                    <path d="m15 7-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg width="24" height="24" fill="none" className="rotate-180">
                                    <path d="m15 7-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Navs>
                        </Flex>

                        <Url>
                            <LockIcon viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                      clipRule="evenodd"></path>
                            </LockIcon>
                            <span className="text-overflow">foods-conf.com</span>
                        </Url>

                        <PointSvg width="24" height="24" fill="none" className="justify-self-end align-self-center">
                            <path
                                d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </PointSvg>
                    </HeaderWrapper>

                    <Flex>
                        {browserTabs.map((row, index) => {
                            return <BrowserTab className="overflow-hidden flex-fill" key={row.title}>
                                <img src={row.favicon} alt={row.title} height={14} className={clsx('mr-1', {'filter-gray': index !== 1})}/>
                                <span className="text-overflow" >{row.title}</span>
                            </BrowserTab>
                        })}

                    </Flex>

                </Header>
                <IFrame src={demoUrl}/>
            </CardBg>
        </Container>
    </BrowserRoot>;
};

export default Browser;




const Navs = styled.div`
    display: none;
`;

const PointSvg = styled.svg`
    display: none;
`;

const Breakpoint = styled.div`
  position: absolute;
  top: 0;
  background-color: rgb(44, 44, 44);
  padding: 5px 2px;
  font-size: 12px;
  border-radius: 4px;
  width: 30px;
  text-align: center;
  margin-left: 5px;
  
  :nth-child(1), :nth-child(1):before{
    background-color: rgb(100, 53, 201);
  }

  :nth-child(2) {
    left: 576px;
  }

  :nth-child(3) {
    left: 768px;
  }

  :nth-child(4) {
    left: 992px;
  }

  :nth-child(5) {
    left: 1200px;
  }

  :nth-child(6) {
    left: 1234px;
  }

  :before {
    content: '';
    width: 1px;
    height: 100px;
    background-color: rgb(61, 61, 61);
    position: absolute;
    top: 0;
    bottom: 0;
    left: -5px;
  }
`;

const Breakpoints = styled.div`
    display: flex;
  flex-direction: row;
  position: relative;
`;


const LockIcon = styled.svg`
    height: 15px;
  margin-right: 7px;
`;


const Round = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(236 106 95);

  :nth-child(2) {
    background-color: rgb(244 191 80);
  }

  :nth-child(3) {
    background-color: rgb(97 196 84);
  }
`;


const HeaderWrapper = styled(Grid)`
    height: 44px;
  border-radius: 10px 10px 0 0;
  padding: 10px 20px;
  color: rgb(100, 116, 139);
`;

const Url = styled.div`
    background-color: rgb(44, 44, 44);
  color: rgb(100, 116, 139);
  height: 100%;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 12px;
  padding-left: 10px;
  
`;

const BrowserTab = styled.div`
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: rgb(100 116 139);
  padding: 10px;

  :nth-child(1) {
    border-radius: 0 10px 0 0;
  }

  :nth-child(2) {
    background-color: transparent;
    color: #cbcbcb;
  }

  :nth-child(3) {
    border-radius: 10px 0 0 0;
  }


`;

const BrowserTabs = styled(Grid)`
  height: 33px;
  border-bottom: 1px solid #000;
`;

const Header = styled.div`
  background-color: #3c4043;
  box-shadow: inset 0 1px 0 0 #ffffff1a;
  border-radius: 10px 10px 0 0;
`;

const SizeBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(45, 45, 45, 0.56);
  border-top: 1px solid #424242;
  border-bottom: 1px solid #424242;
  top: 100px;
  position: relative;
`;


const ResizeBar = styled.div`
    width: 5px;
    height: 30px;
    background-color: #64748b99;
    position: absolute;
    right: -12px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 4px;
    cursor: ew-resize;
    user-select: none;
`;

const IFrame = styled.iframe`
  height: 380px;
  width: 100%;
`;



const CardBg = styled.div`
    position: relative;
  min-width: 285px;
  max-width: 100%;
  
  ${media.sm`
    min-width: 320px;
    width: 400px;
    max-width: ${gridTheme.containerMaxWidths.sm}px;
  `}
  ${media.md`
    max-width: ${gridTheme.containerMaxWidths.md}px;
  `}
  ${media.lg`
    max-width: ${gridTheme.containerMaxWidths.lg}px;
  `}
  ${media.xl`
    max-width: ${gridTheme.containerMaxWidths.xl}px;
  `}
  ${media.xxl`
    max-width: ${gridTheme.containerMaxWidths.xxl}px;
  `}
`;




const BrowserRoot = styled.div`
  background: center;
  background-image: url("/img/simple-example/bg.webp");
  background-size: 141.5rem 100%;
  overflow: hidden;
  
  
  &[data-breakpoint="sm"], &[data-breakpoint="md"], &[data-breakpoint="lg"], &[data-breakpoint="xl"], &[data-breakpoint="xxl"]{
      ${Breakpoint}:nth-child(2), ${Breakpoint}:nth-child(2):before{
          color: #fff;
          background-color: rgb(100, 53, 201);
      }
  }
  &[data-breakpoint="md"], &[data-breakpoint="lg"], &[data-breakpoint="xl"], &[data-breakpoint="xxl"]{
      ${Breakpoint}:nth-child(3), ${Breakpoint}:nth-child(3):before{
          color: #fff;
          background-color: rgb(100, 53, 201);
      }
    ${Navs}, ${PointSvg}{
      display: flex;
    }
  }
  &[data-breakpoint="lg"], &[data-breakpoint="xl"], &[data-breakpoint="xxl"]{
      ${Breakpoint}:nth-child(4), ${Breakpoint}:nth-child(4):before{
          color: #fff;
          background-color: rgb(100, 53, 201);
      }
  }
  &[data-breakpoint="xl"], &[data-breakpoint="xxl"]{
      ${Breakpoint}:nth-child(5), ${Breakpoint}:nth-child(5):before{
          color: #fff;
          background-color: rgb(100, 53, 201);
      }
  }
  &[data-breakpoint="xxl"]{
      ${Breakpoint}:nth-child(6), ${Breakpoint}:nth-child(6):before{
          color: #fff;
          background-color: rgb(100, 53, 201);
      }
  }
  

`;
