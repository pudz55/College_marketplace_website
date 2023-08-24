<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Cart;


/**
 * Description of CartController
 *
 * @author Tuhin Bepari <digitaldreams40@gmail.com>
 */
class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return string
     */
    public function index(Request $request)
    {
        return Cart::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Cart $cart
     * @return string
     */
    public function show(Request $request, Cart $cart)
    {
        return $cart->toJson();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $model = new Cart;
        $model->fill($request->all());
        return $model->save() ? $model->toJson() : '';
    }


    /**
     * Update a existing resource in storage.
     *
     * @param Request $request
     * @param Cart $cart
     * @return string
     */
    public function update(Request $request, Cart $cart)
    {
        $cart->fill($request->all());
        return $cart->save() ? $cart->toJson() : '';
    }

    /**
     * Delete a  resource from  storage.
     *
     * @param Request $request
     * @param Cart $cart
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Request $request, Cart $cart)
    {
        return $cart->delete() ? response()->json(['success' => true]) : response()->json(['success' => false]);
    }
}
