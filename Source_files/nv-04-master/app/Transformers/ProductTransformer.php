<?php
namespace App\Transformers;

use LaraCrud\Helpers\TransformerAbstract;
use League\Fractal\ParamBag;
use App\Models\Product;



class ProductTransformer extends TransformerAbstract
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


    public function transform(Product $product)
    {
        $data= [
			"id" => $product->id,
			"business" => $product->business,
			"names" => $product->names,
			"price" => $product->price,
			"quantity" => $product->quantity,
			"description" => $product->description,
			"image" => $product->image,
			"user" => $product->user,
			"created_at" => $product->created_at,

        ];
        return $this->filterFields($data);

    }

    
}