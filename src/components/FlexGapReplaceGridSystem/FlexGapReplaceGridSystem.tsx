import {GridThemeProvider, Container, Row, Col, Grid, Flex} from 'bear-react-grid';
import * as React from 'react';
import styled from 'styled-components';
import SampleGridSystemNest from '@site/src/components/FlexGapReplaceGridSystem/SampleGridSystemNest';
import SampleFlexGap from '@site/src/components/FlexGapReplaceGridSystem/SampleFlexGap';
import {CSSProperties, useState} from 'react';
import Button from '@site/src/components/atoms/Button';




const FlexGapReplaceGridSystem = () => {

    const [isVisibleLine, setVisibleLine] = useState<boolean>(true);

    const gutter = '10px';

    /**
     * 標示
     */
    const renderRemark = () => {
        return <CustomContainer className="mb-3">
            <Row>
                <Col col="auto">
                    <Flex className="align-items-center p-2">
                        <div className="mr-2">Container</div>
                        <ColBox className="sample-container-color"/>
                    </Flex>
                </Col>

                <Col col="auto">
                    <Flex className="align-items-center p-2">
                        <div className="mr-2">Row</div>
                        <ColBox className="sample-row-color"/>
                    </Flex>
                </Col>

                <Col col="auto">
                    <Flex className="align-items-center p-2">
                        <div className="mr-2">Col</div>
                        <ColBox className="sample-col-1"/>
                        <ColBox className="sample-col-2"/>
                        <ColBox className="sample-col-3"/>
                    </Flex>
                </Col>
            </Row>
        </CustomContainer>
    }

    return <GridThemeProvider gridTheme={{}}>
        <Flex>
            {renderRemark()}

            <Button color={isVisibleLine ? 'gray': 'primary'} className="mb-3 ml-2" onClick={() => setVisibleLine(curr => !curr)}>
                {isVisibleLine ? 'Hidden Line': 'Visible Line'}
            </Button>

        </Flex>


        <div className="position-relative">


            Grid System Nest
            <SampleGridSystemNest/>

            Flex + Gap Nest
            <SampleFlexGap/>

            {isVisibleLine && <>
                <LineH style={{left: gutter}}/>
                <LineH style={{right: gutter}}/>
                <LineH style={{left: `calc(50% - ${gutter})`}}/>
                <LineH style={{right: `calc(50% - ${gutter})`}}/>

                <LineH style={{left: `calc(19.3% - ${gutter})`}}/>
                <LineH style={{left: `calc(33.3% - ${gutter})`}}/>
                {/*<LineH style={{left: `calc(25% + ${gutter})`}}/>*/}

                {/*<LineH style={{right: `calc(25% - ${gutter})`}}/>*/}
                {/*<LineH style={{right: `calc(25% + ${gutter})`}}/>*/}
            </>}

        </div>


    </GridThemeProvider>
};

export default FlexGapReplaceGridSystem;


const LineH = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #ff320e;
`;




const ColBox = styled.div`
    width: 20px;
    height: 20px;
`;


const CustomContainer = styled.div`
    border: 1px solid #0e7659;
    width: 400px;
`;
