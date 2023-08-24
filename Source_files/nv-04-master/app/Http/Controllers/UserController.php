<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;


/**
 * Description of UserController
 *
 * @author Tuhin Bepari <digitaldreams40@gmail.com>
 */
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return string
     */
    public function index(Request $request)
    {
        return User::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param User $user
     * @return string
     */
    public function show(Request $request, User $user)
    {
        return $user->toJson();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $model = new User;
        $model->fill($request->all());
        return $model->save() ? $model->toJson() : '';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Request $request
     * @param User $user
     * @return string
     */
    public function edit(Request $request, User $user)
    {
        return $user->update($request->all()) ? $user->toJson() : '';
    }

    /**
     * Update a existing resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return string
     */
    public function update(Request $request, User $user)
    {
        $user->fill($request->all());
        return $user->save() ? $user->toJson() : '';
    }

    /**
     * Delete a  resource from  storage.
     *
     * @param Request $request
     * @param User $user
     * @return string
     * @throws Exception
     */
    public function destroy(Request $request, User $user)
    {
        return $user->delete() ? 'true' : 'false';
    }
}
