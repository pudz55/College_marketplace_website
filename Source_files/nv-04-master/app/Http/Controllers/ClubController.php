<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Club;
use Illuminate\Http\Response;


/**
 * Description of ClubController
 *
 * @author Tuhin Bepari <digitaldreams40@gmail.com>
 */
class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return string
     */
    public function index(Request $request)
    {
        return Club::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param Club $club
     * @return string
     */
    public function show(Club $club)
    {
        return $club->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return Response
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $model = new Club;
        $model->fill($request->all());
        return $model->save() ? $model->toJson() : '';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Request $request
     * @param Club $club
     * @return Response
     */
    public function edit(Request $request, Club $club)
    {

    }

    /**
     * Update a existing resource in storage.
     *
     * @param Request $request
     * @param Club $club
     * @return string
     */
    public function update(Request $request, Club $club)
    {
        $club->fill($request->all());
        return $club->save() ? $club->toJson() : '';
    }

    /**
     * Delete a  resource from  storage.
     *
     * @param Request $request
     * @param Club $club
     * @return string
     * @throws Exception
     */
    public function destroy(Request $request, Club $club)
    {
      return $club->delete() ? 'true' : 'false';
    }
}
