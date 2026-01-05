
import { Fragment } from "react";
import MainSection from "./_components/MainSection";
import MainLayout from "@/components/MainLayout";

export const metadata  = {
  title: "titaswebs: Shop & eCommerce NextJs Template | titaswebs",
  description: "Elevate your online retail presence with titaswebs Shop & eCommerce NextJs Template. Crafted with precision, this responsive and feature-rich template provides a seamless and visually stunning shopping experience. Explore a world of possibilities with modern design elements, intuitive navigation, and customizable features. Transform your website into a dynamic online storefront with titaswebs, where style meets functionality for a captivating and user-friendly eCommerce journey.",  
  keywords: "titaswebs, NextJs eCommerce template, shop template, online store Next.js, responsive eCommerce UI, modern shopping site, product showcase template, frontend eCommerce, fast-loading shop, customizable eCommerce layout, retail web template, online store Next.js",
}

const HomePage = () =>{
    return( 
        <Fragment>
            <MainLayout>
                <MainSection />
            </MainLayout>
        </Fragment>
    )
}
export default HomePage;