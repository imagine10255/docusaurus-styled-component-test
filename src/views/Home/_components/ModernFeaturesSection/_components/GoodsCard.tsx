import styled from 'styled-components';
import {Grid, media} from 'bear-react-grid';
import React from 'react';

interface IData {
    name: string
    desc: string
    imageUrl: string
}

interface IProps extends FCProps {
   data: IData
}

const GoodsCard = ({
    data,
}: IProps) => {
    return <GoodsCardRoot col={1} sm={2} className="justify-content-start">
        <img src={data.imageUrl} className="g-row-2 h-inherit img-cover" alt="Bruce Lee"/>
        <Name className="align-self-end">{data.name}</Name>
        <Title>{data.desc}</Title>
    </GoodsCardRoot>;
};

export default GoodsCard;


const Title = styled.div`
    color: rgb(148, 163, 184);
  position: absolute;
  left: 10px;
  bottom: 30px;

  ${media.sm`
    position: static;
  `}
`;

const Name = styled.div`
    color: #fff;
  position: absolute;
  left: 10px;
  bottom: 10px;
  
  ${media.sm`
    position: static;
  `}
  
`;



const GoodsCardRoot = styled(Grid)`
  position: relative;
  height: 100px;
  background-color: rgb(51 65 85);

  border-radius: 8px;
  overflow: hidden;


`;
