import { CellInterface } from "../../interfaces";

export const BFS = (
  grid: CellInterface[][],
  startCell: CellInterface,
  endCell: CellInterface
): [CellInterface[], number] => {
  const startTime = Date.now();

  let unvisitedCellsQueue: CellInterface[] = [startCell];
  let visitedCells: CellInterface[] = [];

  startCell.isVisited = true;

  const pushToUnvisited = (row: number, col: number, currentCell: CellInterface) => {
    if (
      row >= 0 &&
      row < grid.length &&
      col >= 0 &&
      col < grid[0].length &&
      !grid[row][col].isWall &&
      !grid[row][col].isVisited
    ) {
      grid[row][col].previousCell = currentCell;
      unvisitedCellsQueue.unshift(grid[row][col]);
      grid[row][col].isVisited = true;
    }
  };

  while (unvisitedCellsQueue.length > 0) {
    let currentCell = unvisitedCellsQueue.pop();

    if (!currentCell) {
      return [visitedCells, Date.now() - startTime];
    }

    const { col, row, cellNumber } = currentCell;

    visitedCells.push(currentCell);

    if (cellNumber === endCell.cellNumber) {
      currentCell.isTarget = true;
      return [visitedCells, Date.now() - startTime];
    }

    pushToUnvisited(row, col + 1, currentCell);
    pushToUnvisited(row - 1, col, currentCell);
    pushToUnvisited(row + 1, col, currentCell);
    pushToUnvisited(row, col - 1, currentCell);
  }

  return [visitedCells, Date.now() - startTime];
};
