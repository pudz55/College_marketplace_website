import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FileUploader from "./FileUploader";


function NewComment(params) {
    document.title = 'Student Add Products: Market Place';
    let post_id=params.post_id;
    let mercadoraccount = localStorage.getItem('mercadoraccount');
    if (mercadoraccount === null) {
        mercadoraccount = false
    } else {
        mercadoraccount = JSON.parse(mercadoraccount)
    }

    const [comment, setComment] = useState('');
    const [send, setSend] = useState(false);


    const createComment = (e) => {
        e.preventDefault();
        setSend('Posting Comment....')
        let data = {};
        data.resource = "comment_create";
        data.content = comment;
        data.user_id = mercadoraccount[0]['id'];
        data.post_id = post_id;
        postData(data, function (resp) {
            if (resp.error) {
                setSend(resp.error)
                return;
            }
            setSend("Comment Created")
            setComment('');

        }).then(response => {

        });

    }
    return (
        <div>
            <div className="dashboard-info-item">
                <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p style={{"textAlign": "center"}}>
                                   Your Comment
                                </p>
                            </div>
                        </div>
                        <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <div>
                                    <p>Anything in Mind, Comment here. Keep it friendly</p>
                                </div>
                            </div>
                            <form onSubmit={createComment} name={'comment'}>

                                <div>
                                    <span>Comment</span>
                                    <textarea rows="4" value={comment} onChange={(e) => setComment(e.target.value)}
                                              placeholder="Create your content or story here"></textarea>
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
                                    <button>Save Comment</button>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default NewComment;
