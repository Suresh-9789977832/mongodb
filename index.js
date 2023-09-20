// 1.Find all the information about each products
db.products.find({})

// 2.Find the product price which are between 400 to 800
db.products.find({$and:[{product_price:{$gte:400}},{product_price:{$lte:800}}]}).toArray()

// 3.Find the product price which are not between 400 to 600
db.products.find({$not: {$and: [ { product_price: { $gte: 400 } },{ product_price: { $lte: 600 } }]}})

// 4.List the four product which are grater than 500 in price 
db.products.find({product_price: { $gt: 500 }}).limit(4)

// 5.Find the product name and product material of each products
db.products.find({}, { product_name: 1, "product_material": 1, "_id": 0 })

// 6.Find the product with a row id of 10
db.products.find({ id: "10" })

// 7.Find only the product name and product material
db.products.find({}, { _id: 0, product_name: 1, product_material: 1 })


//8. Find products with soft in the product material field
db.products.find({ product_material: { $regex: /Soft/i } })

// 9.Find products which contain product color indigo  and product price 492.00
db.products.find({ product_color: "indigo", product_price: 492.00 })





