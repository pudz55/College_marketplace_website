<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'names',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    //has many posts
    public function posts()
    {
        return $this->hasMany('App\Models\Post', 'user');
    }
    //has many clubs
    public function clubs()
    {
        return $this->hasMany('App\Models\Club', 'user');
    }
    //has many products
    public function products()
    {
        return $this->hasMany('App\Models\Product', 'user');
    }

    //cast user password to hash
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] =\Hash::make($password);
    }
    //belongs to many user though user_school
    public function schools()
    {
        return $this->hasManyThrough('App\Models\User', 'App\Models\UserSchool', 'user_id', 'id', 'id', 'school_id')->whereRole('school');
    }

    //has many cart
    public function carts(): HasMany
    {
        return $this->hasMany('App\Models\Cart', 'user_id');
    }
    public function delete() {
        $this->posts()->delete();
        $this->clubs()->delete();
        $this->products()-> delete();
        $this->carts()->delete();
        parent::delete();
    }

}
