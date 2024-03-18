Guia do Mochileiro JavaScript

Neste projeto, decidi aprimorar minhas habilidades em manipulação de HTML com o uso do JavaScript.


Método `.concat()`

```javascript
[🏀, 🏀, 🏀].concat([⚾, ⚾]) => [🏀, 🏀, 🏀, ⚾, ⚾]
```

O método `concat` junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.

Método `.pop()`

```javascript
[🏀, 🏀, 🏀, 🏀, ⚽].pop() => [🏀, 🏀, 🏀, 🏀]
```

O método `pop` remove o último elemento de um array.

Método `.push()`

```javascript
[🏀, 🏀, 🏀].push(🏈) => [🏀, 🏀, 🏀, 🏈]
```

O método `push` adiciona um novo elemento no final do array, aumentando seu tamanho.

Método `.includes()`

```javascript
[⚾, 🏈, ⚽, 🏀].includes(⚽) => true
```

O método `includes` verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.

Método `.fill()`

```javascript
[⚾, 🏈, ⚽, 🏀].fill(⚽, 1) => [⚾, ⚽, ⚽, 🏀] 
[⚾, 🏈, ⚽, 🏀].fill(⚽) => [⚽, ⚽, ⚽, ⚽]
```

O método `fill` preenche os elementos especificados em um array com um determinado valor.

Método `.indexOf()`

```javascript
[⚾, 🏈, ⚽, 🏀, ⚽].indexOf(⚽) => 2
```

O método `indexOf` retorna o primeiro índice encontrado de um valor especificado. Se o valor não for encontrado, o método retorna -1.

Método `.reverse()`

```javascript
[⚾, 🏈, ⚽, 🏀].reverse() => [🏀, ⚽, 🏈, ⚾]
```

O método `reverse` inverte a ordem dos elementos de um array e substitui o array original.

Método `.slice()`

```javascript
[⚾, 🏈, ⚽, 🏀, 🏐].slice(1, 3) => [🏈, ⚽]
```

O método `slice` retorna elementos de um array, selecionados de determinada posição de início até determinada posição final. O elemento na posição final não é incluso.

Método `.some()`

```javascript
[⚾, 🏈, ⚽, 🏀, 🏐].some(bola => bola === 🏐) => true
```

O método `some` verifica se algum elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para um dos elementos, e false se o teste for false para todos os elementos. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

Método `.join()`

```javascript
[⚾, 🏈, ⚽, 🏀, 🏐].join() => ⚾,🏈,⚽,🏀,🏐 
[⚾, 🏈, ⚽, 🏀, 🏐].join(' ') => ⚾ 🏈 ⚽ 🏀 🏐 
[⚾, 🏈, ⚽, 🏀, 🏐].join('-') => ⚾-🏈-⚽-🏀-🏐
```

O método `join` puxa elementos de um array e lista no formato de string, o resultado da operação puxou as propriedades do array e as listou de acordo com o que foi determinado.

Método `.shift()`

```javascript
[⚽, 🏐, 🏐, 🏐, 🏐].shift() => [🏐, 🏐, 🏐, 🏐]
```

O método `shift` é parecido com o método `pop` mas ao invés de remover o último elemento do array, ele é usado para remover o primeiro elemento do array.

Método `.unshift()`

```javascript
[🏀, 🏀, 🏀].unshift(🏐) => [🏐, 🏀, 🏀, 🏀]
```

O método `unshift` é parecido com o método `push` realiza, mas ao invés de adicionar no final do array, ele é utilizado para adicionar um elemento no início de um array.

Método `.splice()`

```javascript
[⚾, 🏈, ⚽, 🏀, 🏐].splice(1, 2, 🎱) => [⚾, 🎱, 🏀, 🏐] 
[⚾, 🏈, ⚽, 🏀, 🏐].splice(2, 3) => [⚾, 🏈]
```

Com o método `splice` conseguimos escolher um índice inicial e final para substituirmos valores no lugar deles. E também podemos remover itens, no segundo exemplo, foram removidos três elementos a partir da posição dois.

Método `.length()`

```javascript
[⚾, 🏈, ⚽, 🏀, 🏐].length => 5
```

O método `length` define ou retorna o número de elementos em um array.

Método `.sort()`

```javascript
[⚾, 🏈, ⚽, 🏀, 🏐].sort() => ⚽, ⚾, 🏀, 🏈, 🏐
```

O método `sort` ordena os elementos do próprio array e retorna o array. A ordenação padrão é de acordo com a pontuação de código unicode.

Método `.toString()`

```javascript
[⚾, 🏈, ⚽, 🏀, 🏐].toString() => ⚾, 🏈, ⚽, 🏀, 🏐
```

O método `toString` retorna uma string com todos os valores do array separados por vírgulas.

Método `.findIndex()
