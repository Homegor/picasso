import React, {FC} from 'react';

interface TTitle {
    children: string

}

export const TitleItem: FC<TTitle> = ({children}) => {
    return <h1>{children}</h1>
};

