import React from 'react';

type Variant = 'light' | 'dark';

export interface AXACommercialHeroBannerProps {
  imageSource: string;
  variant?: Variant;
  className?: string;
}

declare function createAXACommercialHeroBanner(
  createElement: typeof React.createElement
): React.ComponentType<AXACommercialHeroBannerProps>;

export default createAXACommercialHeroBanner;
