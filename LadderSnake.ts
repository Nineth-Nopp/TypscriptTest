class Queue<T> {
    private items: T[] = [];

    enqueue(item: T) {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

interface Position {
    position: number;
    moves: number;
    thrownNumbers: number[];
}

function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
    const boardSize = 100;
    const visited: boolean[] = new Array(boardSize + 1).fill(false);
    const queue = new Queue<Position>();

    queue.enqueue({ position: 1, moves: 0, thrownNumbers: [] });

    while (!queue.isEmpty()) {
        const current = queue.dequeue();

        if (current) {
            const currentPosition = current.position;
            const currentMoves = current.moves;
            const thrownNumbers = Array.from(current.thrownNumbers);

            if (currentPosition === boardSize) {
                return thrownNumbers;
            }

            if (!visited[currentPosition]) {
                visited[currentPosition] = true;

                for (let i = 1; i <= 6; i++) {
                    const nextPosition = currentPosition + i;
                    const newThrownNumber = i;
                    const newThrownNumbers = [...thrownNumbers, newThrownNumber];

                    for (const ladder of board.ladders) {
                        if (ladder[0] === nextPosition) {
                            queue.enqueue({ position: ladder[1], moves: currentMoves + 1, thrownNumbers: newThrownNumbers });
                        }
                    }

                    for (const snake of board.snakes) {
                        if (snake[0] === nextPosition) {
                            queue.enqueue({ position: snake[1], moves: currentMoves + 1, thrownNumbers: newThrownNumbers });
                        }
                    }

                    if (nextPosition <= boardSize) {
                        queue.enqueue({ position: nextPosition, moves: currentMoves + 1, thrownNumbers: newThrownNumbers });
                    }
                }
            }
        }
    }

    return [];
}


const rollResults = quickestPath({
    ladders: [ [3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93] ],
    snakes: [ [21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66] ]
    })
console.log(rollResults);
