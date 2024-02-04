import {GridThemeProvider, Flex} from 'bear-react-grid';
import * as React from 'react';
import styled from 'styled-components';


const SampleFlex = () => {


    const renderRemark = () => {
        return <CustomContainer>

        </CustomContainer>;
    }

    const renderSample = () => {
        return <Flex
            className="sample-container-color justify-content-between align-items-center mb-2"
        >
            <div className="sample-row-color">
                <div className="sample-content">Flex Child 1</div>
            </div>
            <div className="sample-row-color">
                <div className="sample-content">Flex Child 2</div>
            </div>
            <div className="sample-row-color">
                <div className="sample-content">Flex Child 3</div>
            </div>
            <div className="sample-row-color">
                <div className="sample-content">Flex Child 4</div>
            </div>
        </Flex>;
    }

    return <GridThemeProvider gridTheme={{}}>
        {renderSample()}
        {/*{renderRemark()}*/}
    </GridThemeProvider>
};

export default SampleFlex;



const CustomContainer = styled.div`
    border: 1px solid #0e7659;
    width: 320px;
`;
