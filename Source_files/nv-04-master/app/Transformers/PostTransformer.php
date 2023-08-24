<?php
namespace App\Transformers;

use LaraCrud\Helpers\TransformerAbstract;
use League\Fractal\ParamBag;
use App\Models\Post;



class PostTransformer extends TransformerAbstract
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


    public function transform(Post $post)
    {
        $data= [
			"id" => $post->id,
			"post" => $post->post,
			"image" => $post->image,
			"user" => $post->user,
			"created_at" => $post->created_at,

        ];
        return $this->filterFields($data);

    }

    
}