import React from 'react';
import {PostList} from "../../entities";
import {useParams} from "react-router-dom";

export const ListPage = () => {
    const { postId } = useParams<{ postId: string }>();

    return <PostList postId={parseInt(postId as string, 10)}/>
};