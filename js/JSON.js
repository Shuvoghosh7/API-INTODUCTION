const product={
    name:'movile',
    company:['apple','mi','sumsang'],
    ceo:{name:'mark zukarbag',age:41,Address:'USA'},
    productType:'orginal'
}
const stringifyProduct= JSON.stringify(product)
const convertJsObject = JSON.parse(stringifyProduct)
// console .log(product)
console .log(stringifyProduct)
console .log(convertJsObject)
