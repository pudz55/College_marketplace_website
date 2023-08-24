<?php

namespace App\Http\Requests\Api\Cart;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
			'product' => 'required|numeric',
			'names' => 'required|max:255',
			'businessname' => 'required|max:255',
			'price' => 'required|numeric',
			'quantity' => 'required|numeric',
			'total' => 'required|numeric',
			'image' => 'required|max:255',
			'student' => 'required|numeric',
			'business' => 'required|numeric',
			'status' => 'nullable|max:255',
			'uniqcart' => 'required|unique:cart,uniqcart|max:255',
        ];
    }

    /**
    * Get the error messages for the defined validation rules.
    *
    * @return array
    */
    public function messages()
    {
        return [

        ];
    }

}
