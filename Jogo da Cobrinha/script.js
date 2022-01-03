let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')                       //Representa o desenho dentro do canvas
let box = 32

function criarBackGround(){                                 //função que define as cores do desenho

    context.fillStyle = "lightgreen"                        //Define a cor de fundo
    context.fillRect(0, 0, 16 * box, 16 * box)              //Define o tamanho do quadrado
}

//Criando a cobrinha - array de coordenadas
let snake = []
snake[0] = {                                                //Define o que possui dentro do array
    x: 8 * box,
    y: 8 * box
}

function criarCobrinha(){
    for(i =0; i < snake.length; i++){
        context.fillStyle = "green"                         //Define cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box)  //Define o tamanho da cobrinha
    }
}

//Criando a comida da Cobrinha
let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function comidaDaCobrinha(){
    context.fillStyle = 'red'
    context.fillRect(comida.x, comida.y, box, box)
}

//Vinculando os botões do teclado com a cobrinha
document.addEventListener('keydown', update)

function update(event){
    if(event.keyCode == 37 && direcao != 'right') direcao = 'left'
    if(event.keyCode == 38 && direcao != 'up')  direcao = 'down'
    if(event.keyCode == 39 && direcao != 'left')  direcao = 'right'
    if(event.keyCode == 40 && direcao != 'down')    direcao = 'up'
}

// Criar a direção da criarCobrinha, pode ser qualquer uma
let direcao = "right"                                       //Direção da Cobrinha

function iniciarGame(){
    if(snake[0].x > 15 * box && direcao == 'right') snake[0].x = 0
    if(snake[0].x < 0 && direcao == 'left')         snake[0].x = 16 * box
    if(snake[0].y > 15 * box && direcao == 'up')    snake[0].y = 0
    if(snake[0].y < 0 && direcao == 'down')         snake[0].y = 16 * box

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game Over!!')
        }
    }

    criarBackGround()
    criarCobrinha()
    comidaDaCobrinha()

    let snakeX = snake[0].x                                 //Indica a posição x inicial da cobrinha
    let snakeY = snake[0].y                                 //Indica a posição y inicial da cobrinha

    if(direcao === "right") snakeX += box                   //Define as direções da cobrinha
    if(direcao === "left")  snakeX -= box
    if(direcao === "up")    snakeY += box
    if(direcao === "down")  snakeY -= box

    if(snakeX != comida.x || snakeY != comida.y){
        snake.pop()
    } else {
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let novaCabeca = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(novaCabeca)
}

let game = setInterval(iniciarGame, 100)                    //Da um intervalo de 100ms até que o jogo comece, previne que ele trave no início
