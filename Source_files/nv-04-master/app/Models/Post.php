<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property text $post post
 * @property varchar $image image
 * @property varchar $user user
 * @property timestamp $created_at created at
 */
class Post extends Model
{

    /**
     * Database table name
     */
    protected $table = 'posts';

    /**
     * Mass assignable columns
     */
    protected $fillable = ['post',
        'image',
        'user'];

    /**
     * Date time columns.
     */
    protected $dates = [];

//belongs to user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user', 'id');
    }

//has many comments
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

      public function delete() {
          $this->comments()->delete();
          parent::delete();
      }


}
