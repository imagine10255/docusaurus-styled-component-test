import styled, {css} from 'styled-components';
import React from 'react';
import {media, Grid, Flex, auto} from 'bear-react-grid';
import Icons from './Icons';

const DemoPreview = () => {
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const renderInfo = () => {
        return <Flex className="flex-column align-content-start p-3 row-gap-3">
            <Flex className="justify-content-between">
                <Title>Classic Utility Jacket</Title>
                <Price>$100.00</Price>
            </Flex>

            <Stock className="mb-4">In Stock</Stock>

            <Flex className="justify-content-start gap-2">
                {sizes.map(size => <Size key={size} type="button">{size}</Size>)}
            </Flex>

            <Hr/>

            <Grid col="1fr auto" sm={`${auto(2)} 1fr`}>
                <div className="g-col-2 g-col-sm-1">
                    <Button type="button" className="w-100" color="blank">Buy now</Button>
                </div>

                <Button type="button" className="w-100">Add to bag</Button>

                <HeartButton type="button" className="justify-self-end">
                    <Icons.Heart/>
                </HeartButton>
            </Grid>

            <Free>Free shipping on all continental US orders.</Free>
        </Flex>;
    }

    return <CardRoot col={1} xl="192px auto">
        <GoodsPhoto/>

        {renderInfo()}
    </CardRoot>;
};

export default DemoPreview;


const Free = styled.p`
  color: rgb(68, 68, 68);
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 18px;
  border-radius: 8px;
  border: 1px solid rgb(229, 231, 235);

  ${props => props.color === 'blank' && css`
    background-color: #000;
    color: #fff;
    border-color: #000;
  `}
`;


const HeartButton = styled(Button)`
  padding: 12px;
`;


const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(229, 231, 235);
`;

const Size = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 14px;
  background-color: #fff;
  transition: border-color .3s;

  :hover {
    border-color: #6c757d;
  }


  :nth-child(1) {
    background-color: #000;
    color: #fff;
    font-weight: 600;
  }
`;


const Stock = styled.p`
  color: rgb(52, 52, 52);
  font-size: 16px;
`;


const Price = styled.div`
  color: #6c757d;
  font-weight: 700;
  font-size: 20px;
`;


const Title = styled.h3`
  color: rgb(17 24 39);
  font-weight: 700;
  font-size: 20px;
`;


const GoodsPhoto = styled.div`
  height: 150px;
  background: no-repeat center;
  background-size: cover;
  background-image: url("/img/simple-example/goods.webp");
  border-radius: 8px 8px 0 0;
  
  ${media.xl`
    height: 100%;
    border-radius: 8px 0 0 8px;
  `}

`;

const CardRoot = styled(Grid)`
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
`;
