import React, { FC, ReactElement } from "react";
import BrandingSection from './BrandingSection';
import NewsletterSignUp from './NewsletterSignUp';
import WhatWeDoSection from './WhatWeDoSection';
import FeatureSection from './FeatureSection';

const About: FC = (): ReactElement => {
    return (
        <>
            <BrandingSection />
            <NewsletterSignUp />
            <FeatureSection />
            <WhatWeDoSection />
        </>
    )
}
export default About;