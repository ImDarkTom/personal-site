export const SITE_URL = 'https://malinovsky.dev';
export const BLOG_URL = 'https://blog.malinovsky.dev';

export const siteHref = (path = '') => (import.meta.env.DEV ? `/${path}` : `${SITE_URL}/${path}`);
export const blogHref = (path = '') => (import.meta.env.DEV ? `/blog/${path}` : `${BLOG_URL}/${path}`);
