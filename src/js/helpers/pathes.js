export const indexPagePath = () => '/';
export const cartPagePath = () => '/cart';
export const cartCheckoutPagePath = () => '/cart/checkout';
export const contactsPagePath = () => '/contacts';
export const catalogItemPagePath = (id = ':id') => `/product/${id}`;
export const catalogItemModalPath = (id = ':id', imageId = ':imageId') => `/product/${id}/image/${imageId}`;
