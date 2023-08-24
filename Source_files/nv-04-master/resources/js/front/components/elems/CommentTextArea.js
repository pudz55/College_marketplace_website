import {useState} from "react";

function CommentTextArea({post}) {
    const [comment, setComment] = useState("");
    function postComment() {
        postData({resource: "comment_add", post_id: post.id, content: comment}, function (resp) {
            if (resp.error) {
                alert(resp.error);
                return;
            }
            window.location.reload();
            //clear comment
            setComment("");
        });
    }
    return (
        <div className="product-seller">

            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Be nice" required minLength={10}></textarea>
            <div>
                <button className="product-btn-chat" onClick={postComment}>Comment (<span
                    className="cart">{post.comments_count}</span>)</button>
            </div>
        </div>
    )
}

export default CommentTextArea;
