String.prototype.camelCase=function(){
    return this!= "" ? this.split(' ').map((x) => [x[0].toUpperCase()].concat(x.split('').slice(1)).join('')).join('') :  ""
  }