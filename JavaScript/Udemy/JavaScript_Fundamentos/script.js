let hora = new Date().getHours();

        hora = 18;

        if (hora < 12) {
            saudacao = "Bom dia!";
        } else if (hora < 18) {
            saudacao = "Boa tarde!";
        } else {
            saudacao = "Boa noite!";
        }

        document.getElementById("mensagem").innerHTML = saudacao; // innerHTML: configura um texto dentro do parágrafo