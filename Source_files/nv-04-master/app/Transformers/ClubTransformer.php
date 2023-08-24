<?php
namespace App\Transformers;

use LaraCrud\Helpers\TransformerAbstract;
use League\Fractal\ParamBag;
use App\Models\Club;



class ClubTransformer extends TransformerAbstract
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


    public function transform(Club $club)
    {
        $data= [
			"id" => $club->id,
			"clubname" => $club->clubname,
			"clubinfo" => $club->clubinfo,
			"agendas" => $club->agendas,
			"image" => $club->image,
			"user" => $club->user,
			"created_at" => $club->created_at,

        ];
        return $this->filterFields($data);

    }

    
}