import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import marketplace_community_jpg from '../images/marketplace-community.jpg';
import CountComments from './CountComments';
import Nav from './Nav';

function Blog() {
    document.title='Blog - Market Place';
    let blog_posts_url='http://pxg5767.uta.cloud/test/wp-json/wp/v2/posts';
    const [posts,setPosts]=useState(null);
    useEffect(() =>{
        async function loadPosts(){
            const response=await fetch(blog_posts_url);
            if(!response.ok){
                return;
            }
            const post=await response.json();
            setPosts(post);
        }
        loadPosts();
    },[posts]);

  return (
    <div>
        <Nav setActive='blog'/>
        <div id="wrapper">
           
            <section className="services">
            <div className="services-summary">
                <p>Our blog post is educative and informative to all. You can click on title to Comment .</p>
            </div>
            <div className="services-info">
                <div className="services-info-1">
                    
                <img className="services-info-img" src={marketplace_community_jpg}/>
                <a href="http://pxg5767.uta.cloud/test"><button>Go to Blog Site ...</button></a>
                </div>
                <div className="services-info-items">
                    {posts && posts.map((post,index) =>(
                        <div className="services-info-item" key={index}>
                            <div className="services-info-item-title">
                                <div className="services-info-item-title-n">
                                    <CountComments id={post.id} />
                                </div>
                                <div className="services-info-item-title-info">
                                    <p><a href={post.link}>{post.title.rendered}</a></p>
                                </div>
                            </div>
                            <div className="services-info-item-info">
                                <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                                <p>This site provides you with products and items mostly required in your studies. Business Owners updates products in stock for students to buy</p>
                            </div>  
                        </div>
                    ))}

                </div>
            </div>
            </section>
        </div>
    </div>
  );
}

export default Blog;