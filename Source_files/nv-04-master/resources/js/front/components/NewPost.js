import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FileUploader from "./FileUploader";


function NewPost({type='post'}) {
    document.title = 'Student Add Products: Market Place';
    let ad=type==='ad'?"Ad":"Post";

    let mercadoraccount = localStorage.getItem('mercadoraccount');
    if (mercadoraccount === null) {
        mercadoraccount = false
    } else {
        mercadoraccount = JSON.parse(mercadoraccount)
    }

    const [post, setPost] = useState('');
    const [image, setImage] = useState('');
    const [send, setSend] = useState(false);

//listen to editPost event
    window.addEventListener('editPost', function (e) {
        //get post from local storage
        let current_post=findPost(parseInt(e.detail.id));
        setPost(current_post.post);
        $('input[name="image"]').data('upload_path', current_post.image);

    });
    const createPost = (e) => {
        e.preventDefault();
        setSend('Creating Post....')
        let form = new FormData();
        form.append('post', post);
        form.append('image', image);
        form.append('user', mercadoraccount[0]['id']);
        form.append('new', "post");
        let data = {};
        console.log(data);
        data.resource = "post_create";
        data.post = post;
        data.type=type;
        data.image = $("input[name=image]").data('upload_path');
        data.user = mercadoraccount[0]['id'];
        postData(data, function (resp) {
            if (resp.error) {
                setSend(resp.error)
                return;
            }
            setSend("Post Created")
            setPost('');
            setImage('');
            window.location.reload();

        })

    }
    return (
        <div>
            <div className="dashboard-info-item">
                <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p style={{"textAlign": "center"}}>
                                    Create New {ad}
                                </p>
                            </div>
                        </div>
                        <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <div>
                                    <p>Anything in Mind, Create and {ad} it here</p>
                                </div>
                            </div>
                            <form onSubmit={createPost} name={'post'}>

                                <div>
                                    <span>Post Information</span>
                                    <textarea rows="4" value={post} onChange={(e) => setPost(e.target.value)}
                                              placeholder="Create your content or story here"></textarea>
                                </div>

                                <div>
                                    <span>Image </span>
                                    <FileUploader/>
                                </div>

                                {send &&
                                    <div style={{
                                        "backgroundColor": "grey",
                                        "color": "white",
                                        "padding": "10px",
                                        "borderRadius": "10px"
                                    }}>
                                        <span style={{"textAlign": "center"}}>{send}</span>
                                    </div>
                                }

                                <div>
                                    <button>Save New {ad}</button>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default NewPost;
