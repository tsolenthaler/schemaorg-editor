import React from 'react';

import ContentLoader from '@/app/sections/Content';
import { asyncComponentLoader } from '@/app/utils';

const ContentSection = asyncComponentLoader(ContentLoader);

const Content = _ => <div>
  <ContentSection />
</div>;

export default Content;
