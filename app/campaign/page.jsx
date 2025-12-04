"use client"

import AboutCause from "../_components/campaign/AboutCause"
import CampaignCard from "../_components/campaign/CampaignCards"
import CampaignHeader from "../_components/campaign/CampaignHeader"
import CTASection from "../_components/campaign/CTASection"
import HowItWorks from "../_components/campaign/HowItWorks"
import Testimonials from "../_components/campaign/Testimonials"
//component
export default function CampaignsPage() {
  return (
    <div>
      <CampaignHeader />
      <HowItWorks />
      <AboutCause />
      <CampaignCard />
      <Testimonials />
      <CTASection />
    </div>
  )
}
