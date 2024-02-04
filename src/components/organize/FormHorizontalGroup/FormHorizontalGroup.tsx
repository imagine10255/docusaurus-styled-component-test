import {Col, Grid,Row} from 'bear-react-grid';
import clsx from 'clsx';
import React, {useId} from 'react';
import styled, {css} from 'styled-components';

import FormProviderProvider from './FormProvider';



interface IProps extends FCChildrenProps {
    dataDirection?: 'column'|'row'
    label?: string
    isRequired?: boolean
}

const FormHorizontalGroup = ({
    style,
    className,
    children,
    dataDirection = 'row',
    isRequired = false,
    label,
}: IProps) => {
    const htmlForId = useId();

    return (<FormHorizontalGroupRoot col="110px 1fr" className={clsx(className, 'gy-4')} style={style}>
        <FormLabel isRequired={isRequired} htmlFor={htmlForId}>{label}</FormLabel>
        <FormData dataDirection={dataDirection}>
            <FormProviderProvider htmlForId={htmlForId}>
                {children}
            </FormProviderProvider>
        </FormData>
    </FormHorizontalGroupRoot>);
};


export default FormHorizontalGroup;




const FormLabel = styled.label<{
    isRequired: boolean,
}>`
    color: #7d8490;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: right;
    user-select: none;
    padding-top: 10px;


    ${props => props.isRequired && css`
        :before{
            content: '＊';
            font-size: 12px;
            color: var(--danger-color);
        }
    `}
`;


const FormData = styled.div<{
    dataDirection?: 'column'|'row',
}>`
    color: #7d8490;
    font-size: 14px;
    display: flex;
    position: relative;

    align-items: center;
    min-height: var(--form-height);
    flex-direction: ${props => props.dataDirection};

    ${props => props.dataDirection === 'column' && css`
         align-items: flex-start;
    `}
`;

const FormHorizontalGroupRoot = styled(Grid)`
    min-height: var(--form-height);
`;
