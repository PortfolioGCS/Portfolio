import { Levels } from './level.js';

 let niveau = 0;
 let miyu = Levels;
 let ina = JSON.parse(JSON.stringify(Levels));
 let x = 0;
 let y = 0;
 let test = 0;
 let once = true
 let fps = 10
 let pas = 0
 let debut = 0
 let audio = new Audio()
 let son = new Audio()
 let touche = ['ArrowDown','ArrowUp','ArrowRight','ArrowLeft']
 let tst = 1
 let ghgghgh = 0
 let pass = new Audio

 menu()

 function dessin(){

    document.gameboard = document.getElementById('gameboard')
    document.gameboard.innerHTML = ''

    for (let i = 0; i < Levels[niveau].length; i++) {
        for (let j = 0; j < Levels[0][i].length; j++) {
            if (Levels[niveau][i][j] === 0 ){
                const empty = document.createElement('div')
                empty.classList.add('empty')
                document.gameboard.appendChild(empty)
                empty.style.top = `${i * 4}vw`
                empty.style.left = `${j * 4}vw`
            } else if (Levels[niveau][i][j] === 1) {
                const wall = document.createElement('div')
                wall.classList.add('wall')
                document.gameboard.appendChild(wall)
                wall.style.top = `${i * 4}vw`
                wall.style.left = `${j * 4}vw`
            } else if (Levels[niveau][i][j] === 2) {
                const box = document.createElement('div')
                box.classList.add('box')
                document.gameboard.appendChild(box)
                box.style.top = `${i * 4}vw`
                box.style.left = `${j * 4}vw`
            } else if (Levels[niveau][i][j] === 3) {
                const player = document.createElement('div')
                player.classList.add('player')
                document.gameboard.appendChild(player)
                player.style.top = `${i * 4}vw`
                player.style.left = `${j * 4}vw`

                x = j
                y = i

                if (Levels[niveau][i][j] === 3){
                    if (tst < 4 ){
                        tst++
                    }else {
                        tst = 1
                    }
                    player.style.backgroundImage = `url(assets/joueur/uwu/${tst}.png)`
                }
            } else if (Levels[niveau][i][j] === 4) {
                const goal = document.createElement('div')
                goal.classList.add('goal')
                document.gameboard.appendChild(goal)
                goal.style.top = `${i * 4}vw`
                goal.style.left = `${j * 4}vw`
            } else if (Levels[niveau][i][j] === 5) {
                const boxOnGoal = document.createElement('div')
                boxOnGoal.classList.add('boxOnGoal')
                document.gameboard.appendChild(boxOnGoal)
                boxOnGoal.style.top = `${i * 4}vw`
                boxOnGoal.style.left = `${j * 4}vw`
            } else if (Levels[niveau][i][j] === 6) {
                const playerOnGoal = document.createElement('div')
                playerOnGoal.classList.add('playerOnGoal')
                document.gameboard.appendChild(playerOnGoal)
                playerOnGoal.style.top = `${i * 4}vw`
                playerOnGoal.style.left = `${j * 4}vw`

                if (Levels[niveau][i][j] === 6){
                    if (tst < 4 ){
                        tst++
                    }else {
                        tst = 1
                    }
                    playerOnGoal.style.backgroundImage = `url(assets/joueur/oni/${tst}.png)`
                }
            }
        }
    }
 }

 function read(){
    document.addEventListener('keydown', function(oni){
        if (!once) return
        once = false
        if (oni.key === 'n' ){
            if (niveau < Levels.length - 1){
                niveau++
            } else {
                niveau = 0
            }
        } else if (oni.key === 'b'){
            if (niveau > 0){
                niveau--
            } else {
                niveau = Levels.length - 1
            }
        } else if(oni.key === touche[0]){
            if (Levels[niveau][y][x] === 3 && Levels[niveau][y+1][x] ===5 && Levels[niveau][y+2][x] === 0){
                console.log('0')
                Levels[niveau][y][x] = 0
                Levels[niveau][y+1][x] = 6
                Levels[niveau][y+2][x] = 2
                y++
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y+1][x] === 2 && Levels[niveau][y+2][x] === 0){
                console.log('0.5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y+1][x] = 3
                Levels[niveau][y+2][x] = 2
                y++
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y+1][x] !==1 && Levels[niveau][y+1][x] !== 5){
                console.log('1')
                if (Levels[niveau][y+1][x] === 2 && Levels[niveau][y+2][x] !== 1 && Levels[niveau][y+2][x] !== 2){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y+2][x] === 4){
                        Levels[niveau][y+2][x] = 5
                    } else {
                        Levels[niveau][y+2][x] = 2
                    }
                    if (Levels[niveau][y+1][x] === 4){
                        Levels[niveau][y+1][x] = 6
                    } else {
                        Levels[niveau][y+1][x] = 3
                    }
                    y++
                } else if (Levels[niveau][y+1][x] !== 2 && Levels[niveau][y+1][x] !== 1 && Levels[niveau][y+1][x] !== 5){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y+1][x] === 4){
                        Levels[niveau][y+1][x] = 6
                    } else {
                        Levels[niveau][y+1][x] = 3
                    }
                    y++
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y+1][x] === 2){
                console.log('2')
                if (Levels[niveau][y+2][x] !== 1 && Levels[niveau][y+2][x] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y+2][x] === 4){
                        Levels[niveau][y+2][x] = 5
                    } else {
                        Levels[niveau][y+2][x] = 2
                    }
                    if (Levels[niveau][y+1][x] === 4){
                        Levels[niveau][y+1][x] = 6
                    } else {
                        Levels[niveau][y+1][x] = 3
                    }
                    y++
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y+1][x] === 5 && Levels[niveau][y][x+2] !== 1 && Levels[niveau][y][x+2] !== 2){
                console.log('3')
                if (Levels[niveau][y+2][x] === 5 && Levels[niveau][y+2][x] === 5){
                    console.log('3.5')
                } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y+1][x] === 5){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y+1][x] === 5){
                        Levels[niveau][y+2][x] = 5
                        Levels[niveau][y+1][x] = 6
                    } else {
                        Levels[niveau][y+1][x] = 3
                    }
                    y++
                } else if (Levels[niveau][y+2][x] !== 1 && Levels[niveau][y+2][x] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y+2][x] === 4){
                        Levels[niveau][y+2][x] = 5
                    } else {
                        Levels[niveau][y+2][x] = 2
                    }
                    if (Levels[niveau][y+1][x] === 4){
                        Levels[niveau][y+1][x] = 6
                    } else {
                        Levels[niveau][y+1][x] = 3
                    }
                    y++
                }
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y+1][x] === 5 && Levels[niveau][y+2][x] !== 1 && Levels[niveau][y+2][x] !== 2 && Levels[niveau][y+2][x] === 4){
                console.log('4')
                Levels[niveau][y][x] = 4
                if (Levels[niveau][y+1][x] === 5){
                    Levels[niveau][y+2][x] = 5
                    Levels[niveau][y+1][x] = 6
                } else {
                    Levels[niveau][y+1][x] = 3
                }
                y++
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y+1][x] === 5 && Levels[niveau][y+2][x] === 0) {
                console.log('5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y+1][x] = 6
                Levels[niveau][y+2][x] = 2
                y++
            } else if (Levels[niveau][y+1][x] !==1 && Levels[niveau][y+1][x] !== 5 && Levels[niveau][y+1][x] !== 2 && Levels[niveau][y][x] === 3 || Levels[niveau][y][x] === 6 && Levels[niveau][y+1][x] !== 1 && Levels[niveau][+1][x] !== 5 && Levels[niveau][y+1][x] !== 2){
                console.log('6')
                Levels[niveau][y][x] = 0
                if (Levels[niveau][y+1][x] === 5 && Levels[niveau][y+2][x] === 1){
                }else if (Levels[niveau][y+1][x] === 4){
                    Levels[niveau][y+1][x] = 6
                    y ++
                } else {
                    Levels[niveau][y+1][x] = 3
                    y++
                }
            } 
        } else if (oni.key === touche[1]){
            if (Levels[niveau][y][x] === 3 && Levels[niveau][y-1][x] ===5 && Levels[niveau][y-2][x] === 0){
                console.log('0')
                Levels[niveau][y][x] = 0
                Levels[niveau][y-1][x] = 6
                Levels[niveau][y-2][x] = 2
                y--
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y-1][x] === 2 && Levels[niveau][y-2][x] === 0){
                console.log('0.5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y-1][x] = 3
                Levels[niveau][y-2][x] = 2
                y--
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y-1][x] !==1 && Levels[niveau][y-1][x] !== 5){
                console.log('1')
                    if (Levels[niveau][y-1][x] === 2 && Levels[niveau][y-2][x] !== 1 && Levels[niveau][y-2][x] !== 2){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y-2][x] === 4){
                        Levels[niveau][y-2][x] = 5
                    } else {
                        Levels[niveau][y-2][x] = 2
                    }
                    if (Levels[niveau][y-1][x] === 4){
                        Levels[niveau][y-1][x] = 6
                    } else {
                        Levels[niveau][y-1][x] = 3
                    }
                    y--
                } else if (Levels[niveau][y-1][x] !== 2 && Levels[niveau][y-1][x] !== 1 && Levels[niveau][y-1][x] !== 5){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y-1][x] === 4){
                        Levels[niveau][y-1][x] = 6
                    } else {
                        Levels[niveau][y-1][x] = 3
                    }
                    y--
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y-1][x] === 2){
                console.log('2')
                if (Levels[niveau][y-2][x] !== 1 && Levels[niveau][y-2][x] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y-2][x] === 4){
                        Levels[niveau][y-2][x] = 5
                    } else {
                        Levels[niveau][y-2][x] = 2
                    }
                    if (Levels[niveau][y-1][x] === 4){
                        Levels[niveau][y-1][x] = 6
                    } else {
                        Levels[niveau][y-1][x] = 3
                    }
                    y--
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y-1][x] === 5 && Levels[niveau][y-2][x] !== 1 && Levels[niveau][y-2][x] !== 2){
                console.log('3')
                // if (Levels[niveau][y-1][x] === 5 && Levels[niveau][y-2][x] === 1){
                //     console.log('3.1')
                // } else 
                if (Levels[niveau][y-1][x] === 5 && Levels[niveau][y-2][x] === 5){
                    console.log('3.5')
                } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y-1][x] === 5){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y-1][x] === 5){
                        Levels[niveau][y-2][x] = 5
                        Levels[niveau][y-1][x] = 6
                    } else {
                        Levels[niveau][y-1][x] = 3
                    }
                    y--
                } else if (Levels[niveau][y-2][x] !== 1 && Levels[niveau][y-2][x] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y-2][x] === 4){
                        Levels[niveau][y-2][x] = 5
                    } else {
                        Levels[niveau][y-2][x] = 2
                    }
                    if (Levels[niveau][y-1][x] === 4){
                        Levels[niveau][y-1][x] = 6
                    } else {
                        Levels[niveau][y-1][x] = 3
                    }
                    y--
                }
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y-1][x] === 5 && Levels[niveau][y-2][x] !== 1 && Levels[niveau][y-2][x] !== 2 && Levels[niveau][y-2][x] === 4){
                console.log('4')
                Levels[niveau][y][x] = 4
                if (Levels[niveau][y-1][x] === 5){
                    Levels[niveau][y-2][x] = 5
                    Levels[niveau][y-1][x] = 6
                } else {
                    Levels[niveau][y-1][x] = 3
                }
                y--
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y-1][x] === 5 && Levels[niveau][y-2][x] === 0) {
                console.log('5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y-1][x] = 6
                Levels[niveau][y-2][x] = 2
                y--
            } else if (Levels[niveau][y-1][x] !==1 && Levels[niveau][y-1][x] !== 5 && Levels[niveau][y-1][x] !== 2 && Levels[niveau][y][x] === 3 || Levels[niveau][y][x] === 6 && Levels[niveau][y-1][x] !== 1 && Levels[niveau][y-1][x] !== 5 && Levels[niveau][y-1][x] !== 2){
                console.log('6')
                Levels[niveau][y][x] = 0
                if (Levels[niveau][y-1][x] === 5 && Levels[niveau][y-2][x] === 1){
                }else if (Levels[niveau][y-1][x] === 4){
                    Levels[niveau][y-1][x] = 6
                    y --
                } else {
                    Levels[niveau][y-1][x] = 3
                    y--
                }
            } 
        } else if(oni.key === touche[2]){
            if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x+1] ===5 && Levels[niveau][y][x+2] === 0){
                console.log('0')
                Levels[niveau][y][x] = 0
                Levels[niveau][y][x+1] = 6
                Levels[niveau][y][x+2] = 2
                x++
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x+1] === 2 && Levels[niveau][y][x+2] === 0){
                console.log('0.5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y][x+1] = 3
                Levels[niveau][y][x+2] = 2
                x++
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x+1] !==1 && Levels[niveau][y][x+1] !== 5){
                console.log('1')
                if (Levels[niveau][y][x+1] === 2 && Levels[niveau][y][x+2] !== 1 && Levels[niveau][y][x+2] !== 2){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y][x+2] === 4){
                        Levels[niveau][y][x+2] = 5
                    } else {
                        Levels[niveau][y][x+2] = 2
                    }
                    if (Levels[niveau][y][x+1] === 4){
                        Levels[niveau][y][x+1] = 6
                    } else {
                        Levels[niveau][y][x+1] = 3
                    }
                    x++
                } else if (Levels[niveau][y][x+1] !== 2 && Levels[niveau][y][x+1] !== 1 && Levels[niveau][y][x+1] !== 5){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y][x+1] === 4){
                        Levels[niveau][y][x+1] = 6
                    } else {
                        Levels[niveau][y][x+1] = 3
                    }
                    x++
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x+1] === 2){
                console.log('2')
                if (Levels[niveau][y][x+2] !== 1 && Levels[niveau][y][x+2] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y][x+2] === 4){
                        Levels[niveau][y][x+2] = 5
                    } else {
                        Levels[niveau][y][x+2] = 2
                    }
                    if (Levels[niveau][y][x+1] === 4){
                        Levels[niveau][y][x+1] = 6
                    } else {
                        Levels[niveau][y][x+1] = 3
                    }
                    x++
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x+1] === 5 && Levels[niveau][y][x+2] !== 1 && Levels[niveau][y][x+2] !== 2){
                console.log('3')
                if (Levels[niveau][y][x+1] === 5 && Levels[niveau][y][x+2] === 5){
                    console.log('3.5')
                } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x+1] === 5){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y][x+1] === 5){
                        Levels[niveau][y][x+2] = 5
                        Levels[niveau][y][x+1] = 6
                    } else {
                        Levels[niveau][y][x+1] = 3
                    }
                    x++
                } else if (Levels[niveau][y][x+2] !== 1 && Levels[niveau][y][x+2] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y][x+2] === 4){
                        Levels[niveau][y][x+2] = 5
                    } else {
                        Levels[niveau][y][x+2] = 2
                    }
                    if (Levels[niveau][y][x+1] === 4){
                        Levels[niveau][y][x+1] = 6
                    } else {
                        Levels[niveau][y][x+1] = 3
                    }
                    x++
                }
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x+1] === 5 && Levels[niveau][y][x+2] !== 1 && Levels[niveau][y][x+2] !== 2 && Levels[niveau][y][x+2] === 4){
                console.log('4')
                Levels[niveau][y][x] = 4
                if (Levels[niveau][y][x+1] === 5){
                    Levels[niveau][y][x+2] = 5
                    Levels[niveau][y][x+1] = 6
                } else {
                    Levels[niveau][y][x+1] = 3
                }
                x++
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x+1] === 5 && Levels[niveau][y][x+2] === 0) {
                console.log('5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y][x+1] = 6
                Levels[niveau][y][x+2] = 2
                x++
            } else if (Levels[niveau][y][x+1] !==1 && Levels[niveau][y][x+1] !== 5 && Levels[niveau][y][x+1] !== 2 && Levels[niveau][y][x] === 3 || Levels[niveau][y][x] === 6 && Levels[niveau][y][x+1] !== 1 && Levels[niveau][y][x+1] !== 5 && Levels[niveau][y][x+1] !== 2){
                console.log('6')
                Levels[niveau][y][x] = 0
                if (Levels[niveau][y][x+1] === 5 && Levels[niveau][y][x+2] === 1){
                } if (Levels[niveau][y][x+1] === 4){
                    Levels[niveau][y][x+1] = 6
                    x++
                } else {
                    Levels[niveau][y][x+1] = 3
                    x++
                }
            } 
        }else if(oni.key === touche[3]){
            if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x-1] ===5 && Levels[niveau][y][x-2] === 0){
                console.log('0')
                Levels[niveau][y][x] = 0
                Levels[niveau][y][x-1] = 6
                Levels[niveau][y][x-2] = 2
                x--
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x-1] === 2 && Levels[niveau][y][x-2] === 0){
                console.log('0.5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y][x-1] = 3
                Levels[niveau][y][x-2] = 2
                x--
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x-1] !==1 && Levels[niveau][y][x-1] !== 5){
                console.log('1')
                if (Levels[niveau][y][x-1] === 2 && Levels[niveau][y][x-2] !== 1 && Levels[niveau][y][x-2] !== 2){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y][x-2] === 4){
                        Levels[niveau][y][x-2] = 5
                    } else {
                        Levels[niveau][y2][x-2] = 2
                    }
                    if (Levels[niveau][y][x-1] === 4){
                        Levels[niveau][y][x-1] = 6
                    } else {
                        Levels[niveau][y][x-1] = 3
                    }
                    x--
                } else if (Levels[niveau][y][x-1] !== 2 && Levels[niveau][y][x-1] !== 1 && Levels[niveau][y][x-1] !== 5){
                    Levels[niveau][y][x] = 4
                    if (Levels[niveau][y][x-1] === 4){
                        Levels[niveau][y][x-1] = 6
                    } else {
                        Levels[niveau][y][x-1] = 3
                    }
                    x--
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x-1] === 2){
                console.log('2')
                if (Levels[niveau][y][x-2] !== 1 && Levels[niveau][y][x-2] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y][x-2] === 4){
                        Levels[niveau][y][x-2] = 5
                    } else {
                        Levels[niveau][y][x-2] = 2
                    }
                    if (Levels[niveau][y][x-1] === 4){
                        Levels[niveau][y][x-1] = 6
                    } else {
                        Levels[niveau][y][x-1] = 3
                    }
                    x--
                }
            } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x-1] === 5 && Levels[niveau][y][x-2] !== 1 && Levels[niveau][y][x-2] !== 2){
                console.log('3')
                if (Levels[niveau][y][x-1] === 5 && Levels[niveau][y][x-2] === 5){
                    console.log('3.5')
                } else if (Levels[niveau][y][x] === 3 && Levels[niveau][y][x-1] === 5){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y][x-1] === 5){
                        Levels[niveau][y][x-2] = 5
                        Levels[niveau][y][x-1] = 6
                    } else {
                        Levels[niveau][y][x-1] = 3
                    }
                    x--
                } else if (Levels[niveau][y][x-2] !== 1 && Levels[niveau][y][x-2] !== 2){
                    Levels[niveau][y][x] = 0
                    if (Levels[niveau][y][x-2] === 4){
                        Levels[niveau][y][x-2] = 5
                    } else {
                        Levels[niveau][y][x-2] = 2
                    }
                    if (Levels[niveau][y][x-1] === 4){
                        Levels[niveau][y][x-1] = 6
                    } else {
                        Levels[niveau][y][x-1] = 3
                    }
                    x--
                }
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x-1] === 5 && Levels[niveau][y][x-2] !== 1 && Levels[niveau][y][x-2] !== 2 && Levels[niveau][y][x-2] === 4){
                console.log('4')
                Levels[niveau][y][x] = 4
                if (Levels[niveau][y][x-1] === 5){
                    Levels[niveau][y][x-2] = 5
                    Levels[niveau][y][x-1] = 6
                } else {
                    Levels[niveau][y][x-1] = 3
                }
                x--
            } else if (Levels[niveau][y][x] === 6 && Levels[niveau][y][x-1] === 5 && Levels[niveau][y][x-2] === 0) {
                console.log('5')
                Levels[niveau][y][x] = 4
                Levels[niveau][y][x-1] = 6
                Levels[niveau][y][x-2] = 2
                x--
            } else if (Levels[niveau][y][x-1] !==1 && Levels[niveau][1][x-1] !== 5 && Levels[niveau][y][x-1] !== 2 && Levels[niveau][y][x] === 3 || Levels[niveau][y][x] === 6 && Levels[niveau][y][x-1] !== 1 && Levels[niveau][y][x-1] !== 5 && Levels[niveau][y][x-1] !== 2){
                console.log('6')
                if (Levels[niveau][y][x-1] === 5 && Levels[niveau][y][x-2] === 1){
                } else if (Levels[niveau][y][x-1] === 4){
                    Levels[niveau][y][x] = 0
                    Levels[niveau][y][x-1] = 6
                    x--
                } else {
                    Levels[niveau][y][x] = 0
                    Levels[niveau][y][x-1] = 3
                    x--
                }
            } 
        }
        pas++
        document.getElementById("compteur").innerHTML = pas
        pass = new Audio('assets/autre/pas.mp3');
        pass.play();
    })
    addEventListener("keyup", (e) => {
        once = true
    })
 }

function win(){
    let count = 0
    let test = 0

    for (let i = 0; i < miyu[niveau].length; i++) {
        for (let j = 0; j < miyu[niveau][i].length; j++) {
            if (miyu[niveau][i][j] === 4){
                count++
            }
            if (miyu[niveau][i][j] === 2){
                test++
            }
        }
    }


    if (count === 0 && test === 0){
        console.log("win")

        son = new Audio('assets/autre/win.mp3');
        son.play();

        for (let i = 0; i < Levels[niveau].length; i++) {
            for (let j = 0; j < Levels[niveau][i].length; j++) {
                Levels[niveau][i][j] = ina[niveau][i][j]
            }
        }

        pas = 0
        document.getElementById("compteur").innerHTML = pas
        console.log(Levels[niveau])
        console.log(ina[niveau])
        niveau++
        x = 1
        y = 1
    }
}

function vol() {
    console.log("vol")
    let test = document.getElementById("test").value
    test = test/100
    console.log(test)
    // audio.volume = test
    son.volume = test
    pass.volume = test
    audio.play()
}

function menu(){

    let change = 0

    let menu = document.createElement("div")
    menu.setAttribute("id", "menu")
    document.body.appendChild(menu)
    
    let title = document.createElement("div")
    title.setAttribute("id", "title")
    title.innerHTML = "Boxxle"
    menu.appendChild(title)
    
    let start = document.createElement("button")
    start.setAttribute("id", "start")
    start.innerHTML = "Start"
    menu.appendChild(start)

    // let k = document.createElement("button")
    // k.setAttribute("id", "k")
    // k.innerHTML = "change key"
    // menu.appendChild(k)

    let slider = document.createElement("div")
    slider.setAttribute("id", "slider")
    menu.appendChild(slider)

    let span = document.createElement("span")
    span.setAttribute("id", "span")
    span.innerHTML = "Volume :"
    document.getElementById("slider").appendChild(span)

    let test = document.createElement("input")
    test.setAttribute("id", "test")
    test.setAttribute("type", "range")
    test.setAttribute("min", "0")
    test.setAttribute("max", "100")
    test.setAttribute("value", "50")
    document.getElementById("slider").appendChild(test)

    document.getElementById("test").addEventListener("change", vol);
    
    document.getElementById("start").addEventListener("click", starts);
    
     function starts(){

        for (let i = 0; i < Levels[niveau].length; i++) {
            for (let j = 0; j < Levels[niveau][i].length; j++) {
                if (Levels[niveau][i][j] === 3){
                    debut = 1
                }
            }
        }

        // removeEventListener("click", changekey)
        // document.getElementById("k").remove()
        document.getElementById("menu").remove()
        // if (touche[0] !== "ArrowDown"){
        //     document.getElementById("menu").remove()
        // }
        debut = 1
        draw()

    }

    // if (change === 1){
    //     gomenu()
    // }
}

// function changekey(){
//     let finnn = 0
//     let xddd = 0

//     document.getElementById("test").remove()
//     document.getElementById("span").remove()
//     document.getElementById("slider").remove()
//     document.getElementById("k").remove()
//     document.getElementById("start").remove()
//     document.getElementById("title").remove()




//     let spann = document.createElement("span")
//     spann.setAttribute("id", "spann")
//     spann.innerHTML = "touche bas (alphabetique uniquement)"
//     document.getElementById("menu").appendChild(spann)

//     addEventListener("keyup", (g) => {

//         if (ghgghgh === 0){
//             spann.innerHTML = "touche haut (alphabetique uniquement)"
//         } else if (ghgghgh === 1){
//             spann.innerHTML = "touche gauche (alphabetique uniquement)"
//         } else if (ghgghgh === 2){
//             spann.innerHTML = "touche droite (alphabetique uniquement)"
//         } 

//         touche[ghgghgh] = g.key
//         ghgghgh++

//         if (ghgghgh === 4){
//             finnn = 1
//         } 
    
//         if (finnn === 1){
//             for (let i =0; i < touche.length; i++){
//             }
//             console.log(touche)
             
//             if (xddd === 0){
//                 xddd = 1
//                 document.getElementById("spann").remove()
//                 removeEventListener("keyup", (g) => {}, false)
//                 gomenu()
//             } else {
//             }
//         }

//     })
// }

function gomenu(){
    menu()
}

function verif(){
    debut = 0
    for (let i = 0; i < Levels[niveau].length; i++) {
        for (let j = 0; j < Levels[niveau][i].length; j++) {
            if (Levels[niveau][i][j] === 3 || Levels[niveau][i][j] === 6){
                debut = 1
            }
        }
    }

    // if (touche.length > 3){
    //     touche.splice(4, touche.length)
    //     console.log(touche)
    // }
}

const draw = () => {

    if (test === 0){

        // audio = new Audio('assets/autre/music.mp3');
        // audio.loop = true;
        // audio.play();

        let side = document.createElement("div")
        side.setAttribute("id", "side")
        document.body.appendChild(side)

        let spann = document.createElement("span")
        spann.setAttribute("id", "spann")
        spann.innerHTML = "pas :"
        document.getElementById("side").appendChild(spann)

        let compteur = document.createElement("div")
        compteur.setAttribute("id", "compteur")
        compteur.innerHTML = pas
        document.getElementById("side").appendChild(compteur)


        test++
    }
    verif()
    if (debut === 0){
    } else {

        dessin()
        read()
        win()
    }

    setTimeout(() => {
        window.requestAnimationFrame(draw)
    }, 1000/fps)

}

document.getElementById("reset").addEventListener("click", Reset);
function Reset(){
    console.log("reset")
    for (let i = 0; i < Levels[niveau].length; i++) {
        for (let j = 0; j < Levels[niveau][i].length; j++) {
            Levels[niveau][i][j] = ina[niveau][i][j]
        }
    }
    pas = 0
    document.getElementById("compteur").innerHTML = pas

}