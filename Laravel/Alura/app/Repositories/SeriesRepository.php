<?php

namespace App\Repositories;

use App\Http\Requests\SeriesFormRequest;
use App\Models\Series; // <-- CERTIFIQUE-SE QUE ESTÁ NO PLURAL: Models

interface SeriesRepository 
{
    public function add(SeriesFormRequest $request): Series;
}