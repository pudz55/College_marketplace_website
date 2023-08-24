<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;


/**
 * Description of PostController
 *
 * @author Tuhin Bepari <digitaldreams40@gmail.com>
 */
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return string
     */
    public function index(Request $request)
    {
        return Post::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Post $post
     * @return string
     */
    public function show(Request $request, Post $post)
    {
        return $post->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $model = new Post;
        $model->fill($request->all());
        return $model->save() ? $model->toJson() : 'false';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Request $request
     * @param Post $post
     * @return string
     */
    public function edit(Request $request, Post $post)
    {
        return $post->toJson();
    }

    /**
     * Update a existing resource in storage.
     *
     * @param Request $request
     * @param Post $post
     * @return string
     */
    public function update(Request $request, Post $post)
    {
        $post->fill($request->all());
        return $post->save() ? $post->toJson() : 'false';
    }

    /**
     * Delete a  resource from  storage.
     *
     * @param Request $request
     * @param Post $post
     * @return string
     * @throws \Exception
     */
    public function destroy(Request $request, Post $post)
    {
        return $post->delete() ? 'true' : 'false';
    }
}
