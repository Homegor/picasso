import React, {FC, ReactNode} from 'react';

interface TBox {
    children: ReactNode
}

export const PostContent: FC<TBox> = ({children}) => {
    return (
        <div className={"post postBox"}>
            {children}
        </div>
    );
};