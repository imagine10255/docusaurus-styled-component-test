import * as React from 'react';
import {Grid, Container, Row, Col, GridThemeProvider, IGridSetting} from 'bear-react-grid';


const gridTheme: IGridSetting = {
    spacer: '1rem',
    gutter: '.625rem',
    gridColumns: 12,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1141,
    },
}


const Base = () => {
    return <GridThemeProvider gridTheme={gridTheme}>
        <Container>
            <Row>
                <Col col={12} md style={{background: '#760e0e', textAlign: 'center'}}>col</Col>
                <Col col={12} md style={{background: '#6c760e', textAlign: 'center'}}>col</Col>
                <Col col={12} md style={{background: '#0e7659', textAlign: 'center'}}>col</Col>
                <Col col={12} md style={{background: '#760e6e', textAlign: 'center'}}>col</Col>
            </Row>
        </Container>
    </GridThemeProvider>

}

export default Base;



