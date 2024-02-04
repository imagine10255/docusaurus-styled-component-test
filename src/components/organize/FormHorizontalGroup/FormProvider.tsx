import React, {createContext, useId} from 'react';

interface IContextProps {
    htmlForId?: string
}

export const FormProviderContext = createContext<string>(undefined);

export const FormProviderConsumer = FormProviderContext.Consumer;



interface IProps extends FCChildrenProps{
    htmlForId?: string
}

const FormProviderProvider = ({
    htmlForId,
    children,
}: IProps) => {

    return (
        <FormProviderContext.Provider value={htmlForId}>
            {children}
        </FormProviderContext.Provider>
    );
};

export default FormProviderProvider;

