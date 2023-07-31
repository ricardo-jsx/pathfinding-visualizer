import { CellInterface } from "../../interfaces";
import { getCells } from "../../utils/helpers";

export const generateRandomMaze = (grid: CellInterface[][]) => {
  const cells = getCells(grid);

  const isWall = (cell: CellInterface): boolean => {
    return cell.cellNumber % Math.ceil(Math.random() * 10) === 0;
  };

  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    if (!cell.isStartPoint && !cell.isEndPoint) {
      cell.isWall = isWall(cell);
    }
  }
};
