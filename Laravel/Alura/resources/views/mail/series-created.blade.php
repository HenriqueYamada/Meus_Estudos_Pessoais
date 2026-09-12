@component('mail::message')

# {{ $nomeSerie }} criada

A série {{ $nomeSerie }} com {{ $qtdTemporadas }} temporadas e {{ $episodiosPorTemporada }} e episodios por temporada

Acesse aqui:

@component('mail::button', ['url' => route('seasons.index', $idSerie)])
Ver série
@endcomponent

@endcomponent