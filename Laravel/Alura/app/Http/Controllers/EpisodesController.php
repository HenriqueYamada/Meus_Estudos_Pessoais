<?php

namespace App\Http\Controllers;

use App\Models\Season;
use App\Models\Episode;
use Illuminate\Http\Request;

class EpisodesController extends Controller
{
    public function index(Season $season) {
        return view('episodes.index', [
        'episodes' => $season->episodes, 
        'season' => $season,
        'mensagemSucesso' => session('mensagem.sucesso')]);
    }

    public function update(Request $request, Season $season) {
        $watchedEpisodes = $request->episodes;
        $season->episodes->each(function (Episode $episode) use ($watchedEpisodes) {
            $episode->watched = in_array($episode->id, $watchedEpisodes);
            $episode->save(); 
        });

        return to_route('episodes.index', $season->id)->with('mensagem.sucesso', 'Episódios marcados como assistidos!');
    }
}
