<?php
namespace App\Transformers;

use LaraCrud\Helpers\TransformerAbstract;
use League\Fractal\ParamBag;
use App\Models\Cart;



class CartTransformer extends TransformerAbstract
{
     /**
     * @var array
     */
    private $validParams = ['q', 'limit', 'page','fields'];

    /**
     * @var array
     */
    protected $availableIncludes = [];

     /**
      * @var array
      */
    protected $defaultIncludes = [];


    public function transform(Cart $cart)
    {
        $data= [
			"id" => $cart->id,
			"product" => $cart->product,
			"names" => $cart->names,
			"businessname" => $cart->businessname,
			"price" => $cart->price,
			"quantity" => $cart->quantity,
			"total" => $cart->total,
			"image" => $cart->image,
			"student" => $cart->student,
			"business" => $cart->business,
			"status" => $cart->status,
			"created_at" => $cart->created_at,
			"uniqcart" => $cart->uniqcart,

        ];
        return $this->filterFields($data);

    }

    
}