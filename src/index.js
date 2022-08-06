module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let map = {};
  for (let config of bracketsConfig){
    open.push(config[0]);
    close.push(config[1]);
    map[config[1]] = config[0];
  }
  
  const stack = [];
  for (let i = 0; i < str.length; i++){
    let b = str[i];
    if (close.includes(b)){
      if (stack.length === 0 && !open.includes(b)){
        return false;
      }
      if (map[b] === stack[stack.length - 1]){
        stack.pop();
        continue;
      }
      else if (!open.includes(b)){
        return false;
      }
    }
    stack.push(str[i]);
  }
  if (stack.length === 0){
    return true;
  }
  return false;
}
