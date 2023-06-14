function stray(numbers) {
  let y = 0
  numbers.forEach((x,i,arr)=>{arr.filter(y=>y==x).length<2?y=x:null})
  return y
}
