import {GridThemeProvider, Container, Row, Col, Grid, Flex, auto} from 'bear-react-grid';
import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import Button from '@site/src/components/atoms/Button';
import Select from '@site/src/components/forms/TextField';


const GridAlignmentMemory = () => {
    const [justifyContent, setJustifyContent] = useState('normal');
    const [justifyItems, setJustifyItem] = useState('normal');
    const [justifySelf, setJustifySelf] = useState('normal');
    const [alignItems, setAlignItems] = useState('normal');
    const [alignContent, setAlignContent] = useState('normal');
    const [alignSelf, setAlignSelf] = useState('normal');


    const contentMap = ['normal', 'flex-start', 'center','flex-end','space-between','space-around','space-evenly'];
    const itemMap = ['normal', 'flex-start', 'center','flex-end'];
    const selfMap = ['normal', 'flex-start', 'center','flex-end'];


    return <GridThemeProvider>


        <Grid col={2} className="mb-3">

            <GridBox
                style={{
                    gridTemplateColumns: auto(3),
                    gridTemplateRows: auto(1),
                    justifyContent,
                    justifyItems,
                    alignItems,
                    alignContent
                }}
            >
                <FlexBox>Flex Col</FlexBox>

                    <FlexBox col="column" style={{
                        alignSelf,
                    }}
                    >
                        align-self
                        <Select value={alignSelf}
                            onChange={setAlignSelf}
                            options={selfMap.map(row => {
                                return {text: row,value: row};
                            })}
                        />
                    </FlexBox>

                <FlexBox>Flex Col</FlexBox>


                <LineX/>
                <LineY/>
            </GridBox>


            <Flex className="gap-3">


                <Flex col="column" className="gap-1 align-items-start">

                    Align Item

                    {itemMap.map(value => {
                        return <Button key={`alignItem_${value}`}
                                       color={alignItems === value ? 'primary':'gray'}
                                       onClick={() => setAlignItems(value)}
                        >
                            {value}
                        </Button>
                    })}
                </Flex>

                <div className="gap-1 d-flex flex-column align-items-start">
                    Align Content

                    {itemMap.map(value => {
                        return <Button key={`alignContent_${value}`}
                                       color={alignContent === value ? 'danger':'gray'}
                                       onClick={() => setAlignContent(value)}
                        >
                            {value}
                        </Button>
                    })}
                </div>



            </Flex>

            <Flex col="column" className="g-3">

                Justify Item

                <Grid col={4} className="gap-1 justify-content-start align-content-start">
                    {itemMap.map(value => {
                        return <Button key={`justifyItem_${value}`}
                                       color={justifyItems === value ? 'primary':'gray'}
                                       onClick={() => setJustifyItem(value)}
                        >
                            {value}
                        </Button>
                    })}
                </Grid>

                Justify Content

                <Grid col={4} className="gap-1 justify-content-start align-content-start">
                    {contentMap.map(value => {
                        return <Button key={`justifyContent_${value}`}
                                       color={justifyContent === value ? 'success':'gray'}
                                       onClick={() => setJustifyContent(value)}
                        >
                            {value}
                        </Button>
                    })}
                </Grid>



            </Flex>


        </Grid>

    </GridThemeProvider>
};

export default GridAlignmentMemory;

const LineX = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #0e7659;
  bottom: 30px;

  :after {
    position: absolute;
    content: '主軸';
    font-size: 10px;
    width: 100%;
    left: 50px;
    top: 2px;
    color: #1e9d7a;
    text-align: left;
    
  }
`;
const LineY = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #76170e;
  right: 30px;

  :after {
    position: absolute;
    content: '交錯軸';
    font-size: 10px;
    width: 200px;
    text-align: left;
    left: 10px;
    top: 0;
    color: #cb483e;
    transform: rotate(90deg);
    transform-origin: left;
  }
`;

const FlexBox = styled(Flex)`
  background-color: #000000;
  flex: 0 0 auto;
  border: 1px solid #858585;
  text-align: center;
  border-radius: 4px;
`;

const GridBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  background-color: #424242;
  
  align-items: center;
  
  border-radius: 4px;
  position: relative;
`;


