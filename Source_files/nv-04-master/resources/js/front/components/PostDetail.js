import {Link, useParams} from 'react-router-dom';

import PostsList from './PostsList';

import NewComment from "./NewComment";

function PostDetail() {
    document.title='Student Add Post: Market Place';
    let id=useParams();
  return (
    <div>
        <StudentNav setActive='posts'/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Post Details
                    <button className="product-btn"><Link to="/student/view_posts">Back to Posts</Link></button>
                </p>
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">

                <div className="dashboard-info-item">
                    <NewComment post_id={id}/>
                </div>

                <div className="dashboard-info-item">
                    <div className="">
                        <PostsList own_posts={true} id={id}  />
                    </div>
                </div>
                </div>



            </div>


            </section>
        </div>
    </div>
  );
}

export default PostDetail;
