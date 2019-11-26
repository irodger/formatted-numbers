function reverser(item) {
  if (typeof item === 'string') {
    return item.split('').reverse().join('');
  }

  if (typeof item === 'number') {
    return Number(item.toString().split('').reverse().join(''));
  }
  return null;
}

export default reverser;