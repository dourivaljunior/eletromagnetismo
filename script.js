/* CANVAS FUNDO (Partículas Eletrônicas) */
const canvas = document.getElementById('mechanicsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = 2;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() { ctx.fillStyle = '#22c55e'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}
function init() { for (let i = 0; i < 80; i++) particles.push(new Particle()); }
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
            if (dist < 150) {
                ctx.strokeStyle = `rgba(34, 197, 94, ${1 - dist/150})`;
                ctx.lineWidth = 0.5; ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}
init(); animate();

/* FUNÇÃO TOGGLE HISTORIA */
function toggleHistoria() {
    const conteudo = document.getElementById('historia-conteudo');
    const btn = document.getElementById('expand-btn');
    if (!conteudo) return; // Evita erro se o ID não existir na página
    if (conteudo.classList.contains('hidden')) {
        conteudo.classList.remove('hidden');
        setTimeout(() => { conteudo.style.opacity = '1'; }, 10);
        btn.style.transform = 'rotate(180deg)';
    } else {
        conteudo.style.opacity = '0';
        setTimeout(() => { conteudo.classList.add('hidden'); }, 700);
        btn.style.transform = 'rotate(0deg)';
    }
}

/* 19 CIENTISTAS (Corrigido com crases para aceitar quebras de linha) */
const cientistas = [
    { ano: "624 a.C.", nome: "Tales de Mileto", desc: `Observou que o âmbar, ao ser esfregado com tecido ou pele de animal, passava a atrair pequenos fragmentos leves, como palha, folhas secas ou fibras vegetais. Primeira descrição da eletricidade estática.`, file: "tales" },
    { ano: "Séc IV a.C.", nome: "Chineses", desc: `Uso da magnetita para criar as primeiras bússolas rudimentares.`, file: "chineses" },
    { ano: "1600", nome: "William Gilbert", desc: `Autor de 'De Magnete'. Introduziu o termo electricus para materiais que se eletrizam por atrito. Defendeu que a Terra é um grande ímã.`, file: "gilbert" },
    { ano: "1672", nome: "Otto von Guericke", desc: `Construiu o primeiro gerador eletrostático.`, file: "guericke" },
    { ano: "1729", nome: "Stephen Gray", desc: `Descobriu a condução elétrica e definiu condutores e isolantes.`, file: "gray" },
    { ano: "1752", nome: "Benjamin Franklin", desc: `Provou que raios são elétricos e definiu cargas (+) e (-). Criou o para-raios.`, file: "franklin" },
    { ano: "1780", nome: "Luigi Galvani", desc: `Descobriu a bioeletricidade em contrações musculares de rãs.`, file: "galvani" },
    { ano: "1800", nome: "Alessandro Volta", desc: `Inventou a pilha elétrica, fonte contínua de corrente.`, file: "volta" },
    { ano: "1820", nome: "Hans Christian Ørsted", desc: `Descobriu que corrente elétrica gera campo magnético.`, file: "orsted" },
    { ano: "1821", nome: "André-Marie Ampère", desc: `Formulou as leis matemáticas da eletrodinâmica.`, file: "ampere" },
    { ano: "1827", nome: "Georg Simon Ohm", desc: `Estabeleceu a Lei de Ohm (V = R·I).`, file: "ohm" },
    { ano: "1831", nome: "Michael Faraday", desc: `Descobriu a indução eletromagnética e criou o motor elétrico.`, file: "faraday" },
    { ano: "1834", nome: "Heinrich Lenz", desc: `Formulou a lei do sentido da corrente induzida.`, file: "lenz" },
    { ano: "1865", nome: "James Clerk Maxwell", desc: `Unificou luz, eletricidade e magnetismo em 4 equações.`, file: "maxwell" },
    { ano: "1887", nome: "Heinrich Hertz", desc: `Confirmou experimentalmente as ondas de rádio.`, file: "hertz" },
    { ano: "1890", nome: "Nikola Tesla", desc: `Sistema de corrente alternada e motores de indução.`, file: "tesla" },
    { ano: "1890", nome: "Thomas Edison", desc: `Sistemas de corrente contínua e lâmpada comercial.`, file: "edison" },
    { ano: "1896", nome: "Guglielmo Marconi", desc: `Desenvolvimento do rádio e telecomunicações.`, file: "marconi" },
    { ano: "1905", nome: "Albert Einstein", desc: `Explicou o efeito fotoelétrico e a dualidade da luz.`, file: "einstein" }
];

/* RENDERIZAR TIMELINE */
const root = document.getElementById('timeline-root');
if (root) {
    cientistas.forEach((c, i) => {
        const isLeft = i % 2 === 0;
        root.innerHTML += `
            <div class="timeline-item ${isLeft ? 'item-left' : 'item-right'} justify-between">
                <div class="timeline-branch"></div>
                <div class="timeline-dot"></div>
                <div class="w-full md:w-[46%] ${isLeft ? 'text-right md:pr-12' : 'md:ml-auto text-left md:pl-12'}">
                    <div class="sci-card-container">
                        <img src="fotos/${c.file}.jpg" class="sci-photo ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}" alt="${c.nome}">
                        <span class="text-green-500 font-bold text-3xl font-['Syncopate']">${c.ano}</span>
                        <h3 class="text-3xl font-bold text-white uppercase mt-2 mb-6">${c.nome}</h3>
                        <p class="text-lg leading-relaxed text-green-50 font-medium">${c.desc}</p>
                        <div class="mt-8 pt-6 border-t-2 border-green-500/10">
                            <audio controls class="w-full h-8"><source src="audio/${c.file}.mp3"></audio>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

/* QUIZ (MESMA LÓGICA) */
const quizDB = [
    { q: "Quem descobriu que corrente gera campo magnético?", opts: ["Volta", "Ørsted", "Faraday", "Ampère"], correct: 1, exp: "Ørsted em 1820." },
    { q: "Qual a unidade de medida da tensão elétrica?", opts: ["Ampère", "Ohm", "Volt", "Watt"], correct: 2, exp: "Homenagem a Alessandro Volta." },
    { q: "Quem unificou o eletromagnetismo em 4 equações?", opts: ["Maxwell", "Tesla", "Hertz", "Franklin"], correct: 0, exp: "James Clerk Maxwell." },
    { q: "O efeito fotoelétrico foi explicado por:", opts: ["Newton", "Einstein", "Faraday", "Ohm"], correct: 1, exp: "Albert Einstein." },
    { q: "A Lei de Ohm é expressa por:", opts: ["V=R.I", "V=R/I", "P=V/I", "P=V.I"], correct: 0, exp: "Tensão = Resistência x Corrente." },
    { q: "Quem descobriu a indução eletromagnética?", opts: ["Faraday", "Edison", "Gilbert", "Gray"], correct: 0, exp: "Michael Faraday em 1831." },
    { q: "A Corrente Alternada (AC) foi defendida por:", opts: ["Edison", "Tesla", "Galvani", "Coulomb"], correct: 1, exp: "Nikola Tesla." },
    { q: "A Lei de Lenz trata de qual aspecto?", opts: ["Voltagem", "Sentido da corrente induzida", "Resistência", "Calor"], correct: 1, exp: "Oposição à variação do fluxo." },
    { q: "Quem provou as ondas de rádio em laboratório?", opts: ["Marconi", "Hertz", "Maxwell", "Einstein"], correct: 1, exp: "Heinrich Hertz." },
    { q: "Qual mineral foi usado nas primeiras bússolas?", opts: ["Quartzo", "Magnetita", "Âmbar", "Pirita"], correct: 1, exp: "Pedra-ímã natural." },
    { q: "Tales de Mileto observou eletricidade no:", opts: ["Ferro", "Âmbar", "Plástico", "Vidro"], correct: 1, exp: "Âmbar (elektron)." },
    { q: "Quem diferenciou eletricidade de magnetismo em 1600?", opts: ["Gilbert", "Coulomb", "Franklin", "Gray"], correct: 0, exp: "William Gilbert." },
    { q: "O primeiro gerador eletrostático foi feito por:", opts: ["Guericke", "Ohm", "Lenz", "Volta"], correct: 0, exp: "Otto von Guericke." },
    { q: "A balança de torção para medir força elétrica é de:", opts: ["Coulomb", "Ampère", "Einstein", "Hertz"], correct: 0, exp: "Charles de Coulomb." },
    { q: "Quem classificou condutores e isolantes?", opts: ["Stephen Gray", "Galvani", "Tesla", "Maxwell"], correct: 0, exp: "Stephen Gray." },
    { q: "A bioeletricidade (sapos) foi estudada por:", opts: ["Volta", "Galvani", "Tales", "Faraday"], correct: 1, exp: "Luigi Galvani." },
    { q: "A primeira lâmpada comercial viável foi de:", opts: ["Edison", "Tesla", "Maxwell", "Ohm"], correct: 0, exp: "Thomas Edison." },
    { q: "O telégrafo sem fio foi desenvolvido por:", opts: ["Marconi", "Gilbert", "Gray", "Lenz"], correct: 0, exp: "Guglielmo Marconi." },
    { q: "A força magnética entre fios paralelos foi lei de:", opts: ["Ampère", "Ohm", "Volta", "Franklin"], correct: 0, exp: "André-Marie Ampère." },
    { q: "A gaiola de Faraday protege contra:", opts: ["Corrente Elétrica", "Campos elétricos externos", "Força Eletrostática", "Tensão Elétrica"], correct: 1, exp: "Blindagem eletrostática." }
];

let cur = 0, score = 0;
function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    const q = quizDB[cur];
    container.innerHTML = `
        <p class="text-2xl text-white font-bold mb-10 italic">Questão ${cur+1}/20: "${q.q}"</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${q.opts.map((o, i) => `<button class="option-btn" onclick="checkAnswer(${i})">${o}</button>`).join('')}
        </div>
        <div id="quiz-feedback" class="hidden mt-8 p-6 rounded-2xl border-2 bg-black/40 text-lg"></div>
        <button id="next-btn" onclick="nextQuestion()" class="hidden bg-green-600 px-10 py-4 mt-8 rounded-full font-bold float-right uppercase">Próxima →</button>
    `;
}

window.checkAnswer = (idx) => {
    const q = quizDB[cur], feed = document.getElementById('quiz-feedback'), btns = document.querySelectorAll('.option-btn');
    feed.classList.remove('hidden');
    if(idx === q.correct) {
        btns[idx].classList.add('correct'); score++;
        const scoreDisp = document.getElementById('score-display');
        if(scoreDisp) scoreDisp.innerText = score;
        feed.innerHTML = `<b>CERTO!</b> ${q.exp}`;
    } else {
        btns[idx].classList.add('wrong'); btns[q.correct].classList.add('correct');
        feed.innerHTML = `<b>ERRADO.</b> ${q.exp}`;
    }
    document.getElementById('next-btn').classList.remove('hidden');
    btns.forEach(b => b.disabled = true);
};

window.nextQuestion = () => { 
    cur++; 
    if (cur < quizDB.length) {
        renderQuiz();
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2 class='text-4xl text-center font-bold'>FIM DO DESAFIO! <br> Pontuação: ${score}/20</h2>`;
    }
};

// Só roda o quiz se o container existir na página atual
if (document.getElementById('quiz-container')) renderQuiz();