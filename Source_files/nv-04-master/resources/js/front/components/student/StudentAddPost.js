import {Link} from 'react-router-dom';

import NewPost from '../NewPost';
import PostsList from '../PostsList';

import StudentNav from './StudentNav';

function StudentAddPost() {
    document.title='Student Add Post: Market Place';
  return (
    <div>
        <StudentNav setActive='posts'/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Create and Publish your Post or story
                    <button className="product-btn"><Link to="/student/view_posts">Back to Posts</Link></button>
                </p>
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">

                <div className="dashboard-info-item">
                    <NewPost />
                </div>

                <div className="dashboard-info-item">
                    <div className="">
                        <PostsList own_posts={true}  />
                    </div>
                </div>




                </div>



            </div>


            </section>
        </div>
    </div>
  );
}

export default StudentAddPost;
