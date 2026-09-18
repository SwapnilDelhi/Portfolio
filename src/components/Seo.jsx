import { useEffect } from 'react';

const SITE_URL = 'https://swapnilpandey.com';
const DEFAULT_TITLE = 'Swapnil Pandey | Youth Vision India Founder';
const DEFAULT_DESCRIPTION =
  'Swapnil Pandey, founder and director of Youth Vision India, works on youth leadership, education reform, public policy, and community development in India.';
const DEFAULT_KEYWORDS =
  'Swapnil Pandey, Founder and Director of Youth Vision India, youth leadership, public policy, research, education reform, Varanasi development, India';
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
  const organizationId = `${SITE_URL}/#youth-vision-india`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#swapnil-pandey`,
        name: 'Swapnil Pandey',
        jobTitle: 'Youth Leader, Researcher and Policy Advocate',
        description:
          description ||
          'Swapnil Pandey is a youth leader, researcher, and policy advocate working on education reform, civic engagement, and inclusive development in India.',
        url: canonicalUrl,
        image: DEFAULT_OG_IMAGE,
        sameAs: ['https://www.instagram.com/swapnilpandeyofficial'],
        knowsAbout: [
          'Youth leadership',
          'Public policy',
          'Education reform',
          'Research',
          'Civic engagement',
          'National development',
        ],
        affiliation: { '@id': organizationId },
        worksFor: { '@id': organizationId },
        mainEntityOfPage: canonicalUrl,
        headline: title || 'Swapnil Pandey',
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Youth Vision India',
        url: 'https://www.youthvisionindia.org/',
        sameAs: [
          'https://www.instagram.com/youthvisionindia',
          'https://x.com/YouthVisionIN',
          'https://www.facebook.com/youthvisionIN/',
          'https://www.linkedin.com/company/youth-vision-india',
          'https://wa.link/4aroac',
          'https://youtube.com/@youthvisionindia-official/',
        ],
      },
    ],
  };
}

export default function Seo({ title, description, keywords, url, image, schema, robots }) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(url);
    const finalImageUrl = getImageUrl(image);
    const pageTitle = title || DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageKeywords = keywords || DEFAULT_KEYWORDS;

    document.title = pageTitle;
    setMeta('description', pageDescription);
    setMeta('keywords', pageKeywords);
    setMeta('author', 'Swapnil Pandey');
    setMeta('robots', robots || 'index,follow,max-image-preview:large,max-snippet:-1');

    setMeta('og:title', pageTitle, 'property');
    setMeta('og:description', pageDescription, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:locale', 'en_US', 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', finalImageUrl, 'property');
    setMeta('og:image:secure_url', finalImageUrl, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('og:image:type', 'image/webp', 'property');
    setMeta('og:image:alt', pageTitle, 'property');
    setMeta('og:site_name', 'Swapnil Pandey', 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);
    setMeta('twitter:image', finalImageUrl);
    setMeta('twitter:image:alt', pageTitle);

    setLink('canonical', canonicalUrl);

    let script = document.head.querySelector('script[data-seo-schema="true"]');
    const schemaData = schema || getSchema(pageTitle, pageDescription, canonicalUrl);

    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-schema', 'true');
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schemaData);
  }, [title, description, keywords, url, image, schema, robots]);

  return null;
}
