import get from 'lodash/get';
import pick from 'lodash/pick';

export default ({ items, includes }) => (
  items.reduce((processedProducts, rawProduct) => {
    const processedProduct = pick(rawProduct.fields, [
      'title',
      'shortDescription',
      'longDescription',
      'price',
    ]);
    processedProduct.id = get(rawProduct, 'sys.id');

    processedProduct.gallery = rawProduct.fields.gallery.map((galleryItem) => {
      const productGalleryItem = includes.Asset.find(asset => asset.sys.id === galleryItem.sys.id);
      return {
        id: productGalleryItem.sys.id,
        title: productGalleryItem.fields.title,
        imageUrl: productGalleryItem.fields.file.url,
      };
    });

    processedProducts.push(processedProduct);
    return processedProducts;
  }, [])
);
