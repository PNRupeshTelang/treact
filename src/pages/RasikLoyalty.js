import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import CTA from "components/cta/GetStarted";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

import tw from "twin.macro";

import PhoneImageRasikLoyalty from "images/RASIK.png";

import ProfileImageRasikLoyalty from "images/Loyalty.png";
import ProfileImageCLM from "images/CLM.png";

import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";
import ProductImageCLM from "images/ProductCLM.png";


export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const HighlightedText = tw.span`text-primary-500`;


export default ({
  
  products = [
    {
      imageSrc: ProductImageRasikLoyalty,
      profileImageSrc: ProfileImageRasikLoyalty,
      subtitle: "Customer Loyalty Platform",
      title: "Rasik Loyalty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/RasikLoyalty"
    },
    {
      imageSrc: ProductImageCLM,
      profileImageSrc: ProfileImageCLM,
      subtitle: "Contract Labour Management",
      title: "Panther Nails One App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/OneApp"
    },
  ]
}) => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Rasik <HighlightedText>Loyalty Platform!</HighlightedText>
          </>
        }        
        description = { <> We focus on building products that are capable of delivering superior stakeholder value by helping people to make the most of each moment.  </>}
      />

      <Testimonial
        subheading= "Whom do you want to incentive loyalty?"
        heading= "" //{<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />

      <Features 
        products={products} 
        heading={<></>} 
        description={ <> </>}
        />



      <CTA 
         text = { <>Build relationships with influencers to make your <HighlightedText>Business grow</HighlightedText></> }
         primaryLinkText = "Schedule a meeting"
         primaryLinkUrl = "http://panthernails.com"
         secondaryLinkText = "Call us"
         secondaryLinkUrl = "https://wa.me/918087144244"
         pushDownFooter = {false}
      />

      <Testimonial heading="Our Esteemed Customers" />

      <FAQ />

      <Footer />

    </AnimationRevealPage>
  );
};
