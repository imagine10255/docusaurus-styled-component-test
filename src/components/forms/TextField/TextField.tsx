
import {isEmpty} from 'bear-jsutils/equal';
import {Flex} from 'bear-react-grid';
import clsx from 'clsx';
import React, {ForwardedRef,useCallback} from 'react';
import styled, {css} from 'styled-components';

import {FormProviderConsumer} from '@site/src/components/organize/FormHorizontalGroup';
import Icon, {EIconCode} from '@site/src/library/bear-react-iconsvg';



interface IProps<T> extends FCProps{
    type?: 'text' | 'number' | 'password' | 'tel'
    placeholder?: string
    value?: T
    name?: string
    readOnly?: boolean
    disabled?: boolean
    beforeIconCode?: EIconCode
    beforeIconOnClick?: Function
    maxLength?: number
    onChange?: (value: T) => void
    onClick?: (event: React.MouseEvent) => void
    onFocus?: () => void
    onBlur?: () => void
    onKeyDown?: (e: React.KeyboardEvent) => void
    autoComplete?: string
    step?: number
    required?: boolean
    errorMessage?: string
}

/**
 * Input Component
 *
 * @param props
 * @returns {*}
 * @param ref
 */
export const TextField = <T extends string|number>({
    id,
    className,
    style,
    type = 'text',
    name,
    value,
    placeholder = '',
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    readOnly = false,
    disabled = false,
    autoComplete,
    beforeIconCode,
    beforeIconOnClick,
    maxLength,
    onChange,
    step,
    required,
    errorMessage,
}: IProps<T>, ref?: ForwardedRef<HTMLInputElement>) => {


    /**
     * 處理值改變
     */
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = typeof value === 'number' ? parseFloat(e.target.value): e.target.value;

        if (onChange) {
            onChange(newValue as T);
        }
    }, [onChange]);


    return (
        <TextFieldRoot className={clsx(className)} onClick={onClick}>

            <Flex col="column" className="w-100">
                <Flex>
                    <FormProviderConsumer>
                        {htmlForId => {
                            return <Input
                                ref={ref}
                                style={style}
                                type={type}
                                id={id ?? htmlForId}
                                name={name}
                                onChange={handleChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onKeyDown={onKeyDown}
                                placeholder={placeholder}
                                readOnly={readOnly}
                                disabled={disabled}
                                tabIndex={disabled ? -1: undefined}
                                autoComplete={autoComplete}
                                autoCorrect="off" // for webview
                                autoCapitalize="off" // for webview
                                spellCheck="false" // for webview
                                maxLength={maxLength}
                                step={step}
                                required={required}
                                value={value !== null ? value: ''}
                            />;
                        }}
                    </FormProviderConsumer>

                    {beforeIconCode &&
                        <InputGroupPrepend onClick={beforeIconOnClick}>
                            <InputGroupText>
                                <Icon code={beforeIconCode} color="#495057"/>
                            </InputGroupText>
                        </InputGroupPrepend>
                    }
                </Flex>


                {errorMessage &&
                    <ErrorMessage>
                        <CustomIcon code={EIconCode.exclamation_circle} color="danger" size={18}/>
                        <span>{errorMessage}</span>
                    </ErrorMessage>
                }
            </Flex>



        </TextFieldRoot>

    );
};


export default React.forwardRef(TextField);



const CustomIcon = styled(Icon)`
    flex: 0 0 auto;
`;


const ErrorMessage = styled(Flex)`
    color: var(--danger-color);
    font-size: 13px;
    margin-top: 4px;
`;

const InputGroupText = styled.span`
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #444;
    border-right: 0;
    background: 0 0;

    display: flex;
    width: 41px;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    color: var(--form-comp-color);

`;

const Input = styled.input`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    padding: 6px 12px;
    font-weight: 400;
    line-height: 21px;
    height: var(--form-height);
    color: var(--form-color);

    background: 0 0;
    background-clip: padding-box;

    border: 1px solid #444;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    flex: 1;
    margin-bottom: 0;

    :focus{
        outline: 0;
        box-shadow: var(--form-focus-shadow);
    }

    ::-webkit-input-placeholder, :read-only, :disabled {
      color: var(--form-placeholder-color);
    }

      /* chrome 自動填入 */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0px 1000px #2b3035 inset;
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #c8cfd6;
    }

     ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
       //color: transparent;
       opacity: 1; /* Firefox */
     }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: transparent;
     }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: transparent;
    }
`;



const InputGroupPrepend = styled.div<any>`
    display: flex;
    margin-right: -1px;
    flex: 0;

    ${props => !isEmpty(props.onClick) && css`
         cursor: pointer;
    `}

    + ${Input}{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

const TextFieldRoot = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    height: var(--form-height);
`;
