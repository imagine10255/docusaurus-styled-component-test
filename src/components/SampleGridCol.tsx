import {GridThemeProvider, Row, Col, Grid} from 'bear-react-grid';
import * as React from 'react';
import styled from 'styled-components';


const SampleGridCol = () => {


    const renderRemark = () => {
        return <CustomContainer>
            <Row>
                <Col col="auto">
                    <div className="d-flex align-items-center p-2">
                        <div className="mr-2">Grid</div>
                        <ColBox className="sample-container-color"/>
                    </div>
                </Col>

                <Col col="auto">
                    <div className="d-flex align-items-center p-2">
                        <div className="mr-2">Grid Col</div>
                        <ColBox className="sample-col-1-1"/>
                        <ColBox className="sample-col-1-2"/>
                        <ColBox className="sample-col-2-1"/>
                        <ColBox className="sample-col-2-2"/>
                    </div>
                </Col>
            </Row>
        </CustomContainer>;
    }

    const renderSample = () => {
        return <Grid
            col={3}
            className="sample-container-color align-items-center mb-2"
        >
            <div className="g-col-2 sample-col sample-col-1-1">
                <div className="sample-content">Grid Col 1</div>
            </div>
            <div className="g-col-3 sample-col sample-col-1-2 h-100">
                <div className="sample-content h-100">Grid Col 2</div>
            </div>
            <div className="sample-col sample-col-1-3">
                <div className="sample-content">Grid Col 3</div>
            </div>
            <div className="sample-col sample-col-2-1">
                <div className="sample-content">Grid Col 4</div>
            </div>
            <div className="sample-col sample-col-2-2">
                <div className="sample-content">Grid Col 5</div>
            </div>
            <div className="sample-col sample-col-2-3">
                <div className="sample-content">Grid Col 6</div>
            </div>
        </Grid>;
    }

    return <GridThemeProvider gridTheme={{}}>
        {renderSample()}
        {renderRemark()}
    </GridThemeProvider>
};

export default SampleGridCol;


const ColBox = styled.div`
    width: 20px;
    height: 20px;
`;


const CustomContainer = styled.div`
    border: 1px solid #0e7659;
    width: 320px;
`;
