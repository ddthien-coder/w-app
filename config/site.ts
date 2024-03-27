export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        facebook: string;
    }
}

const siteConfig = {
    siteName: "W-APP",
    description: "The website of W-APP",
    currentlyAt: "VietNam",
    socialLinks: {
        facebook:"https://facebook.com"
    } 
}

export default siteConfig;