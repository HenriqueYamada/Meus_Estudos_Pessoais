<x-layout title="Temporadas de {!! $series->nome !!}">
    <div class="d-flex justify-center">
        <img src="{{ asset('storage/' . $series->cover_path) }}" 
            alt=""
            style="height: 400px" 
            class="img-fluid">
    </div>

    <ul class="list-group">
        @foreach ($seasons as $season)
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a href="{{ route('episodes.index', $season->id) }}">
                    Temporada {{ $season->number }}
                </a>

                <span class="badge bg-secondary">
                    {{ $season->episodes()->where('watched', true)->count() }} / {{ $season->episodes->count() }}
                </span>
            </li>
        @endforeach
    </ul>
</x-layout>
