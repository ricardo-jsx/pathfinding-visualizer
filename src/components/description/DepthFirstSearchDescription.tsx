const DepthFirstSearchDescription = () => {
  return (
    <div className="container mx-auto text-justify">
      <h1 className="text-2xl mb-4 font-bold text-center">Pesquisa em Profundidade (Depth-First Search)</h1>
      <p className="mb-4">A Pesquisa em Profundidade (ou Depth-first Search, DFS) é um algoritmo utilizado para percorrer ou pesquisar em árvores ou grafos. Este algoritmo começa num nó raiz (ou num nó qualquer, dependendo da implementação) e explora o máximo possível ao longo de cada ramo antes de retroceder.</p>
      
      <h2 className="text-xl mb-2 font-semibold">Funcionamento:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-2"><strong>Começar pelo nó raiz:</strong> O algoritmo Depth-first Search começa a partir de um nó raiz definido ou qualquer outro nó no caso de um grafo.</li>
        <li className="mb-2"><strong>Explorar profundamente:</strong> A partir do nó inicial, o algoritmo vai explorando cada ramo o máximo possível. Isso é feito através da escolha de um nó adjacente não visitado e seguindo pela ramificação correspondente.</li>
        <li className="mb-2"><strong>Backtracking:</strong> Quando o algoritmo encontra um nó que não possui mais nós adjacentes não visitados, ele começa a retroceder, ou seja, volta ao nó anterior para explorar outros nós ou ramos não visitados.</li>
        <li className="mb-2"><strong>Marcação de nós visitados:</strong> Para evitar visitar os mesmos nós repetidamente, cada nó visitado é marcado. Isso permite que o algoritmo apenas considere os nós não visitados.</li>
        <li className="mb-2"><strong>Finalização:</strong> A pesquisa termina quando todos os vértices acessíveis a partir do nó raiz inicial foram visitados. No caso de um grafo não conectado, pode ser necessário iniciar a pesquisa novamente a partir de um novo nó não visitado.</li>
      </ul>
      <p className="text-sm italic">Embora a pesquisa em profundidade seja eficiente e fácil de implementar, ela não garante a descoberta do caminho mais curto entre dois nós num grafo.</p>
    </div>
  );
}

export default DepthFirstSearchDescription;
