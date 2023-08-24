<?php
require_once('conn.php');
if(isset($_POST['register']) || $_POST['register']!=""){
    //for business
    $businessname=$_POST['businessname'];
    $productname=$_POST['productname'];
    $price=$_POST['price'];
    $quantity=$_POST['quantity'];
    $description=$_POST['description'];


    $dob=$_POST['dob'];
    $course=$_POST['course'];
    $schooladdress=$_POST['schooladdress'];
    $businessname=$_POST['businessname'];
    $businessaddress=$_POST['businessaddress'];
    $businessdesc=$_POST['businessdesc'];
    $gender=$_POST['gender'];
    $school=$_POST['school'];


    //common for all
    
    $new=$_POST['new'];
    $user=$_POST['user'];
    $query='';
    $image_name=$_FILES['image']['name'];
    $temp_name=$_FILES['image']['tmp_name'];
    $image='uploads/'.$new."_".$image_name;

    if($new=='product'){
        // `business`, `names`, `price`, `quantity`, `description`, `image`, `user`, `created_at` FROM `products`
        $query='INSERT INTO products (`business`, `names`, `price`, `quantity`, `description`, `image`, `user`)
        VALUES ("'.$businessname.'","'.$productname.'","'.$price.'","'.$quantity.'","'.$description.'","'.$image.'","'.$user.'")';
    }
    else if($new=='post'){
        // `post`, `image`, `user`, `created_at` FROM `posts`
        $query='INSERT INTO users (`names`, `email`, `bsname`, `bsdesc`, `bsaddress`, `image`, `role`, `password`)
        VALUES ("'.$names.'", "'.$email.'", "'.$businessname.'", "'.$businessdesc.'", "'.$businessaddress.'", "'.$image.'", "'.$register.'", "'.$password.'")';
    }
    else if($new=='club'){
        // `clubname`, `clubinfo`, `agendas`, `image`, `user`, `created_at` FROM `clubs`
        $query='INSERT INTO users (`names`, `email`, `bsname`, `bsdesc`, `bsaddress`, `image`, `role`, `password`)
        VALUES ("'.$names.'", "'.$email.'", "'.$businessname.'", "'.$businessdesc.'", "'.$businessaddress.'", "'.$image.'", "'.$register.'", "'.$password.'")';
    }
    else{
        echo 'Oops! Nothing to Add.';
    }
    
    
    if(query!=''){
        if(move_uploaded_file($temp_name,$image)){
            if(mysqli_query($conn,$query)){
                echo $new.' Created.';
            }
            else{
                echo $new.' Not Created.';
            }
        }
        else{
            echo 'Something is Wrong while Uploading Image.';
        }
    }
}
else{
    echo 'No Item Specified.';
}
?>