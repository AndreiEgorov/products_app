const allProducts = {
  products: [
    {
      product_id: "1",
      name: "Barrel",
      price: "25.39",
      description: "for storage",
    },
    {
      product_id: "2",
      name: "Rake",
      price: "15.99",
      description: "do not step on it",
    },
    {
      product_id: "3",
      name: "Shovel",
      price: "25.99",
      description: "for digging",
    },
    {
      product_id: "4",
      name: "Axe",
      price: "10.99",
      description: "for chopping",
    },
    {
      product_id: "5",
      name: "Hammer",
      price: "19.99",
      description: "for hammering nails",
    },
    {
      product_id: "6",
      name: "Gloves",
      price: "6.99",
      description: "for hand protection",
    },
  ],
};

const allProductsCAD = {
  products: [
    {
      product_id: "1",
      name: "Barrel",
      price: 30.89848745,
      description: "for storage",
      priceCurrency: "cad",
    },
    {
      product_id: "2",
      name: "Rake",
      price: 19.45911045,
      description: "do not step on it",
      priceCurrency: "cad",
    },
    {
      product_id: "3",
      name: "Shovel",
      price: 31.628660449999998,
      description: "for digging",
      priceCurrency: "cad",
    },
    {
      product_id: "4",
      name: "Axe",
      price: 13.37433545,
      description: "for chopping",
      priceCurrency: "cad",
    },
    {
      product_id: "5",
      name: "Hammer",
      price: 24.32693045,
      description: "for hammering nails",
      priceCurrency: "cad",
    },
    {
      product_id: "6",
      name: "Gloves",
      price: 8.50651545,
      description: "for hand protection",
      priceCurrency: "cad",
    },
  ],
};

const mostViewedProducts = {
  products: [
    {
      product_id: "1",
      name: "Barrel",
      price: "25.39",
      description: "for storage",
    },
    {
      product_id: "2",
      name: "Rake",
      price: "15.99",
      description: "do not step on it",
    },
    {
      product_id: "3",
      name: "Shovel",
      price: "25.99",
      description: "for digging",
    },
    {
      product_id: "4",
      name: "Axe",
      price: "10.99",
      description: "for chopping",
    },
    {
      product_id: "5",
      name: "Hammer",
      price: "19.99",
      description: "for hammering nails",
    },
  ],
};

const mostViewedWithLimitOf2 = {
  products: [
    {
      product_id: "1",
      name: "Barrel",
      price: "25.39",
      description: "for storage",
    },
    {
      product_id: "2",
      name: "Rake",
      price: "15.99",
      description: "do not step on it",
    },
  ],
};

const mostViewedWithLimitOf2AndIntoEUR = {
  products: [
    {
      product_id: "1",
      name: "Barrel",
      price: 21.012129249999997,
      description: "for storage",
      priceCurrency: "EUR",
    },
    {
      product_id: "2",
      name: "Rake",
      price: 13.23292425,
      description: "do not step on it",
      priceCurrency: "EUR",
    },
  ],
};

module.exports = {
  allProducts,
  allProductsCAD,
  mostViewedProducts,
  mostViewedWithLimitOf2,
  mostViewedWithLimitOf2AndIntoEUR,
};
