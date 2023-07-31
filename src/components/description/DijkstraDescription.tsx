const DijkstraDescription = () => {
  return (
    <div className="container mx-auto text-justify">
      <h1 className="text-2xl mb-4 font-bold text-center">Algoritmo de Dijkstra</h1>
      <p className="mb-4">
        O Algoritmo de Dijkstra é utilizado para encontrar o caminho mais curto em um grafo ponderado entre um nó
        inicial e todos os outros nós. Ele utiliza uma abordagem gulosa, sempre optando pelo caminho com menor peso.
      </p>

      <h2 className="text-xl mb-2 font-semibold">Funcionamento:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-2">
          <strong>Iniciar pelo nó raiz:</strong> O algoritmo de Dijkstra começa a partir de um nó inicial definido.
        </li>
        <li className="mb-2">
          <strong>Configurar distâncias:</strong> No início, o algoritmo configura a distância do nó inicial para ele
          mesmo como 0 e para todos os outros nós como infinito.
        </li>
        <li className="mb-2">
          <strong>Explorar os nós:</strong> A partir do nó inicial, o algoritmo explora todos os nós vizinhos não
          visitados. Para cada nó vizinho, ele calcula a distância acumulada a partir do nó inicial e atualiza essa
          distância se ela for menor que a distância já registrada para aquele nó.
        </li>
        <li className="mb-2">
          <strong>Escolha gulosa:</strong> Após explorar todos os vizinhos de um nó, o algoritmo seleciona o nó não
          visitado com a menor distância acumulada e o torna o nó atual.
        </li>
        <li className="mb-2">
          <strong>Marcação de nós visitados:</strong> Para evitar visitar os mesmos nós repetidamente, cada nó visitado
          é marcado. Isso permite que o algoritmo apenas considere os nós não visitados.
        </li>
        <li className="mb-2">
          <strong>Finalização:</strong> A pesquisa termina quando todas as distâncias aos nós acessíveis a partir do nó
          inicial foram determinadas. No caso de um grafo não conectado, alguns nós podem permanecer com a distância
          definida como infinito.
        </li>
      </ul>
      <p className="text-sm italic">
        O Algoritmo de Dijkstra é eficaz e eficiente para resolver problemas de caminho mínimo em grafos ponderados sem
        arestas com peso negativo. Porém, ele não funciona corretamente se houver arestas com pesos negativos, pois
        assume que um caminho mais curto sempre leva a uma distância menor.
      </p>
    </div>
  );
};

export default DijkstraDescription;
