export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        })
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}`
    }
}

// const novoUser = new User("Henrique", "henriqueyamadajr@gmail.com", "2008-02-09");

// console.log(User.prototype.isPrototypeOf(novoUser));