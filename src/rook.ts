import { Piece, IPiece, Color } from './piece';

export class Rook extends Piece implements IPiece {
    
    constructor(row: number, column: number, color: Color) {
        super(row, column, color);
        this.Moved = false;
    }
    
}