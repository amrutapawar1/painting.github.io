import React from 'react';

export type FooterLinkType = {
  href: string;
  name: React.ReactNode;
  className?: string;
};

export type FooterLinksType = FooterLinkType & {
  items: FooterLinkType[];
};
