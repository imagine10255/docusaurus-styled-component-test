import {GridThemeProvider, Container, Row, Col, Grid} from 'bear-react-grid';
import * as React from 'react';
import styled from 'styled-components';
import {CSSProperties} from 'react';



const SampleGridSystemNest = () => {

    /**
     * 範本
     */
    const renderSample = () => {
        return <Container className="sample-container sample-container-color">

            <Row className="sample-row sample-row-color" style={{'--bear-gutter-x': '20px'} as CSSProperties}>
                <Col col={12} className="sample-col sample-col-1">
                    <div className="sample-content">Col 1</div>
                </Col>
                <Col col={12} className="sample-col sample-col-2">
                    <div className="sample-content">Col 2</div>
                </Col>
            </Row>

            <Row className="sample-row sample-row-color" style={{'--bear-gutter-x': '20px'} as CSSProperties}>
                <Col col={12} className="sample-col sample-col-1">
                    <Row className="sample-row sample-row-color" style={{'--bear-gutter-x': '20px'} as CSSProperties}>
                        <Col col={8} className="sample-col sample-col-1-1">
                            <div className="sample-content">Col 1-1</div>
                        </Col>
                        <Col col={8} className="sample-col sample-col-1-2">
                            <div className="sample-content">Col 1-2</div>
                        </Col>
                        <Col col={8} className="sample-col sample-col-1-3">
                            <div className="sample-content">Col 1-3</div>
                        </Col>
                    </Row>
                </Col>
                <Col col={12} className="sample-col sample-col-2">
                    <Row className="sample-row sample-row-color" style={{'--bear-gutter-x': '20px'} as CSSProperties}>
                        <Col col={8} className="sample-col sample-col-2-1">
                            <div className="sample-content">Col 2-1</div>
                        </Col>
                        <Col col={8} className="sample-col sample-col-2-2">
                            <div className="sample-content">Col 2-2</div>
                        </Col>
                        <Col col={8} className="sample-col sample-col-2-3">
                            <div className="sample-content">Col 2-3</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    }

    return <>
        {renderSample()}
    </>
};

export default SampleGridSystemNest;
