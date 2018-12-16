import get from 'lodash/get';
import pick from 'lodash/pick';

export default rawProducts => (
  rawProducts.reduce((processedProducts, rawProduct) => {
    const processedProduct = pick(rawProduct.fields, [
      'title',
      'shortDescription',
      'longDescription',
      'price',
    ]);
    processedProduct.id = get(rawProduct, 'sys.id');
    processedProduct.gallery = rawProduct.fields.gallery.map(image => ({
      id: get(image, 'sys.id'),
      title: get(image, 'fields.title'),
      imageUrl: get(image, 'fields.file.url'),
    }));

    processedProducts.push(processedProduct);
    return processedProducts;
  }, [])
);
