import React, {useMemo, useRef, useState} from 'react';
import styled from 'styled-components';
import gridConfig from "@site/src/config/gridTheme";
import {GridThemeProvider} from 'bear-react-grid';
import BearCarousel, {elClassName, BearSlideCard, TBearSlideItemDataList, Controller} from 'bear-react-carousel';
import {vipData, levelOption} from './data';

// Components
import VipLevelCard, {IRules} from './_components/VipLevelCard';



/**
 * VipLevelCardList
 */
const VipLevelCarousel = () => {
    const [currentLv, setCurrentLv] = useState<number>(0);
    const [controller, setController] = useState<Controller>();



    const carouselData: TBearSlideItemDataList = useMemo(() => {
        return vipData.map(row => {
            return {
                key: row.level,
                children: (<BearSlideCard className="py-4">
                    <VipLevelCard
                        rules={row.rule}
                        levelName={`LV ${row.level}`}
                        totalAmount={row.totalAmount}
                        isActive={currentLv === Number(row.level)}
                    />
                </BearSlideCard>)
            };
        });

    }, [currentLv]);


    const renderControlArea = useMemo(() => {
        return <div className="d-flex justify-content-center">
            <ControlArea>
                <select
                    title="level"
                    value={currentLv}
                    onChange={event => handleCarouselGoIndex(Number(event.target.value))}
                >
                    {levelOption?.map(row => <option value={row.value}>{row.text}</option>)}
                </select>
            </ControlArea>
        </div>;
    }, [currentLv]);


    const handleCarouselGoIndex = (index: number) => {
        setCurrentLv(index);
        controller?.slideToSourceIndex(index);
    };


    return <VipLevelCardListRoot>
        <GridThemeProvider gridTheme={gridConfig}>
        {renderControlArea}

            <BearCarousel
                setController={setController}
                isEnableLoop={false}
                isCenteredSlides
                isEnableNavButton
                slidesPerView={1}
                spaceBetween={20}
                height="270px"
                data={carouselData}
                isSlideItemMemo
                breakpoints={{
                    576: {
                        slidesPerView: 'auto'
                    },
                }}
            />

        </GridThemeProvider>
    </VipLevelCardListRoot>;

};

export default VipLevelCarousel;


const ControlArea = styled.div`
  color: #737b8c;
  padding: 10px 0;
`;

const VipLevelCardListRoot = styled.div`
  .${elClassName.navPrevButton}, .${elClassName.navNextButton} {
    top: -50px;
    bottom: unset;
  }

`;
