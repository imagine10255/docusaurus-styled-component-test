import {GridThemeProvider, Container, Row, Col, Grid} from 'bear-react-grid';
import * as React from 'react';
import styled, {css} from 'styled-components';


const totalColumn = 24;


const SampleFlexGap = () => {


    /**
     * 範本
     */
    const renderSample = () => {
        return <Container className="sample-container sample-container-color mb-3">
            <GapRow className="sample-row sample-row-color" gap="20px">
                <GapCol col={12} className="sample-col sample-col-1">
                    <div className="sample-content">Col 1</div>
                </GapCol>
                <GapCol col={12} className="sample-col sample-col-2">
                    <div className="sample-content">Col 2</div>
                </GapCol>
            </GapRow>

            <GapRow className="sample-row sample-row-color" gap="20px">
                <GapCol col={12} className="sample-col sample-col-1">
                    <GapRow className="sample-row sample-row-color" gap="20px">
                        <GapCol col={8} className="sample-col sample-col-1-1">
                            <div className="sample-content">Col 1-1</div>
                        </GapCol>
                        <GapCol col={8} className="sample-col sample-col-1-2">
                            <div className="sample-content">Col 1-2</div>
                        </GapCol>
                        <GapCol col={8} className="sample-col sample-col-1-3">
                            <div className="sample-content">Col 1-3</div>
                        </GapCol>
                    </GapRow>
                </GapCol>
                <GapCol col={12} className="sample-col sample-col-2">
                    <GapRow className="sample-row sample-row-color" gap="20px">
                        <GapCol col={8} className="sample-col sample-col-2-1">
                            <div className="sample-content">Col 2-1</div>
                        </GapCol>
                        <GapCol col={8} className="sample-col sample-col-2-2">
                            <div className="sample-content">Col 2-2</div>
                        </GapCol>
                        <GapCol col={8} className="sample-col sample-col-2-3">
                            <div className="sample-content">Col 2-3</div>
                        </GapCol>
                    </GapRow>
                </GapCol>
            </GapRow>
        </Container>;
    }

    return <>
        {renderSample()}
    </>
};

export default SampleFlexGap;

/**
 * 一個Container 幾個子 Col
 * @param colVal
 */

const totalColCount = (colVal: number) => {
    return Math.floor(totalColumn / colVal);
}

/**
 * 一個Col佔比
 * @param colVal
 */
const oneColP = (colVal: number) => {
    return colVal / totalColumn * 100;
}

/**
 * 一個Col佔比
 * @param colVal
 */
const totalGap = (colVal: number) => {
    return totalColCount(colVal) - 1;
}


const GapCol = styled.div<{
    col?: number
}>`
  ${props => css`
    flex: 0 0 calc(${oneColP(props.col)}% - (var(--flex-basic-gap) * (${totalGap(props.col)}) / ${totalColCount(props.col)}));
  `}
`;

const GapRow = styled.div<{
    gap?: string
}>`
    ${props => props.gap && css`
      --flex-basic-gap: ${props.gap};
    `}
    
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: var(--flex-basic-gap);
`;
