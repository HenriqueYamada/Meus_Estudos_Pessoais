<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Season extends Model // <-- Precisa ser exatamente "Season" no singular
{
    protected $fillable = ['number'];

    public function series()
    {
        return $this->belongsTo(Series::class);
    }

    public function episodes()
    {
        return $this->hasMany(Episode::class);
    }
}