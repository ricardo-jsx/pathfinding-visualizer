import { CellInterface } from "../interfaces";

export const singleCell: CellInterface = {
  cellNumber: 0,
  col: 0,
  row: 0,
  isVisited: false,
  isWall: false,
  isStartPoint: false,
  isEndPoint: false,
  distanceFromStart: Infinity,
  previousCell: null,
  isTarget: false,
};

export const getCellObjects = (
  resetOnlyPath: boolean = false,
  resetOnlyWalls: boolean = false,
  grid?: CellInterface[][]
): CellInterface[][] => {
  let gridCells: CellInterface[][] = grid || [];
  let cellNumber = 0;

  if (resetOnlyPath || resetOnlyWalls) {
    grid?.forEach((row, rowInd) => {
      row.forEach((cell, colInd) => {
        cell.isVisited = false;
        cell.distanceFromStart = Infinity;
        cell.isTarget = false;
        cell.previousCell = null;
        if (resetOnlyWalls) {
          cell.isWall = false;
        }
      });
    });
  } else {
    for (let rowInd = 0; rowInd < 30; rowInd++) {
      let currentRow: CellInterface[] = [];
      for (let colInd = 0; colInd < 52; colInd++) {
        currentRow.push({
          ...singleCell,
          row: rowInd,
          col: colInd,
          cellNumber,
        });
        cellNumber++;
      }
      gridCells.push(currentRow);
    }
  }
  return gridCells;
};

export const getCells = (grid: CellInterface[][]) => {
  let cellsArray: CellInterface[] = [];
  grid.forEach((row) => {
    row.forEach((cell) => {
      cellsArray.push(cell);
    });
  });
  return cellsArray;
};

export const getShortestPathCells = (endCell: CellInterface) => {
  const pathCells = [];
  let currentCell: CellInterface | null = endCell;
  while (currentCell) {
    pathCells.unshift(currentCell);
    currentCell = currentCell.previousCell;
  }

  return pathCells;
};

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const generateOddRandomNumber = (numberArray: number[]) => {
  let max = numberArray.length - 1;
  let randomNum = Math.floor(Math.random() * (max / 2));
  return randomNum % 2 === 0 ? randomNum + 1 : randomNum;
};

export const generateRandomNumberWithin = (maxValue: number) => {
  let randomNum = Math.floor(Math.random() * (maxValue / 2));
  return randomNum % 2 !== 0 ? randomNum : randomNum + 1;
};
