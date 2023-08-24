import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FileUploader from "./FileUploader";
import marketplace_sell_3_jpg from "../images/marketplace-sell-3.jpg";
import marketplace_sell_1_jpg from "../images/marketplace-sell-1.jpg";
import CommentTextArea from "./elems/CommentTextArea";


function PostsList(params = {}) {
    document.title = 'Student Add Products: Market Place';
    let type = params.type;
    if (type === undefined) {
        type = 'post';
    }
    const [posts, setPosts] = useState([]);
    const [hasPosts, setHasPosts] = useState(false);
    if (!hasPosts) {
        //get posts from api
        postData({resource: "post_list", own_posts: params.own_posts,type:type,user_id:params.user_id}, function (resp) {
            console.log(resp);
            if (resp.error) {
                setHasPosts(false);
                return;
            }
            setHasPosts(true);
            setPosts(resp);
            //save posts to local storage
            localStorage.setItem('posts', JSON.stringify(resp));
        });
    }

    function editPost(event) {
        let post_id = event.target.getAttribute('data-id');
        //dispatch event to edit post
        window.dispatchEvent(new CustomEvent('editPost', {detail: {id: post_id}}));
    }

    function deletePost(event) {
        let post_id = event.target.getAttribute('data-id');
        //confirm delete
        if (!confirm('Are you sure you want to delete this post?')) {
            return;
        }
        post({resource: "post_delete", id: post_id}, function (resp) {
                if (resp.error) {
                    alert(resp.error);
                    return;
                }
                //remove post from local storage
                let posts = localStorage.getItem('posts');
                if (posts === null) {
                    posts = [];
                } else {
                    posts = JSON.parse(posts);
                }
                let new_posts = posts.filter(post => post.id !== post_id);
                localStorage.setItem('posts', JSON.stringify(new_posts));
                setPosts(new_posts);
            }
        ).then(r => {
        });

    }

    function showComments(event) {
        let post_id = event.target.getAttribute('data-id');
        //dispatch event to edit post
        window.dispatchEvent(new CustomEvent('showComments', {detail: {id: parseInt(post_id)}}));
    }

    return (<div>
        {!hasPosts ? (<div className="dashboard-info-item">
            <div className="">
                <div className="services-info-item">
                    <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p style={{"textAlign": "center"}}>
                                No Posts Yet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (<div className="services-info-item">
            <div className="services-info-item-title">
                <div className="post-info-item-title-info">
                    <p>
                        {(params.own_posts ? "My" : "Latest") + " Posts"}
                    </p>
                </div>
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">
                    <div className="dashboard-info-item">

                        {posts.map((post, index) => (

                            <div className="services-info-item" key={index}>
                                <div className="services-info-item-title">
                                    <div className="post-info-item-title-info">
                                        <p>
                                            By
                                            <span className="product-price">{post.user.names??'Unknown'}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="dashboard-info-item-info">
                                    <div className="product-details">
                                        <img className="dashboard-info-img"
                                             src={post.image ? post.image : marketplace_sell_3_jpg}/>
                                        <div>
                                            <p className="product-description">{post.post}</p>
                                            <p className="product-seller">By :
                                                <button className="product-btn-chat"><Link
                                                    to={"/student/" + post.user_id}>{post.user.names??'User'}</Link>
                                                </button>
                                            </p>
                                            <CommentTextArea post={post}/>
                                            <p>
                                                <button className="product-btn-chat" data-id={post.id}
                                                        onClick={showComments}>View Comments
                                                </button>
                                                {post.user.id === JSON.parse(localStorage.getItem('mercadoraccount'))[0]['id'] ? (
                                                    <p>
                                                        <button className="product-btn-chat" data-id={post.id}
                                                                onClick={editPost}>Edit
                                                        </button>
                                                        <button className="product-btn-chat" data-id={post.id}
                                                                onClick={deletePost}>Delete
                                                        </button>
                                                    </p>) : ''}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>)}
    < /div>);
}

export default PostsList;
