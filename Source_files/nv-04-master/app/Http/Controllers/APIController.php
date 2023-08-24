<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Club;
use App\Models\ClubMember;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Product;
use App\Models\User;
use App\Models\UserSchool;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;

use Exception;
use Log;

/**
 * @package : Api Controller
 * @version : 1.0
 * @developed by : User
 * @filename : APIController.php
 */
class APIController extends Controller
{
    public $uri;
    public $requestMethod;
    public $requestData;
    private $secret;
    private $ttl = 360000;
    /**
     * @var Controller
     */
    private $authentication_model;
    private $session;

    public function processor(Request $request)
    {
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        $this->secret = config('app.key');
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $this->uri = explode('/', $uri);
        $this->requestMethod = $_SERVER["REQUEST_METHOD"];
        $this->requestData = json_decode(file_get_contents('php://input'));
        $this->authentication_model = new Controller();
        $this->session = $request->session();
        //$this->load->library('../controllers/dashboard');
        $this->processRequest();
    }

    //get uploaded file
    public function upload(Request $request)
    {
        $file = $request->file('File');
        $file_name = time() . "_" . $file->getClientOriginalName();
        $file->move(public_path('uploads'), $file_name);
        return response()->json(['success' => "/uploads/" . $file_name]);
    }

    /**
     * @throws Exception
     */
    public function login(): array
    {
        $username = substr(base64_decode($this->requestData->Username), 6);
        $password = substr(base64_decode($this->requestData->Password), 6);
        $iat = time();
        // username is okey lets check the password now
        $payload = [
            "username" => $username,
            "password" => $password,
            "iat" => $iat
        ];
        $login_credential = $this->authentication_model->auth($username, $password);
        if (isset($login_credential)) {
            $user = json_encode($login_credential);
            $token = $this->getSignedJWTForUser($user, $payload);

        } else {
            throw new Exception("Invalid Username or Password");
        }
        return $this->respondWith(json_encode(['status' => '01', "token" => $token, "expires" => $this->ttl, "iat" => $iat, "user" => $login_credential]), 200);
    }

    public function user()
    {
        $user_id = $this->session->get('auth_user');
        $user = User::find($user_id);
        return $this->respondWith($user->toJson(), 200);
    }

    public function post_list()
    {
        $user_id = $this->session->get('auth_user');

        $query = Post::with(['user','comments','comments.user'])->withCount('comments')->orderBy('id', 'desc');
        //if own_posts, get all
        if (isset($this->requestData->own_posts) && $this->requestData->own_posts) {
            $query->where('user', $user_id);
        }
        Log::info(json_encode($this->requestData));

        if (isset($this->requestData->type)) {
            $query->where('type', $this->requestData->type);
        }
        if (isset($this->requestData->user_id)) {
            $query->where('user_id', $this->requestData->user_id);
        }

        return $this->respondWith($query->get()->toJson(), 200);
    }

//comment_add
    public function comment_add()
    {
        $user_id = $this->session->get('auth_user');
        $post_id = $this->requestData->post_id;
        $comment = new Comment();
        $comment->user_id = $user_id;
        $comment->post_id = $post_id;
        $comment->content = $this->requestData->content;
        $comment->save();
        return $this->respondWith($comment->toJson(), 200);
    }

    public function school_create()
    {
        $business = new User();
        $business->names = $this->requestData->names;
        $business->email = $this->requestData->email;
        $business->course = $this->requestData->course;
        $business->address = $this->requestData->address;
        $business->bsname = $this->requestData->businessname;
        $business->bsaddress = $this->requestData->businessaddress;
        $business->bsdesc = $this->requestData->businessdesc;
        try {
            $business->image = $this->requestData->image;
        } catch (Exception $e) {
            $business->image = "";
        }
        $business->password = $this->requestData->password;
        $business->role = "school";
        $business->save();
        return $this->respondWith($business->toJson(), 200);
    }

    public
    function post_create()
    {
        $user_id = $this->session->get('auth_user');
        $post = new Post();
        $post->post = $this->requestData->post;
        $post->image = $this->requestData->image;
        if (isset($this->requestData->type)) {
            $post->type = $this->requestData->type;
        }
        $post->user = $user_id;
        $post->save();

        return $this->respondWith($post->toJson(), 200);
    }

    public function club_list()
    {
        $user_id = $this->session->get('auth_user');

        $query = Club::with('user', 'members')->withCount('members')->orderBy('id', 'desc');
        //if own_posts, get all
        if (isset($this->requestData->own_clubs) && $this->requestData->own_clubs) {
            $query->where('user', $user_id);
        }
        if (isset($this->requestData->id)) {
            $query->where('id', $this->requestData->id)->with('members');
        }
        if (isset($this->requestData->user_id)) {
            $query->where('user', $this->requestData->user_id);
        }

        return $this->respondWith($query->get()->toJson(), 200);
    }

    public function club_create()
    {
        $user_id = $this->session->get('auth_user');
        if (isset($this->requestData->id)) {
            $club = Club::find($this->requestData->id);
        } else {
            $club = new Club();
        }
        $club->clubname = $this->requestData->name;
        $club->clubinfo = $this->requestData->description;
        $club->agendas = $this->requestData->agendas;
        $club->image = $this->requestData->image;
        $club->user = $user_id;
        $club->save();

        return $this->respondWith($club->toJson(), 200);
    }
    //club delete

    /**
     * @throws Exception
     */
    public function club_delete()
    {
        $user_id = $this->session->get('auth_user');
        $club = Club::find($this->requestData->id);
        if ($club->user == $user_id) {
            $club->delete();
            return $this->respondWith($club->toJson(), 200);
        } else {
            throw new Exception("You are not allowed to delete this club");
        }

    }

    //join club

    /**
     * @throws Exception
     */
    public function club_join()
    {
        $user_id = $this->session->get('auth_user');
        //check if already joined
        $already_joined = $this->requestData->already_joined;
        if ($already_joined) {
            $membership = ClubMember::where(['user_id' => $user_id, 'club_id' => $this->requestData->id])->delete();
            return $this->respondWith($membership, 200);
        } else {
            $club = ClubMember::create([
                'club_id' => $this->requestData->id,
                'user_id' => $user_id
            ]);
            return $this->respondWith($club->toJson(), 200);
        }
    }

    //leave club
    public function club_leave()
    {
        $user_id = $this->session->get('auth_user');
        $club = ClubMember::where('club_id', $this->requestData->id)->where('user_id', $user_id)->first();
        $club->delete();
        return $this->respondWith($club->toJson(), 200);
    }

    /**
     * @throws Exception
     */
    public function post_delete()
    {
        $user_id = $this->session->get('auth_user');
        $post = Post::find($this->requestData->id);
        if ($post->user == $user_id) {
            $post->delete();
            return $this->respondWith($post->toJson(), 200);
        } else {
            throw new Exception("You are not allowed to delete this post");
        }
    }

    //product list
    public function product_list()
    {
        $user_id = $this->session->get('auth_user');

        $query = Product::with('user')->orderBy('id', 'desc');
        //if own_posts, get all
        if (isset($this->requestData->own) && $this->requestData->own) {
            $query->where('user', $user_id);
        }
        if (isset($this->requestData->id)) {
            $query->where('id', $this->requestData->id);
        }
        if (isset($this->requestData->user_id)) {
            $query->where('user', $this->requestData->user_id);
        }

        return $this->respondWith($query->get()->toJson(), 200);
    }

    //product create
    public function product_create()
    {
        $user_id = $this->session->get('auth_user');
        if (isset($this->requestData->id)) {
            $product = Product::find($this->requestData->id);
        } else {
            $product = new Product();
        }
        $product->names = $this->requestData->productname;
        $product->business = $this->requestData->businessname;
        $product->description = $this->requestData->description;
        $product->price = $this->requestData->price;
        $product->quantity = $this->requestData->quantity;
        $product->image = $this->requestData->image;
        $product->user = $user_id;
        $product->save();

        return $this->respondWith($product->toJson(), 200);
    }
    //product delete

    /**
     * @throws Exception
     */
    public function product_delete()
    {
        $user_id = $this->session->get('auth_user');
        $product = Product::find($this->requestData->id);
        if ($product->user == $user_id) {
            $product->delete();
            return $this->respondWith($product->toJson(), 200);
        } else {
            throw new Exception("You are not allowed to delete this product");
        }
    }

    //user_profile with summary
    public function user_profile()
    {
        $user_id = $this->session->get('auth_user');
        if (isset($this->requestData->id)) {
            $user_id = $this->requestData->id;
        }
        $user = User::with(['schools','carts'])->withCount('posts')->withCount('products')->withCount('clubs')->withCount('carts')->find($user_id);
        return $this->respondWith($user->toJson(), 200);
    }

    //list students
    public function student_list()
    {
        $user_id = $this->session->get('auth_user');

        $query = User::orderBy('id', 'desc');
        //if own_posts, get all
        if (isset($this->requestData->own) && $this->requestData->own) {
            $query->where('user', $user_id);
        }
        if (isset($this->requestData->id)) {
            $query->where('id', $this->requestData->id);
        }
        if (isset($this->requestData->type)) {
            $query->where('role', $this->requestData->type);
        }
        Log::info($query->toSql());
        Log::info(json_encode($this->requestData));

        return $this->respondWith($query->get()->toJson(), 200);
    }

    //student_create
    public function student_create()
    {
        $user_id = $this->session->get('auth_user');
        if (isset($this->requestData->id)) {
            $student = User::find($this->requestData->id);
        } else {
            $student = new User();
        }
        $student->names = $this->requestData->names;
        $student->email = $this->requestData->email;
        $student->gender = $this->requestData->gender;
        $student->dob = $this->requestData->dob;
        $student->course = $this->requestData->course;
        $student->password = $this->requestData->password;
        $student->address = $this->requestData->address;
        $student->image = $this->requestData->image;
        $student->schooladdress = $this->requestData->schooladdress;
        $student->role = 'student';
        $student->save();
        if (isset($this->requestData->school)) {
            try {
                $school_id = User::where('names', 'like', "%" . $this->requestData->school . "%")
                    ->orWhere('bsname', 'like', "%" . $this->requestData->school . "%")->first()->id;
                UserSchool::create([
                    'user_id' => $student->id,
                    'school_id' => $school_id
                ]);
            } catch (Exception $e) {
            }
        }

        return $this->respondWith($student->toJson(), 200);
    }
    //student_delete

    /**
     * @throws Exception
     */
    public function student_delete()
    {
        $user_id = $this->session->get('auth_user');
        if (isset($this->requestData->id) && $this->requestData->id != $user_id) {
            $student = User::find($this->requestData->id);
            if ($student->hasPosts()) {
                throw new Exception("User has posts. First delete the posts");
            }
            $student->delete();
            return $this->respondWith($student->toJson(), 200);
        } else {
            throw new Exception("You are not allowed to delete this item");
        }
    }
    //cart_create
    public function cart_create()
    {
        $user_id = $this->session->get('auth_user');
        if (isset($this->requestData->id)) {
            $cart = Cart::find($this->requestData->id);
        } else {
            $cart = new Cart();
        }
        //get producs from request
        $products = $this->requestData->products;
        //insert each product
        foreach ($products as $product) {
            try {
                Cart::create(
                    [
                        'user_id' => $user_id,
                        'product_id' => $product->id,
                        'quantity' => $product->quantity,
                        'price' => $product->price,
                        'total' => $product->total,
                    ]
                );
            } catch (Exception $e) {
            }

        }

        return $this->respondWith($cart->toJson(), 200);
    }
    public function business_create()
    {
        $business = new User();
        $business->names = $this->requestData->names;
        $business->email = $this->requestData->email;
        $business->course = $this->requestData->course;
        $business->address = $this->requestData->address;
        $business->bsname = $this->requestData->businessname;
        $business->bsaddress = $this->requestData->businessaddress;
        $business->bsdesc = $this->requestData->businessdesc;
        try {
            $business->image = $this->requestData->image;
        } catch (Exception $e) {
            $business->image = "";
        }
        $business->password = $this->requestData->password;
        $business->role = "business";
        $business->save();
        return $this->respondWith($business->toJson(), 200);
    }


    private function processRequest()
    {
        switch ($this->requestMethod) {
            case 'POST':
                try {
                    if (!isset($this->requestData->resource))
                        throw new Exception("Parameter resource is required");
                    if (!method_exists($this, $this->requestData->resource))
                        throw new Exception("The required resource (" . $this->requestData->resource . ") is unavailable");

                    if (in_array($this->requestData->resource, ["login", "business_create","school_create","student_create"]))//Validate token if request not log in
                    {
                        $response = call_user_func(array($this, $this->requestData->resource));
                    } else
                        if ($this->validate_request()) {//Will Throw Exception
                            $response = call_user_func(array($this, $this->requestData->resource));
                        } else {
                            throw new Exception("Access denied. Invalid or expired token!");
                        }

                } catch (Exception $exception) {
                    $response = $this->unprocessableEntityResponse($exception->getMessage());
                }
                break;
            default:
                $response = $this->notFoundResponse();
                break;
        }
        header($response['status_code_header']);
        //header('X-PHP-Response-Code: 404', true, 404);
        //http_send_status($response['status_code']??404);
        $this->session->flush();
        if ($response['body']) {
            echo $response['body'];
        }
    }

    private function unprocessableEntityResponse($message): array
    {
        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
        $response['body'] = json_encode([
            'error' => $message ?? 'Invalid input',
        ]);
        return $response;
    }

    private function notFoundResponse(): array
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }

    private function respondWith($json, int $status): array
    {
        switch ($status) {
            case 200:
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
                break;
            default:
                $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        }
        $response['body'] = $json;
        return $response;
    }

    public function getSignedJWTForUser($user, $merchant): string
    {
        $issuedAtTime = $merchant["iat"];
        $tokenTimeToLive = $this->ttl;
        $tokenExpiration = $issuedAtTime + $tokenTimeToLive;
        $payload = [
            'user' => $user,
            'login_credential' => $merchant,
            'iat' => $issuedAtTime,
            'exp' => $tokenExpiration,
        ];

        return $this->generate_jwt($issuedAtTime, $payload, $this->secret);
        //JWT::encode($payload, $this->secret, "HS256");
    }

    /**
     * @throws
     */
    public function validate_request(): bool
    {
        $bearer = $_SERVER["HTTP_BEARER"];
        return $this->is_jwt_valid($bearer);
    }

    /**
     * @throws Exception
     */
    public function is_jwt_valid($jwt): bool
    {
        if (empty($jwt)) {
            return false;
        }

        // split the jwt
        $tokenParts = explode('.', $jwt);
        $header = base64_decode($tokenParts[0]);
        $payload = json_decode(base64_decode($tokenParts[1]));
        $signature_provided = $tokenParts[2];

        // check the expiration time - note this will cause an error if there is no 'exp' claim in the jwt
        $expiration = $payload->exp;
        $is_token_expired = ($expiration - time()) < 0;

        // build a signature based on the header and payload using the secret
        $base64_url_header = $this->base64url_encode($header);
        $base64_url_payload = $this->base64url_encode(json_encode($payload));
        $signature = hash_hmac('SHA256', $base64_url_header . "." . $base64_url_payload, $this->secret, true);
        $base64_url_signature = $this->base64url_encode($signature);


        // verify it matches the signature provided in the jwt
        $is_signature_valid = ($base64_url_signature === $signature_provided);

        if ($is_token_expired || !$is_signature_valid) {
            return false;
        } else {

            // retrieve user
            $login_credential = $payload->login_credential;
            $user = json_decode(json_decode($payload->user));
            $auth = $this->authentication_model->compare($user, $login_credential);
            if ($auth) {
                $this->setUser($user, $login_credential);
                return true;
            } else {
                return false;
            }
        }
    }

    public function base64url_encode($data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    function generate_jwt($headers, $payload, $secret = 'secret'): string
    {
        $headers_encoded = $this->base64url_encode(json_encode($headers));

        $payload_encoded = $this->base64url_encode(json_encode($payload));

        $signature = hash_hmac('SHA256', "$headers_encoded.$payload_encoded", $secret, true);
        $signature_encoded = $this->base64url_encode($signature);

        return "$headers_encoded.$payload_encoded.$signature_encoded";
    }

    /**
     * @param $getUser
     * @param $login_credential
     * @return void
     */
    public function setUser($getUser, $login_credential)
    {
        $sessionData = array(
            'names' => $getUser->names,
            'auth_user' => $getUser->id,
            'logged_in' => true,
        );
        $this->session->put($sessionData);
    }
}
