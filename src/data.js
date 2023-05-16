import Spotify from "./assets/img/spotify-1.svg";
import Expedia from "./assets/img/expedia.svg";
import Lexus from "./assets/img/lexus-logo.svg";
import Xbox from "./assets/img/xbox.svg";
import Microsoft from "./assets/img/microsoft.svg";
import Tinder from "./assets/img/tinder.svg";
import Google from "./assets/img/google.svg";
import Slack from "./assets/img/slack.svg";

//Services icon import.
import DesignIcon from "./assets/img/design-icon.svg"
import DevelopmentIcon from "./assets/img/development-icon.svg"
import SeoIcon from "./assets/img/seo-icon.svg"
import InstallationIcon from "./assets/img/Installation-icon.svg"
import FixIssueIcon from "./assets/img/fix-issues-icon.svg"
import DigitalMarketingIcon from "./assets/img/digital-marketing-icon.svg"

//Features images.
import FeaturesImage from "./assets/img/why-choose-us.svg"

//Footer
import FLogo from "./assets/img/footer-logo.svg"
import Location from "./assets/img/location.svg"
import Phone from "./assets/img/call-calling.svg"
import Email from "./assets/img/sms.svg"


export const brandLogo = [
    {
        logoUrl: Spotify
    },
    {
        logoUrl: Expedia
    },
    {
        logoUrl: Lexus
    },
    {
        logoUrl: Xbox
    },
    {
        logoUrl: Microsoft
    },
    {
        logoUrl: Tinder
    },
    {
        logoUrl: Google
    },
    {
        logoUrl: Slack
    },
    {
        logoUrl: Spotify
    },
    {
        logoUrl: Expedia
    },
    {
        logoUrl: Lexus
    },
    {
        logoUrl: Xbox
    },
    {
        logoUrl: Microsoft
    },
    {
        logoUrl: Tinder
    },
    {
        logoUrl: Google
    },
    {
        logoUrl: Slack
    }
]


export const services = [
    {
        id: 1,
        icon: DesignIcon,
        title: "Design",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 2,
        icon: DevelopmentIcon,
        title: "Development",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 3,
        icon: SeoIcon,
        title: "SEO",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 4,
        icon: InstallationIcon,
        title: "Installation",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 5,
        icon: FixIssueIcon,
        title: "Fix Issues",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 6,
        icon: DigitalMarketingIcon,
        title: "Digital Marketing",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    }

]

export const features = {
    id: 1,
    featureImg: FeaturesImage,
    subTitle: "Why Choose Us",
    title: "We deliver the high quality end results you need",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    featureList: [
        {
            id: 1,
            featureListText: "Perfect for modern startups",
        },
        {
            id: 2,
            featureListText: "Built with ease-of-use at its core",
        },
        {
            id: 3,
            featureListText: "Quality design & thoughtfully crafted code",
        },
    ],
    featureText: "Perfect for modern startups | Built with ease-of-use at its core | Quality design & thoughtfully crafted code"
}


export const footerMenus = [
    {
        id: 1,
        colXL: 3,
        footerLogo: FLogo,
        contactInfo: [
            {
                id: 11,
                icon: Location,
                infoText: "151 Allen Way, Yuba City, CA, USA.",
            },
            {
                id: 12,
                icon: Phone,
                infoText: "(800) 123 6789",
                link: "tel:8001236789"
            },
            {
                id: 13,
                icon: Email,
                infoText: "support@azenci.com",
                link: "mailto:support@azenci.com"
            },
        ]
    },
    {
        id: 2,
        colXL: 4,
        widgetTitle: "Services",
        widgetMenu: [
            {
                id: 21,
                menuItem: "Design",
                menuLocation: "/design"
            },
            {
                id: 22,
                menuItem: "Development",
                menuLocation: "/development"
            },
            {
                id: 23,
                menuItem: "Search Engine Optimization (SEO)",
                menuLocation: "/seo"
            },
            {
                id: 24,
                menuItem: "Installation",
                menuLocation: "/installation"
            },
            {
                id: 25,
                menuItem: "Digital Marketing",
                menuLocation: "/digital-marketing"
            },
        ]
    },
    {
        id: 3,
        colXL: 3,
        widgetTitle: "Company",
        widgetMenu: [
            {
                id: 31,
                menuItem: "About Company",
                menuLocation: "/about-company"
            },
            {
                id: 32,
                menuItem: "Support",
                menuLocation: "/support"
            },
            {
                id: 33,
                menuItem: "Privacy Policy",
                menuLocation: "/privacy-policy"
            },
            {
                id: 34,
                menuItem: "Product Sourcing",
                menuLocation: "/product-sourcing"
            },
            {
                id: 35,
                menuItem: "Terms and Conditions",
                menuLocation: "/terms-and-conditions"
            },
        ]
    },
    {
        id: 4,
        colXL: 2,
        widgetTitle: "Quick Links",
        widgetMenu: [
            {
                id: 41,
                menuItem: "Home",
                menuLocation: "/"
            },
            {
                id: 42,
                menuItem: "About us",
                menuLocation: "/about"
            },
            {
                id: 43,
                menuItem: "Services",
                menuLocation: "/services"
            },
            {
                id: 44,
                menuItem: "Blog",
                menuLocation: "/blog"
            },
            {
                id: 45,
                menuItem: "Contact",
                menuLocation: "/contact"
            },
        ]
    },
]