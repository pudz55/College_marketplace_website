import {useState} from 'react';
import {Link} from 'react-router-dom';
import marketplace_sell_3_jpg from "../../images/marketplace-sell-3.jpg";

function StudentsList(params = {}) {
    document.title = 'Students List';
    console.log(params);
    const [students, setStudents] = useState([]);
    const [hasStudents, setHasStudents] = useState(false);
    if (!hasStudents) {
        //get students from api
        postData({resource: "student_list", own: params.own,type:params.type}, function (resp) {
            console.log(resp);
            if (resp.error) {
                setHasStudents(false);
                return;
            }
            setHasStudents(true);
            setStudents(resp);
            //save students to local storage
            localStorage.setItem('students', JSON.stringify(resp));
        });
    }

    function editClub(event) {
        let student_id = event.target.getAttribute('data-id');
        //dispatch event to edit post
        window.dispatchEvent(new CustomEvent('editClub', {detail: {id: student_id}}));
    }

    function deleteClub(event) {
        let student_id = event.target.getAttribute('data-id');
        //confirm delete
        if (!confirm('Are you sure you want to delete this item?')) {
            return;
        }
        post({resource: "student_delete", id: student_id}, function (resp) {
            if (resp.error) {
                alert(resp.error);
                return;
            }
            //remove post from local storage
            let students = localStorage.getItem('students');
            if (students === null) {
                students = [];
            } else {
                students = JSON.parse(students);
            }
            let new_students = students.filter(student => student.id !== student_id);
            localStorage.setItem('students', JSON.stringify(new_students));
            setStudents(new_students);
            setHasStudents(true);
        }).then(r => {
            console.log(r);
        });

    }


    return (<div>
        {!hasStudents ? (

            <div className="dashboard-info-item">
                <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p style={{"textAlign": "center"}}>
                                    No Students Yet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : (

            <div className="dashboard-info">
                <div className="dashboard-item">

                    <div className="dashboard-info-item">
                        <div className="">
                            {students.map((student, index) => (<div className="services-info-item">
                                <div className="services-info-item-title">
                                    <div className="post-info-item-title-info">
                                        <p>
                                            {student.names}
                                            {student.role === 'student' ? (
                                                <span className="badge badge-success">(Age: {student.age})</span>
                                            ) : (
                                                <span className="badge badge-primary">{camelize(student.role)}</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className="dashboard-info-item-info">
                                    <div className="product-details">
                                        <img className="dashboard-info-img"
                                             src={student.image ? student.image : marketplace_sell_3_jpg}/>
                                        <div>
                                            {student.role === 'student' ? (
                                                    <p className="product-description">
                                                      Course:  {student.course}<br/>
                                                      Address  {student.address}<br/>
                                                      School  {student.schooladdress}<br/>
                                                    </p>
                                                ) : (
                                                    <p className="product-description">
                                                       Name: {student.names}<br/>
                                                       Address: {student.address}<br/>
                                                        Email: {student.email}<br/>
                                                    </p>
                                                )
                                            }
                                            <p className="product-seller">{student.posts_count}</p>
                                            <p className="product-seller">{student.email}</p>
                                            <p>

                                                {params.is_sa ? (<div>
                                                        <button className="product-btn-chat" data-id={student.id}
                                                                onClick={deleteClub}>Delete
                                                        </button>
                                                    </div>

                                                    ):(
                                                    <button className="product-btn-chat"><Link
                                                        to={"/student/"+student.id}>View</Link></button>
                                                    )}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>))}
                        </div>
                    </div>


                </div>

            </div>)}
    < /div>);
}

export default StudentsList;
