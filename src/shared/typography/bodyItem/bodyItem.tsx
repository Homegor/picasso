import React, {FC} from 'react';

interface TContent {
    children: string
}
export const BodyItem: FC<TContent> = ({children}) => {
    return (
        <>
            <p>{children}</p>

        </>
    )
};

