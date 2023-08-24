<?php

namespace App\Http\Requests\Api\Clubs;

use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
			'clubname' => 'required|unique:clubs,clubname|max:255',
			'clubinfo' => 'required|string',
			'agendas' => 'nullable|string',
			'image' => 'required|max:255',
			'user' => 'required|max:255',
        ];
    }

    /**
    * Get the error messages for the defined validation rules.
    *
    * @return array
    */
    public function messages(): array
    {
        return [

        ];
    }

}
