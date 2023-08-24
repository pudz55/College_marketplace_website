<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ClubMember extends Pivot
{
    //
    protected $fillable = ['club_id', 'user_id'];
}
