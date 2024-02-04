import {GridThemeProvider, Container, Row, Col, Grid} from 'bear-react-grid';
import * as React from 'react';
import styled from 'styled-components';


const SampleRow = () => {
    return <GridThemeProvider gridTheme={{}}>
        <Container className="sample-container sample-container-color mb-3">
            <Row className="sample-row sample-row-color">
                <Col col={4}>
                    <div className="sample-col sample-col-1">Col 1</div>
                </Col>
                <Col col={4} >
                    <div className="sample-col sample-col-2">Col 2</div>
                </Col>
                <Col col={4} >
                    <div className="sample-col sample-col-3">Col 3</div>
                </Col>
            </Row>
        </Container>

        <CustomContainer>
            <Row>
                <Col col="auto">
                    <div className="d-flex align-items-center p-2">
                        <div className="mr-2">Container</div>
                        <ColBox className="sample-container-color"/>
                    </div>
                </Col>

                <Col col="auto">
                    <div className="d-flex align-items-center p-2">
                        <div className="mr-2">Row</div>
                        <ColBox className="sample-row-color"/>
                    </div>
                </Col>

                <Col col="auto">
                    <div className="d-flex align-items-center p-2">
                        <div className="mr-2">Col Child</div>
                        <ColBox className="sample-col-1"/>
                        <ColBox className="sample-col-2"/>
                        <ColBox className="sample-col-3"/>
                    </div>
                </Col>
            </Row>
        </CustomContainer>
    </GridThemeProvider>
};

export default SampleRow;


const ColBox = styled.div`
    width: 20px;
    height: 20px;
`;


const CustomContainer = styled.div`
    border: 1px solid #0e7659;
    width: 400px;
`;
