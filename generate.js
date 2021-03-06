module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        products: _.times(100, function(n){
            return {
                id: n,
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.imageUrl()
            }
        }),
        user: {
            login: "user",
            password: "pas"
        },
        basket: []
    }
};