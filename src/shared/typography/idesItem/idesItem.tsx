import React, {FC} from 'react';

interface TNumber {
    children: string
}

export const IdesItem: FC<TNumber> = ({children}) => {
    return <strong>{children}</strong>

};