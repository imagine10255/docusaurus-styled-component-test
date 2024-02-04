import {GridThemeProvider, Grid} from 'bear-react-grid';
import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import Button from '@site/src/components/atoms/Button';
import Select from '@site/src/components/forms/Select';


const FlexboxColumnAlignmentMemory = () => {
    const [justifyContent, setJustifyContent] = useState('normal');
    const [alignItems, setAlignItems] = useState('normal');
    const [alignSelf, setAlignSelf] = useState('normal');

    const justifyContentMap = ['normal', 'flex-start', 'center','flex-end','space-between','space-around','space-evenly'];
    const alignItemMap = ['normal', 'flex-start', 'center','flex-end'];
    const alignSelfMap = ['normal', 'flex-start', 'center','flex-end'];

    return <GridThemeProvider gridTheme={{}}>

        <Grid col={2}>
            <FlexBox style={{
                justifyContent,
                alignItems
            }}>
                <Flex>Flex</Flex>
                <Flex style={{
                    alignSelf,
                }}
                >
                    align-self
                    <Select value={alignSelf}
                            onChange={setAlignSelf}
                            options={alignSelfMap.map(row => {
                                return {text: row,value: row};
                            })}
                    />

                </Flex>
                <Flex>Flex</Flex>
                <LineX/>
                <LineY/>
            </FlexBox>


            <Grid col={2}
                  className="grid-flow-col gap-1 justify-content-start align-items-start align-content-start"
            >
                {justifyContentMap.map(value => {
                    return <Button key={`justifyContent_${value}`}
                                   color={justifyContent === value ? 'success':'gray'}
                                   onClick={() => setJustifyContent(value)}
                    >
                        {value}
                    </Button>
                })}
            </Grid>

            <Flex className="gap-1">
                {alignItemMap.map(value => {
                    return <Button key={`alignItem_${value}`}
                                   color={alignItems === value ? 'danger':'gray'}
                                   onClick={() => setAlignItems(value)}
                    >
                        {value}
                    </Button>
                })}
            </Flex>

        </Grid>

    </GridThemeProvider>
};

export default FlexboxColumnAlignmentMemory;




const LineX = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #76170e;
  bottom: 30px;

  :after {
    position: absolute;
    content: '交錯軸';
    font-size: 10px;
    width: 100%;
    left: 50px;
    top: 2px;
    color: #cb483e;
    text-align: left;
    
  }
`;
const LineY = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #0e7659;
  right: 30px;

  :after {
    position: absolute;
    content: '主軸';
    font-size: 10px;
    width: 200px;
    text-align: left;
    left: 10px;
    top: 0;
    color: #1e9d7a;
    transform: rotate(90deg);
    transform-origin: left;
  }
`;

const Flex = styled.div`
  background-color: #000000;
  flex: 0 0 30px;
  border: 1px solid #858585;
  padding: 2px 8px;
  text-align: center;
  border-radius: 4px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #424242;
  
  
  border-radius: 4px;
  position: relative;
`;


