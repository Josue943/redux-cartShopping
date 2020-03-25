import _ from "lodash";

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize; //sacamos la pagina
  return _(items) //convertimos los items con lodash del dato que estamos hasta el que queremo
    .slice(startIndex) //luego lo convertimos en array normal
    .take(pageSize)
    .value();
};

export const filterPrice = (filtered, rangePrice) => {
  switch (rangePrice.min) {
    case 0:
      filtered = filtered.filter(
        product => product.price > 0 && product.price < 300
      );
      break;

    case 300:
      filtered = filtered.filter(
        product => product.price >= 300 && product.price < rangePrice.max
      );
      break;

    case 650:
      filtered = filtered.filter(product => product.price >= 650);
      break;

    default:
      break;
  }
  return filtered;
};
