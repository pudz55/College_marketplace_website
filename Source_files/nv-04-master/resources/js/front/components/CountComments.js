import { useState,useEffect } from 'react';
function CountComments({id}) {
    const blog_posts_comments_url='http://pxg5767.uta.cloud/test/index.php/wp-json/wp/v2/comments?post='+id;
    const [posts,setPosts]=useState(null);
    useEffect(() =>{
        async function loadPosts(){
            const response=await fetch(blog_posts_comments_url);
            if(!response.ok){
                return;
            }
            const post=await response.json();
            setPosts(post);
        }
        loadPosts();
    },[posts]);

    var comments=0;
    if(posts){
        comments=(Object.keys(posts).length);
    }

    return comments;

}

export default CountComments;
