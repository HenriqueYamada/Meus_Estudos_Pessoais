<x-layout title="Novo usuário">
    <form method="post">
        @csrf
        
        <div class="form-group mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" name="name" id="name" class="form-control" required>
        </div>

        <div class="form-group mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" name="email" id="email" class="form-control">
        </div>

        <div class="form-group mb-3">
            <label for="password" class="form-label">Senha</label>
            <input type="password" name="password" id="password" class="form-control" required>
        </div>

        <button class="btn btn-primary mt-3">Registrar</button>
    </form>
</x-layout>