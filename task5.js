const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price * (1 - discount / 100);

    callback(discountedPrice);
  };
  
  const showDiscountedPrice = (discountedPrice) => {
    console.log(`Discounted price: ${discountedPrice}`);
  };
  
  calculateDiscountedPrice(100, 10, showDiscountedPrice);