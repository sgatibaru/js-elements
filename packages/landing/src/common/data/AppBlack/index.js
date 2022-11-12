// Menu items
export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '70',
  },
  {
    label: 'Product',
    path: '#service_section',
    offset: '70',
  },
  {
    label: 'Pricing',
    path: '#pricing',
    offset: '70',
  },
  {
    label: 'About',
    path: '#testimonial_section',
    offset: '70',
  },
]

//ScrollableSticky
import stickyMockup from 'common/assets/image/appBlack/sticky-mockup.png'

export const SCROLLABLE_STICKY_DATA = {
  mockupImage: stickyMockup,
}

//Banner
import bannerImage from 'common/assets/image/appBlack/banner-1.png'
import bannerScreen from 'common/assets/image/appBlack/banner-screen.png'
import bannerBtn1 from 'common/assets/image/foodDelivery/banner-apple.svg'
import bannerBtn2 from 'common/assets/image/foodDelivery/banner-google-play.svg'

export const BANNER_DATA = {
  sectionImage: bannerImage,
  screenImage: bannerScreen,
  title: 'Your favorite apps that make day easy',
  text: 'There will be a day–in our lifetime–when we get to celebrate every person on the planet having access. Moment Pro is the best software platform to collect reviews.',
  tagLine: 'Apps Available to download on',
  buttons: [
    {
      icon: bannerBtn1,
      title: 'App Store',
      text: 'Download on the',
      link: '#',
    },
    {
      icon: bannerBtn2,
      title: 'Google Play',
      text: 'Download on the',
      link: '#',
    },
  ],
}

//Service
import serviceImg from '../../assets/image/appBlack/service-img.png'
import serviceScreen from 'common/assets/image/appBlack/service-screen.png'
import serviceRocketIcon from '../../assets/image/appBlack/service-rocket-icon.png'
import serviceCustomizeIcon from '../../assets/image/appBlack/service-customize-icon.png'
import serviceDevelopIcon from '../../assets/image/appBlack/service-develop-icon.png'
import serviceAnalysisIcon from '../../assets/image/appBlack/service-analysis-icon.png'
import serviceHeadphoneIcon from '../../assets/image/appBlack/service-headphone-icon.png'

export const SERVICE_DATA = {
  sectionImage: serviceImg,
  screenImage: serviceScreen,
  title: 'We deliver our products as fast as superman can do',
  text: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
  serviceItems: [
    {
      icon: serviceRocketIcon,
      title: 'Fast Performance',
    },
    {
      icon: serviceCustomizeIcon,
      title: 'Customization',
    },
    {
      icon: serviceDevelopIcon,
      title: 'Ultimate Develop',
    },
    {
      icon: serviceDevelopIcon,
      title: 'Modify structure',
    },
    {
      icon: serviceAnalysisIcon,
      title: 'Customer Analysis',
    },
    {
      icon: serviceHeadphoneIcon,
      title: 'User Supports',
    },
  ],
}

//Delivery
import deliveryProductImage from 'common/assets/image/appBlack/delivery-img.png'
import productScreen from 'common/assets/image/appBlack/product-screen.png'

export const DELIVERY_PRODUCT_DATA = {
  screenImage: productScreen,
  sectionContent: {
    title: 'Most promising secure app with fast &  Entertaining',
    text: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
    image: deliveryProductImage,
  },
  posts: [
    {
      title: 'Easy to use application',
      text: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.',
    },
    {
      title: 'Deliver Food within 30 min',
      text: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.',
    },
    {
      title: '100% Reliable with Privacy',
      text: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.',
    },
  ],
}

//Clients
import geekwire from 'common/assets/image/appBlack/client-1.png'
import slack from 'common/assets/image/appBlack/client-2.png'
import envato from 'common/assets/image/appBlack/client-3.png'
import usaToday from 'common/assets/image/appBlack/client-4.png'
import forbes from 'common/assets/image/appBlack/client-5.png'
import evernote from 'common/assets/image/appBlack/client-6.png'

export const CLIENTS_DATA = {
  title: '210,000+ people already use our app on a daily basis',
  clients: [
    {
      id: 1,
      logo: geekwire,
      name: 'geekwire',
      link: '#1',
    },
    {
      id: 2,
      logo: slack,
      name: 'slack',
      link: '#2',
    },
    {
      id: 3,
      logo: envato,
      name: 'envato',
      link: '#3',
    },
    {
      id: 4,
      logo: usaToday,
      name: 'usa today',
      link: '#4',
    },
    {
      id: 5,
      logo: forbes,
      name: 'forbes',
      link: '#5',
    },
    {
      id: 6,
      logo: evernote,
      name: 'evernote',
      link: '#6',
    },
  ],
}

//Testimonial
import AuthorOne from 'common/assets/image/foodDelivery/testimonials-1-1.png'
import AuthorTwo from 'common/assets/image/foodDelivery/testimonials-1-2.png'

export const TESTIMONIALS = [
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: AuthorOne,
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: AuthorTwo,
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: AuthorOne,
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: AuthorOne,
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: AuthorTwo,
  },
]

//Pricing policy
import iceCreamIconBlack from '../../assets/image/appBlack/plan-icecream-black-icon.svg'
import iceCreamIconWhite from '../../assets/image/appBlack/plan-icecream-white-icon.svg'
import donutIconBlack from '../../assets/image/appBlack/plan-donut-black-icon.svg'
import donutIconWhite from '../../assets/image/appBlack/plan-donut-white-icon.png'
import pizzaIconBlack from '../../assets/image/appBlack/plan-pizza-black-icon.svg'
import pizzaIconWhite from '../../assets/image/appBlack/plan-pizza-white-icon.svg'
import linkIcon from '../../assets/image/appBlack/plan-link-icon.png'

export const pricing = {
  linkIcon,
  title: 'Meet our awesome pricing plan',
  monthly: [
    {
      id: 1,
      title: 'Starter Pack',
      description: 'Complete time tracking & proper reporting',
      suggested: false,
      price: '16',
      iconBlack: iceCreamIconBlack,
      iconWhite: iceCreamIconWhite,
    },
    {
      id: 2,
      title: 'Premium Pack',
      description: 'Effortless team with time management.',
      suggested: true,
      price: '29',
      trail: 14,
      trailLink: '#',
      iconBlack: donutIconBlack,
      iconWhite: donutIconWhite,
    },
    {
      id: 3,
      title: 'Ultimate Pack',
      description: 'A custom plan for complex or large organization.',
      suggested: true,
      price: '35',
      trail: 14,
      trailLink: '#',
      iconBlack: pizzaIconBlack,
      iconWhite: pizzaIconWhite,
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Starter Pack',
      description: 'Complete time tracking & proper reporting',
      suggested: false,
      price: '160',
      iconBlack: iceCreamIconBlack,
      iconWhite: iceCreamIconWhite,
    },
    {
      id: 2,
      title: 'Premium Pack',
      description: 'Effortless team with time management.',
      suggested: true,
      price: '290',
      trail: 14,
      trailLink: '#',
      iconBlack: donutIconBlack,
      iconWhite: donutIconWhite,
    },
    {
      id: 3,
      title: 'Ultimate Pack',
      description: 'A custom plan for complex or large organization.',
      suggested: true,
      price: '350',
      trail: 14,
      trailLink: '#',
      iconBlack: pizzaIconBlack,
      iconWhite: pizzaIconWhite,
    },
  ],
}

// faq
export const faq = {
  slogan: 'FREQUENT QUESTION',
  title: 'Do you have any question?',
  faqs: [
    {
      id: 11,
      question: 'How to contact with riders emergency?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 12,
      question: 'App installation failed, how to update system information?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 13,
      question: 'Website reponse taking time, how to improve?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 14,
      question: 'New update fixed all bug and issues',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
  ],
}

//QualityFeatures
import featureIcon1 from 'common/assets/image/appBlack/feature-icon-1.png'
import featureIcon2 from 'common/assets/image/appBlack/feature-icon-2.png'
import featureIcon3 from 'common/assets/image/appBlack/feature-icon-3.png'
import featureIcon4 from 'common/assets/image/appBlack/feature-icon-3.png'
import featureIcon5 from 'common/assets/image/appBlack/feature-icon-5.png'
import featureIcon6 from 'common/assets/image/appBlack/feature-icon-6.png'

export const QUALITY_FEATURES_DATA = {
  title: 'Meet our Quality Features',
  posts: [
    {
      icon: featureIcon1,
      title: 'Analytics Business',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon2,
      title: 'Artificial Intelligence',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon3,
      title: 'Privacy & Security',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon4,
      title: 'Annual Reports',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon5,
      title: 'Video Tutorial',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon6,
      title: 'Performance Analysis',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
  ],
}
