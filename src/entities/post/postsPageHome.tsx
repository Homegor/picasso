import React from 'react';
import {useGetPostQuery} from "../../app/store/slice/slice";
import {BodyItem, NotFound, IdesItem, PostContent, TitleItem, ToLink} from "../../shared";

export const PostsPageHome = () => {
    const {data, isLoading, isError, isSuccess} = useGetPostQuery({limit:30, start:0});

    if (isLoading) {
        return <h1>Lading...</h1>
    }
    if (isError) {
        return <h1>isError</h1>
    }

    if (isSuccess) {
        return (
            <>
                <div className={"postContent"}>
                        {data.map((post) => (
                            <PostContent key={post.id}>
                                <IdesItem>{"# " + post.id}</IdesItem>
                                <TitleItem>{post.title.length > 25 ? post.title.slice(0, 25) + " ..." : post.title}</TitleItem>
                                <BodyItem>{post.body.length > 100 ? post.body.slice(0, 100) + " ..." : post.body}</BodyItem>
                                <ToLink to={`post/` + String(post.id)}>Подробно</ToLink>
                            </PostContent>
                        ))}
                </div>
            </>
        );
    } else {
        return <NotFound/>
    }
};
