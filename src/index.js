class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
      this.arr.push(element);
  }

  at(index) {
      return this.arr[index];
  }

  get length() {
     return  this.arr.length;
  }

  toArray() {
      return this.arr;
  }

  sort(indices) {
      indices.sort((a, b) => a - b);
      let temp = [];
      for(let j = 0; j < indices.length; j++){
          temp[j] = this.arr[indices[j]];
      }
      if(typeof(temp[0]) === "number"){
          temp.sort((a, b) => a - b);
      }else{

          temp.sort((personA, personB) => personA.age - personB.age);

      }

      for(let k = 0; k < temp.length; k++){
          this.arr[indices[k]] = temp[k];
      }

      return this.arr;

  }

  setComparator(compareFunction) {
      if(compareFunction){
          let sortedArray = this.arr.slice(0);
          return sortedArray.sort(compareFunction);
      }else return this.arr.sort(function(a, b) {
          return a - b;
      });
  }
}

module.exports = Sorter;
