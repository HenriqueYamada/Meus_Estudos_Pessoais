<x-layout title="Login">
    
    <!-- Exibe mensagens de erro de validação caso existam -->
    

    <form method="post">
        @csrf
        
        <div class="form-group mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" name="email" id="email" class="form-control" required>
        </div>

        <div class="form-group mb-3">
            <label for="password" class="form-label">Senha</label>
            <input type="password" name="password" id="password" class="form-control" required>
        </div>

        <button class="btn btn-primary mt-3">Entrar</button>
        <a href="{{ route('users.create') }}" class="btn btn-secondary mt-3 ms-2">Registrar</a>
    </form>
</x-layout>