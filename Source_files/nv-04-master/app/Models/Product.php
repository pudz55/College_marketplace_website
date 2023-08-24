<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property varchar $business business
 * @property varchar $names names
 * @property double $price price
 * @property int $quantity quantity
 * @property text $description description
 * @property varchar $image image
 * @property varchar $user user
 * @property timestamp $created_at created at
 */
class Product extends Model
{

    /**
     * Database table name
     */
    protected $table = 'products';

    /**
     * Mass assignable columns
     */
    protected $fillable = ['business',
        'names',
        'price',
        'quantity',
        'description',
        'image',
        'user'];

    /**
     * Date time columns.
     */
    protected $dates = [];

//belongs to user
    public function user(): BelongsTo
    {
        return $this->belongsTo('App\Models\User', 'user');
    }

}
