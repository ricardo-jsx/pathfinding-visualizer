import React from "react";

type Stat = {
  name: string;
  icon: (
    props: React.ComponentProps<"svg"> & {
      title?: string;
      titleId?: string;
    }
  ) => JSX.Element;
  data: string;
};

const StatsSection: React.FC<{ stats: Stat[] }> = ({ stats }) => {
  const listClasses = "m-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 w-full";
  const listItemClasses = "col-span-1 flex rounded-md shadow-sm";
  const iconContainerClasses = "flex-shrink-0 flex items-center justify-center w-12 text-white text-2xl font-medium rounded-l-md bg-pink-600";
  const dataContainerClasses = "flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white";
  const textClasses = "flex-1 truncate px-4 py-2 text-sm";
  const buttonClasses = "font-medium text-gray-900 hover:text-gray-600";

  return (
    <ul role="list" className={listClasses}>
      {stats.map(({ name, icon: Icon, data }) => (
        <li key={name} className={listItemClasses}>
          <div className={iconContainerClasses}>
            <Icon className="h-5 w-5" />
          </div>
          <div className={dataContainerClasses}>
            <div className={textClasses}>
              <button className={buttonClasses}>{name}</button>
              <p className="text-gray-900">{data}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StatsSection;