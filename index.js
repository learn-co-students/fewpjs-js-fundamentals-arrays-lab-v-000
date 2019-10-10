// Write your solution here!
const append = ['Milo', 'Otis', 'Garfield'],
      prepend = [...append],
      removeLast = [...append],
      removeFirst = [...append];

append.push('Odie');
prepend.unshift('Odie');
removeLast.pop();
removeFirst.shift();