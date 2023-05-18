export const reservationPriceCalculator = (date, days, selectedBicycle) => {
  const numberOfDays = Number(days);
  let finalPrice = 0;
  const bikeType = selectedBicycle.bike.type;
  const isMoreThanHalfMonth = date >= 15 ? true : false;
  const BASE_PRICE = isMoreThanHalfMonth === true ? 12 : 10;
  console.log("isMoreThanHalfMonth", isMoreThanHalfMonth);

  switch (bikeType) {
    case "normal":
      if (numberOfDays <= 3) {
        return BASE_PRICE;
      } else {
        const daysExtra = numberOfDays - 3;
        finalPrice = BASE_PRICE + daysExtra * BASE_PRICE;
        return finalPrice;
      }

    case "electric":
      finalPrice = BASE_PRICE * numberOfDays;
      return finalPrice;

    case "old":
      if (numberOfDays <= 5) {
        return BASE_PRICE;
      } else {
        const daysExtra = numberOfDays - 5;
        finalPrice = BASE_PRICE + daysExtra * BASE_PRICE;
        return finalPrice;
      }
    default:
    // code block
  }
};
