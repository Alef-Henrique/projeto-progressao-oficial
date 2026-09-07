import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schemaType?: 'EducationalOrganization' | 'Course' | 'FAQPage' | 'WebPage';
  schemaData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'EducationalOrganization',
  schemaData
}) => {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.shortName}` 
    : SITE_CONFIG.seo.defaultTitle;
  
  const metaDescription = description || SITE_CONFIG.seo.defaultDescription;
  const canonicalUrl = `${SITE_CONFIG.seo.siteUrl}${canonicalPath}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update Meta Description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', metaDescription);

    // Update Open Graph tags
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', metaDescription);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', 'website');

    // Update Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Inject Schema.org JSON-LD
    let scriptTag = document.getElementById('structured-data-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: SITE_CONFIG.institutionName,
      alternateName: SITE_CONFIG.shortName,
      url: SITE_CONFIG.seo.siteUrl,
      description: metaDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address,
        addressLocality: SITE_CONFIG.city,
        addressRegion: SITE_CONFIG.state,
        addressCountry: 'BR'
      },
      ...schemaData
    };

    scriptTag.textContent = JSON.stringify(defaultSchema);
  }, [fullTitle, metaDescription, canonicalUrl, schemaType, schemaData]);

  return null;
};
