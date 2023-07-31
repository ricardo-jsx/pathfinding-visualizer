import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, LinkIcon } from "@heroicons/react/24/outline";

import { SearchingAlgoEnum } from "~/interfaces";
import { classNames } from "~/utils/helpers";

import { BreadthFirstSearchDescription, DepthFirstSearchDescription, DijkstraDescription } from "./description";

interface Props {
  algorithm: SearchingAlgoEnum | null;
  onClose: () => void;
}

const getAlgoInfo = (type: SearchingAlgoEnum | null) => {
  switch (type) {
    case SearchingAlgoEnum.DIJKSTRA:
      return {
        title: "Algoritmo de Dijkstra",
        description: <DijkstraDescription />,
        guaranteedShortedPath: true,
        referenceLink: `https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm`,
        gif: `/assets/dijkstra.gif`,
      };

    case SearchingAlgoEnum.BFS:
      return {
        title: "Breadth-first Search algorithm",
        description: <BreadthFirstSearchDescription />,
        guaranteedShortedPath: true,
        referenceLink: `https://pt.wikipedia.org/wiki/Busca_em_largura`,
        gif: `/assets/bfs.gif`,
      };

    case SearchingAlgoEnum.DFS:
      return {
        title: "Depth-first Search algorithm",
        description: <DepthFirstSearchDescription />,
        guaranteedShortedPath: false,
        referenceLink: `https://pt.wikipedia.org/wiki/Busca_em_profundidade`,
        gif: `/assets/dfs.gif`,
      };

    default:
      return null;
  }
};

export const InfoSideOver: React.FC<Props> = ({ algorithm, onClose }) => {
  const [info, setInfo] = useState<ReturnType<typeof getAlgoInfo>>(null);

  useEffect(() => {
    let algorithmInfo = getAlgoInfo(algorithm);
    setInfo(algorithmInfo);
  }, [algorithm]);

  if (!algorithm || !info) return null;

  return (
    <Transition.Root show={!!algorithm} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                          Sobre o algoritmo
                        </h2>

                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Main */}
                    <div>
                      <div className="pb-1 sm:pb-6">
                        <div className="relative h-40 sm:h-56">
                          <img
                            className="absolute h-full w-full object-contain"
                            src={info.gif}
                            alt="Algoritmo animado"
                          />
                        </div>
                      </div>

                      <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                          <div>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <p>{info?.description}</p>
                            </dd>
                          </div>

                          <div>
                            <p className="block text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                              Melhor Caminho
                            </p>
                            <span
                              className={classNames(
                                info.guaranteedShortedPath ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
                                "inline-flex mt-2 items-center rounded-full px-3.5 py-1.5 text-xs font-medium"
                              )}
                            >
                              {info?.guaranteedShortedPath ? "Garantido" : "Não garantido"}
                            </span>
                          </div>
                          <div>
                            <a
                              href={info.referenceLink}
                              target="__blank"
                              className="text-indigo-700 inline-flex items-center font-medium underline mt-1 text-sm sm:col-span-2"
                            >
                              <LinkIcon className="h-4 w-4 mr-2" /> Referência
                            </a>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
