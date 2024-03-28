import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface TToLink {
    children: string,
    to: string
}

export const ToLink: FC<TToLink> = ({to, children}) => {
    return <Link className={"toLink"} to={to}>{children}</Link>

};

