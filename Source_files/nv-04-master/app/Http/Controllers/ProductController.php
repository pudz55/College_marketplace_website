<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Response;


/**
 * Description of ProductController
 *
 * @author Tuhin Bepari <digitaldreams40@gmail.com>
 */
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return string
     */
    public function index(Request $request)
    {
        return Product::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Product $product
     * @return string
     */
    public function show(Request $request, Product $product)
    {
        return $product->toJson();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $model = new Product;
        $model->fill($request->all());
        return $model->save() ? $model->toJson() : '';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Request $request
     * @param Product $product
     * @return string
     */
    public function edit(Request $request, Product $product)
    {
        return $product->toJson();
    }

    /**
     * Update a existing resource in storage.
     *
     * @param Request $request
     * @param Product $product
     * @return string
     */
    public function update(Request $request, Product $product)
    {
        $product->fill($request->all());
        return $product->save() ? $product->toJson() : '';
    }

    /**
     * Delete a  resource from  storage.
     *
     * @param Request $request
     * @param Product $product
     * @return string
     * @throws Exception
     */
    public function destroy(Request $request, Product $product)
    {
        return $product->delete() ? 'true' : 'false';
    }
}
