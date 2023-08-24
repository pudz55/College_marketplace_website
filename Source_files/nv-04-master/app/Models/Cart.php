<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $product product
 * @property double $price price
 * @property int $quantity quantity
 * @property double $total total
 * @property int $student student
 */
class Cart extends Model
{

    /**
     * Database table name
     */
    protected $table = 'cart';

    /**
     * Mass assignable columns
     */
    protected $fillable = ['uniqcart',
        'product_id',
        'quantity',
        'total',
        'status',
        'user_id',
    ];

    /**
     * Date time columns.
     */
    protected $dates = [];


}
