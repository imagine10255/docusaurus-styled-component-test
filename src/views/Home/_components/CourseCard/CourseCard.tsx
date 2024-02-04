import styled from 'styled-components';
import React from 'react';
import { Grid } from 'bear-react-grid';
import MyLink from '@site/src/pages/_components/MyLink';
import PreviewCard from '@site/src/pages/_components/PreviewCard';

interface IProps extends FCProps {

}

const CourseCard = ({
    className,
}: IProps) => {
    return <CourseCardRoot className={className} gap="20px">

        <CurriculumWrapper columns={1} className="h-100">
            <CourseDetailCardTitle>FEATURED COURSE</CourseDetailCardTitle>
            <MyLinkList>
                {Array.from({length: 5}).map((row, index) => {
                    return <MyLink key={`link_${index}`} no={index+1}/>;
                })}
            </MyLinkList>
        </CurriculumWrapper>

        <PreviewCard/>
    </CourseCardRoot>;
};

export default CourseCard;




const MyLinkList = styled.div`
  height: 100%;
  overflow: auto;

  mask-image: linear-gradient(rgb(255, 255, 255) 80%, rgba(255, 255, 255, 0) 100%);
`;



const CourseDetailCardTitle = styled.p`
  font-size: 13px;
  font-weight: 600;

`;

const CurriculumWrapper = styled(Grid)`
  width: 287px;
  overflow: hidden;

`;


const CourseCardRoot = styled(Grid)`
    position: relative;
    height: 400px;
    padding: 20px;
    border-radius: 20px;

    background: rgba(15, 14, 71, 0.3);
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 0.5px inset;

`;
