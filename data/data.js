const ELETRO_DADOS = {
    introducao: {
        titulo: "Evolução Histórica do Eletromagnetismo",
        audio: "audio/introducao.mp3",
        texto: "A história da eletricidade e do magnetismo é uma construção coletiva que evoluiu atravessando milênios. De observações simples do âmbar até equações sofisticadas de Maxwell, o eletromagnetismo molda o mundo moderno, sendo essencial para a engenharia, comunicações e a vida digital contemporânea."
    },
    cientistas: [
        { ano: "600 a.C.", nome: "Tales de Mileto", desc: "Observou que o âmbar atritado atraía pequenos objetos, a primeira descrição da eletricidade estática.", file: "tales" },
        { ano: "1600", nome: "William Gilbert", desc: "Diferenciou eletricidade de magnetismo e propôs que a Terra é um ímã gigante no tratado De Magnete.", file: "gilbert" },
        { ano: "1752", nome: "Benjamin Franklin", desc: "Provou a natureza elétrica dos raios e introduziu os conceitos de cargas positivas e negativas.", file: "franklin" },
        { ano: "1800", nome: "Alessandro Volta", desc: "Inventou a primeira pilha elétrica, fornecendo uma fonte contínua de corrente para a ciência.", file: "volta" },
        { ano: "1820", nome: "Hans Ørsted", desc: "Descobriu que correntes elétricas criam campos magnéticos, unificando dois campos da física.", file: "orsted" },
        { ano: "1821", nome: "André-Marie Ampère", desc: "Formulou as leis da eletrodinâmica e descreveu a interação matemática entre correntes.", file: "ampere" },
        { ano: "1831", nome: "Michael Faraday", desc: "Descobriu a indução eletromagnética, base para geradores e motores elétricos modernos.", file: "faraday" },
        { ano: "1865", nome: "James Maxwell", desc: "Unificou o eletromagnetismo em equações matemáticas e provou que a luz é uma onda eletromagnética.", file: "maxwell" },
        { ano: "1887", nome: "Heinrich Hertz", desc: "Comprovou experimentalmente a existência de ondas de rádio, confirmando as teorias de Maxwell.", file: "hertz" },
        { ano: "1905", nome: "Albert Einstein", desc: "Explicou o efeito fotoelétrico, unindo o eletromagnetismo à física quântica.", file: "einstein" }
    ],
    quiz: [
        { q: "Quem unificou eletricidade, magnetismo e luz?", opts: ["Newton", "Faraday", "Maxwell", "Hertz"], correct: 2, exp: "Maxwell criou as equações que provam que a luz é eletromagnética." },
        { q: "Qual o princípio básico de um gerador elétrico?", opts: ["Efeito Joule", "Indução de Faraday", "Lei de Ohm", "Inércia"], correct: 1, exp: "A variação de campo magnético gera corrente." },
        // ... (as outras 8 perguntas seguem o mesmo padrão)
    ]
};