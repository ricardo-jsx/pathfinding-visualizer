import React, { HTMLAttributes } from "react";
import { CellInterface } from "../interfaces";
import { MapPinIcon, HomeIcon } from "@heroicons/react/24/solid";

type CellProps = { cell: CellInterface } & HTMLAttributes<HTMLDivElement>;

const Cell: React.FC<CellProps> = ({ cell, ...props }) => {
  const { isStartPoint, isEndPoint, isWall } = cell;

  // Build CSS classes string
  const baseClasses =
    "cell lg:w-6 w-4 lg:h-6 h-4 inline-flex justify-center items-center aspect-square border-[0.1px] border-indigo-300";
  const startClasses = isStartPoint ? "!bg-green-300" : "";
  const endClasses = isEndPoint ? "!bg-gray-200" : "";
  const wallClasses = isWall ? "!bg-gray-900 wall-animate" : "";
  const classes = [baseClasses, startClasses, endClasses, wallClasses].join(" ");

  // Determine icon to be shown
  const IconComponent = isStartPoint ? MapPinIcon : isEndPoint ? HomeIcon : null;

  return (
    <div {...props} className={classes}>
      {IconComponent && <IconComponent className="h-4 w-4 font-bold" />}
    </div>
  );
};

export default Cell;
