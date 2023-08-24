<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

/**
 * @property varchar $clubname clubname
 * @property text $clubinfo clubinfo
 * @property text $agendas agendas
 * @property varchar $image image
 * @property varchar $user user
 * @property timestamp $created_at created at
 */
class Club extends Model
{

    /**
     * Database table name
     */
    protected $table = 'clubs';

    /**
     * Mass assignable columns
     */
    protected $fillable = ['clubname',
        'clubinfo',
        'agendas',
        'image'];

    /**
     * Date time columns.
     */
    protected $dates = [];
    protected $appends = ['current_user_joined'];

//belongs to user
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user');
    }
    //has many
    public function members(): HasManyThrough
    {
        //has many user through club_member
        return $this->hasManyThrough(User::class, ClubMember::class, 'club_id', 'id', 'id', 'user_id');
    }
    public function getCurrentUserJoinedAttribute(): bool
    {
        $user =request()->session()->get('auth_user');
        if ($user) {
            $member = ClubMember::where('user_id', $user)->where('club_id', $this->id)->first();
            if ($member) {
                return true;
            }
        }
        return false;
    }
}
