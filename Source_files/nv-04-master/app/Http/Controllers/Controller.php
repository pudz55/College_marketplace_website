<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function auth($username,$password)
    {
        $auth = \Auth::attempt(["email" => $username,"password"=>$password]);
        $user=null;
        if ($auth){
            $user=User::where('email',$username)->first()->toJson();
        }

        return $user;
    }

    /**
     * @throws Exception
     */
    public function compare($user, $login_credential)
    {
        try {
            \Log::info($user->email);
            return $user->email==$login_credential->username;
        }catch (Exception $exception){
            throw new Exception("Access denied. Invalid or expired token!");
        }
    }
}
