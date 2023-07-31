import { CellInterface } from "../../interfaces";

import PriorityQueue from "./PriorityQueue";

const getNeighbors = (currentCell: CellInterface, grid: CellInterface[][]) => {
  const { col, row } = currentCell;
  const neighbors: CellInterface[] = [];

  if (col > 0) neighbors.push(grid[row][col - 1]);

  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  if (row > 0) neighbors.push(grid[row - 1][col]);

  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);

  return neighbors.filter((n) => !n?.isVisited);
};

export const dijkstra = (
  grid: CellInterface[][],
  startCell: CellInterface,
  endCell: CellInterface
) => {
  const startTime = Date.now();
  const unvisitedCells = new PriorityQueue<CellInterface>((cellA, cellB) => cellA.distanceFromStart - cellB.distanceFromStart);
  const visitedCells: CellInterface[] = [];

  startCell.distanceFromStart = 0;
  unvisitedCells.enqueue(startCell);

  while (!unvisitedCells.isEmpty()) {
    const currentCell = unvisitedCells.dequeue();

    if (!currentCell || currentCell.isWall) continue;

    if (currentCell.distanceFromStart === Infinity) {
      return [visitedCells, Date.now() - startTime] as const;
    }

    currentCell.isVisited = true;
    visitedCells.push(currentCell);

    if (currentCell.cellNumber === endCell.cellNumber) {
      currentCell.isTarget = true;
      return [visitedCells, Date.now() - startTime] as const;
    }

    const neighbors = getNeighbors(currentCell, grid);

    for (const neighbor of neighbors) {
      const tentativeDistance = currentCell.distanceFromStart + 1;

      if (tentativeDistance < neighbor.distanceFromStart) {
        neighbor.distanceFromStart = tentativeDistance;
        neighbor.previousCell = currentCell;
        unvisitedCells.enqueue(neighbor);
      }
    }
  }

  // If the loop finishes without finding the target
  return [visitedCells, Date.now() - startTime] as const;
};