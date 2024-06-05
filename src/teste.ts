import gsmarena from 'gsmarena-api'

const brands = await gsmarena.catalog.getBrands()

console.log(brands)