const BreadthFirstSearchDescription = () => {
  return (
    <div className="container mx-auto text-justify">
      <h1 className="text-2xl mb-4 font-bold text-center">Pesquisa em Largura (Breadth-First Search)</h1>
      <p className="mb-4">A Pesquisa em Largura (ou Breadth-First Search, BFS) é um algoritmo utilizado para percorrer ou pesquisar em árvores ou grafos. Diferentemente do DFS, o BFS explora todos os nós vizinhos a um determinado nível antes de descer para o próximo nível.</p>
      
      <h2 className="text-xl mb-2 font-semibold">Funcionamento:</h2>
      
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-2"><strong>Começar pelo nó raiz:</strong> O algoritmo Breadth-First Search começa a partir de um nó raiz definido ou qualquer outro nó no caso de um grafo.</li>
        <li className="mb-2"><strong>Explorar em largura:</strong> A partir do nó inicial, o algoritmo explora todos os nós adjacentes antes de descer para o próximo nível. Ou seja, o BFS visita todos os nós de um determinado nível antes de iniciar a pesquisa no próximo nível.</li>
        <li className="mb-2"><strong>Uso de uma fila:</strong> Para garantir que a exploração seja realizada em ordem de largura, o BFS utiliza uma estrutura de dados do tipo fila. Os nós são inicialmente inseridos na fila. Enquanto a fila não estiver vazia, o nó na frente é removido, todos os seus nós adjacentes não visitados são inseridos na fila e o nó é marcado como visitado.</li>
        <li className="mb-2"><strong>Marcação de nós visitados:</strong> Para evitar visitar os mesmos nós repetidamente, cada nó visitado é marcado. Isso permite que o algoritmo apenas considere os nós não visitados.</li>
        <li className="mb-2"><strong>Finalização:</strong> A pesquisa termina quando todos os vértices acessíveis a partir do nó raiz inicial foram visitados. No caso de um grafo não conectado, pode ser necessário iniciar a pesquisa novamente a partir de um novo nó não visitado.</li>
      </ul>
      <p className="text-sm italic">Ao contrário do DFS, o BFS é capaz de encontrar o caminho mais curto entre dois nós num grafo não ponderado.</p>
    </div>
  );
}

export default BreadthFirstSearchDescription;