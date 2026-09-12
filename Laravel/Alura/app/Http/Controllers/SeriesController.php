<?php

namespace App\Http\Controllers;

use App\Mail\SeriesCreated;
use App\Http\Requests\SeriesFormRequest;
use App\Models\Series;
use App\Models\User;
use App\Repositories\SeriesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class SeriesController extends Controller
{
    public function __construct(private SeriesRepository $repository) {
        
    }

    public function index(Request $request)
    {

        $series = Series::all();
        $mensagemSucesso = session('mensagem.sucesso');

        return view('series.index')->with('series', $series)
            ->with('mensagemSucesso', $mensagemSucesso);
    }

    public function create()
    {
        return view('series.create');
    }

    public function store(SeriesFormRequest $request)
{
    // 1. Captura o arquivo usando o nome correto do HTML ('cover')
    $coverPath = $request->file('cover')
        ? $request->file('cover')->store('series_cover', 'public')
        : null;
    
    // 2. Injeta o caminho gerado para dentro do objeto $request
    $request->coverPath = $coverPath;
    
    // 3. Salva no banco de dados através do repositório
    $serie = $this->repository->add($request);

    // O restante do seu código continua igual...
    \App\Events\SeriesCreated::dispatch(
        $serie->nome,
        $serie->id,
        $request->seasonsQty,
        $request->episodesPerSeason,
    );

    return to_route('series.index')
        ->with('mensagem.sucesso', "Série '{$serie->nome}' adicionada com sucesso");
}

    public function destroy(Series $series)
    {
        // 1. Mandamos o Job deletar o arquivo ANTES de apagar a série do banco, 
        // usando o nome correto da propriedade (cover_path)
        if ($series->cover_path) {
            \App\Jobs\DeleteSeriesCover::dispatch($series->cover_path);
        }

        // 2. Agora sim, com a imagem despachada para exclusão, apagamos o registro
        $series->delete();

        return to_route('series.index')
            ->with('mensagem.sucesso', "Série '{$series->nome}' removida com sucesso");
    }

    public function edit(Series $series)
    {
        return view('series.edit')->with('serie', $series);
    }

    public function update(Series $series, SeriesFormRequest $request)
    {
        $series->fill($request->all());
        $series->save();

        return to_route('series.index')
            ->with('mensagem.sucesso', "Série '{$series->nome}' atualizada com sucesso");
    }
}
