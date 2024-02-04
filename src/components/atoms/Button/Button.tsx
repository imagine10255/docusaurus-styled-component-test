import {ReactEventHandler} from 'react';
import styled, {css} from 'styled-components';



interface IProps extends FCChildrenProps {
    color?: 'primary'| 'success'| 'danger' | 'gray' |'grayDanger'| 'info'
    size?: 'extraSmall'| 'small' | 'large'
    shape?: 'default' | 'circle' | 'raised'
    isBlock?: boolean
    isOutline?: boolean
    type?: 'button' | 'submit'|'reset'
    disabled?: boolean
    onClick?: (e?: React.MouseEvent) => void
    onMouseDown?: (e?: React.MouseEvent) => void
    stopPropagation?: boolean
    isLink?: boolean
    tabIndex?: number
}

/**
 * Button
 */
const Button = ({
    className,
    style,
    children,
    color,
    type = 'button',
    size,
    isBlock = false,
    isOutline = false,
    onClick,
    onMouseDown,
    disabled = false,
    isLink = false,
    stopPropagation = false,
    tabIndex,
}: IProps) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        if(stopPropagation){
            e.stopPropagation();
        }

        if(onClick){
            onClick(e);
        }
    };

    return (
        <ButtonRoot
            className={className}
            type={type}
            style={style}
            color={color}
            size={size}
            isBlock={isBlock}
            isOutline={isOutline}
            isLink={isLink}
            onClick={handleClick}
            onMouseDown={onMouseDown}
            disabled={disabled}
            tabIndex={tabIndex}
        >
            {children}
        </ButtonRoot>
    );
};

export default Button;

const ButtonRoot = styled.button<{
    isBlock?: boolean,
    isOutline?: boolean,
    isLink?: boolean,
    color?: 'primary'| 'success' | 'danger' | 'gray' | 'grayDanger'|'info',
    size?: 'extraSmall'| 'small' | 'large',
    onClick?: any,
}>`

    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out, transform .15s;
    border: 1px solid #444;
    border-width: 0;
    padding: 0.375rem 0.75rem;
    line-height: 100%;
    width: auto;
    white-space:nowrap;


    ${props => props.isBlock && css`
        width: 100%;
    `}

    ${props => props.size === 'extraSmall' && css`
        font-size: 12px;
        height: 25px;
        padding: 0 8px;
    `}

    ${props => props.size === 'small' && css`
        font-size:  0.875rem;
        padding: 0.25rem 0.5rem;
        line-height: 21px;
    `}

    ${props => props.size === 'large' && css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
        line-height: 30px;
        font-weight: 500;
    `}


    ${props => props.color === 'primary' && css`
        background: var(--ifm-color-primary);
        background-image: linear-gradient(to top, var(--ifm-color-primary) 0%, #005bea 100%);
        border-color: var(--ifm-color-primary);
        color: #fff;

        :hover{
            background-color: var(--ifm-color-primary1);
        }

        ${props.isOutline && css`
            color: var(--ifm-color-primary);
            border-color: var(--ifm-color-primary);
            background-color: transparent;
            border-width: 1px;

            :hover{
              background-color: var(--ifm-color-primary);
            }
        `}

        &:disabled, &[disabled]{
          color: #fff;
        }
    `}

    ${props => props.color === 'success' && css`
        background-color: rgb(35, 134, 54);
        //border: 0;
        color: #fff;

        &:disabled, &[disabled]{
          color: #fff;
        }
    `}

    ${props => props.color === 'danger' && css`
        background: rgb(248, 81, 73);
        background-image: linear-gradient(to top, #f43b47 0%, rgb(248, 81, 73) 100%);
        //border: 0;
        color: #fff;

        &:disabled, &[disabled]{
          color: #fff;
        }
    `}

    ${props => props.color === 'gray' && css`

        background: rgba(96,103,110,0.36);
        color: #888;

        //background: #343A40FF;
        ////border: 0;
        //color: #bababa;

        ${props.isOutline && css`
            color: #343A40FF;
            border-color: #343A40FF;
            background-color: transparent;
            border-width: 1px;

            :hover{
              background-color: #343A40FF;
              color: #fff;
            }
        `}


        &:disabled, &[disabled]{
          color: #bababa;
        }
    `}

  ${props => props.color === 'grayDanger' && css`
      background: #343A40FF;
      //border: 0;
      color: rgb(248, 81, 73);

      ${props.isOutline && css`
          color: #343A40FF;
          border-color: #343A40FF;
          background-color: transparent;
          border-width: 1px;

          :hover {
              background-color: #343A40FF;
              color: #fff;
          }
      `}
      &:disabled, &[disabled] {
          color: #bababa;
      }
  `}

    ${props => props.color === 'info' && css`
        background: #2185d0;
        //border: 0;
        color: #fff;

        &:disabled, &[disabled]{
          color: #2185d0;
        }
    `}

    ${props => props.isLink && css`
        color: inherit;
        border: none;
        background: transparent;

        :focus{
            box-shadow: none !important;
        }
    `}

    &:disabled, &[disabled]{
        filter: grayscale(100%);

      >div{
        opacity: .3;
      }
    };


    &:hover{
      text-decoration: none;

    }

    &:active:not(:disabled){
        transform: scale(.98);
    }

    &:focus{
      //box-shadow: 0 0 0 0.2rem rgba(38,143,255,.5);
        box-shadow: var(--form-focus-shadow);
    }

    &[type=button]:not(:disabled),
    &[type=reset]:not(:disabled),
    &[type=submit]:not(:disabled),
    &button:not(:disabled) {
        cursor: pointer;
    }


    @media print{
      display: none;
    }
`;

