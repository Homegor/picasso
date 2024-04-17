import React, {useEffect, useState} from 'react';
import {useGetPostQuery} from "../../app/store/slice/slice";
import {BodyItem, NotFound, IdesItem, PostContent, TitleItem, ToLink} from "../../shared";

export const PostsPageHome = () => {
    const [currentPostStart,setCurrentPostStart]=useState(0)

    const {data, isLoading, isError, isSuccess} = useGetPostQuery({limit:100, start:currentPostStart});
    const [isMyFetching,setIsFetchingDown]=useState(false)
    const [isMyFetchingUp,setIsMyFetchingUp]=useState(false)

    useEffect(()=>{
        if(isMyFetching)
        {
            setCurrentPostStart(prev=>{
                return prev<93?prev+1:prev
            })
            setIsFetchingDown(false)
        }
    },[isMyFetching])
    useEffect(()=>{
        if(isMyFetchingUp)
        {
            setCurrentPostStart(prev=>{
                return prev>0?prev-1:prev
            })
            setIsMyFetchingUp(false)
        }
    },[isMyFetchingUp])
    useEffect(()=>{
        return ()=>{
            document.addEventListener('scroll',scrollHandler)
        }
    },[])
    const scrollHandler=(e:any):void=>{
        if(e.target.documentElement.scrollTop<50)
        {
            setIsMyFetchingUp(true)
        }
        if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<50)
        {
            setIsFetchingDown(true)
            window.scrollTo(0,(e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
        }
    }

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
