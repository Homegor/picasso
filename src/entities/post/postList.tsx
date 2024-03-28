import React from 'react';
import {useGetPostByIdQuery} from "../../app/store/slice/slice";
import {BodyItem, NotFound, IdesItem, TitleItem, ToLink} from "../../shared";


interface PostDetailsProps {
    postId: number;
}

export const PostList: React.FC<PostDetailsProps> = ({postId}) => {
    const {data, isLoading, isError, isSuccess} = useGetPostByIdQuery(postId)


    if (isLoading){
        return <h1>Lading...</h1>
    }
    if(isError){
        return <h1>isError</h1>
    }
    if (isSuccess) {
        return (
            <div className={"postList postBox"}>
                <IdesItem>{"# " + data.id}</IdesItem>
                <TitleItem>{data.title}</TitleItem>
                <BodyItem>{data.body}</BodyItem>
                <ToLink to={"/"}>Назад</ToLink>
            </div>
        );
    }else {
        return <NotFound/>
    }
};

