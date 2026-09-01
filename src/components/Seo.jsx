import { useEffect } from 'react';

const SITE_URL = 'https://swapnilpandey.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/ogimg.webp`;

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLink(rel, href) {
  if (!href) return;
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function getCanonicalUrl(url) {
  if (url) return url;
  if (typeof window !== 'undefined') {
    const cleanedPath = window.location.pathname === '/' ? '' : window.location.pathname;
    return `${SITE_URL}${cleanedPath}`;
  }
  return SITE_URL;
}

function getImageUrl(image) {
  if (image) return image;
  return DEFAULT_OG_IMAGE;
}

function getSchema(title, description, canonicalUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Swapnil Pandey',
    jobTitle: 'Youth Leader, Researcher and Policy Advocate',
    description:
      description ||
      'Swapnil Pandey is a youth leader, researcher, and policy advocate working on education reform, civic engagement, and inclusive development in India.',
    url: canonicalUrl,
    image: DEFAULT_OG_IMAGE,
    sameAs: [],
    knowsAbout: [
      'Youth leadership',
      'Public policy',
      'Education reform',
      'Research',
      'Civic engagement',
      'National development',
    ],
    affiliation: {
      '@type': 'Organization',
      name: 'Youth Vision India',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Youth Vision India',
    },
    mainEntityOfPage: canonicalUrl,
    headline: title || 'Swapnil Pandey',
  };
}

export default function Seo({ title, description, keywords, url, image, schema }) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(url);
    const finalImageUrl = getImageUrl(image);

    if (title) document.title = title;
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', 'index,follow,max-image-preview:large');

    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:locale', 'en_US', 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', finalImageUrl, 'property');
    setMeta('og:image:alt', title || 'Swapnil Pandey', 'property');
    setMeta('og:site_name', 'Swapnil Pandey', 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', finalImageUrl);
    setMeta('twitter:image:alt', title || 'Swapnil Pandey');

    setLink('canonical', canonicalUrl);

    let script = document.head.querySelector('script[data-seo-schema="true"]');
    const schemaData = schema || getSchema(title, description, canonicalUrl);

    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-schema', 'true');
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schemaData);
  }, [title, description, keywords, url, image, schema]);

  return null;
}
