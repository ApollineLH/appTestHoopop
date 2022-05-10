import JsonProduct from '../db/products.json';
const _products =[]

for(let i in JsonProduct){
    _products.push(JsonProduct[i])
}
export default {
    getProducts(cb){
      setTimeout(()=> cb(_products),100)
    }
}