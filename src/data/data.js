const menuItems = [{title: "Woman’s Fashion", children: ["Tops", "Dresses", "Accessories"]}, {
    title: "Men’s Fashion",
    children: ["Shirts", "Jeans", "Watches"]
}, {title: "Electronics", children: ["Mobiles", "Laptops", "Headphones"]}, {
    title: "Home & Lifestyle",
    children: ["Furniture", "Decor", "Kitchen"]
}, {title: "Medicine", children: ["Health Care", "Supplements", "Devices"]}, {
    title: "Sports & Outdoor",
    children: ["Exercise", "Outdoor Gear", "Bicycles"]
}, {title: "Baby’s & Toys", children: ["Diapers", "Baby Food", "Toys"]}, {
    title: "Groceries & Pets",
    children: ["Groceries", "Pet Food", "Pet Toys"]
}, {title: "Health & Beauty", children: ["Skincare", "Haircare", "Personal Care"]},];
const bannerData = [{id: 1, name: "iphone 16 pro max", image: "mobile.png", voucher: "20%"}, {
    id: 2,
    name: "Latest Watch",
    image: "watch.jpg",
    voucher: "15%"
}, {id: 3, name: "Fashionable ladies bag", image: "bag.webp", voucher: "10%"}, {
    id: 4,
    name: "Quality Camera",
    image: "camera.jpg",
    voucher: "30%"
}, {id: 5, name: "Best Cosmetics", image: "cosmatic.webp", voucher: "50%"},]
const categories = [{id: 1, name: "Phones", image: "mobile.svg"}, {
    id: 2,
    name: "Computers",
    image: "Computer.svg"
}, {id: 3, name: "Smart Watch", image: "SmartWatch.svg"}, {id: 4, name: "Camera", image: "Camera.svg"}, {
    id: 5,
    name: "Headphones",
    image: "Headphone.svg"
}, {id: 6, name: "Gaming", image: "Gamepad.svg"},]
const product = [{id: 1, name: "HAVIT HV-G92 Gamepad", price: 120}, {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120
}, {id: 1, name: "HAVIT HV-G92 Gamepad", price: 120}, {id: 1, name: "HAVIT HV-G92 Gamepad", price: 120}, {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120
}, {id: 1, name: "HAVIT HV-G92 Gamepad", price: 120}, {id: 1, name: "HAVIT HV-G92 Gamepad", price: 120}, {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120
}, {id: 1, name: "HAVIT HV-G92 Gamepad", price: 120}, {id: 1, name: "HAVIT HV-G92 Gamepad", price: 120}, {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120
}, {id: 1, name: "HAVIT HV-G92 Gamepad", price: 120},]
const offerData = [
    {id: 1, title: "Enhance Your Mobile Experience", image: "mobile.png"},
    {
        id: 2,
        title: "Enhance Your Time Experience",
        image: "watch.jpg"
    },
    {id: 3, title: "Enhance Your Fashion Experience", image: "bag.webp"},
    {
        id: 4,
        title: "Enhance Your Photography Experience",
        image: "camera.jpg",
        voucher: "30%"
    },
    {id: 5, title: "Enhance Your Beauty Experience", image: "cosmatic.webp"},
    {
        id: 6,
        title: "Enhance Your Music Experience",
        image: "speaker.png",

    }]
const FacilityData = [
    {
        id: 1,
        title: "FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
        image: "bus.png"
    },
    {
        id: 2,
        title: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support",
        image: "call.png"
    },
    {
        id: 4,
        title: "MONEY BACK GUARANTEE",
        description: "We return money within 30 days",
        image: "valid.png"
    }

]
const NavbarData = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "About",
        link: "/about"
    },
    {
        id: 3,
        title: "Contact",
        link: "/contact"
    },
    {
        id: 4,
        title: "Sign Out",
        link: "/signout"
    }
]
const aboutUs =[
    {id: 1, title: "10.5k ", image: "Services.svg",  description: "Sallers active our site"},{
        id: 2,
        title: "33k",
        image: "doller.svg",
        description: "Mopnthly Produduct Sale"
    },{
        id: 3,
        title: "45.5k",
        image: "bag.svg",
        description: "Customer active in our site"
    }, {
        id: 4,
        title: "25k",
        image: "moneyBag.svg",
        description: "Anual gross sale in our site"
    }
]
const team = [
    {id: 1, name: "Tom Cruise", position: "CEO & Founder", image: "person1.png", social: "facebook.com"},
    {id: 2, name: "Emma Watson", position: "Managing Director", image: "person2.png", social: "facebook.com"},
    {id: 3, name: "Will Smith", position: "Product Designer", image: "person3.png", social: "facebook.com"},
    {id: 3, name: "Nur Islam", position: "Founder & Chairman", image: "person4.png", social: "facebook.com"},
]
const billingFields = [
    {
        id: 'firstName',
        label: 'First Name *',
        placeholder: 'First Name',
        type: 'text',
        required: true
    },
    {
        id: 'lastName',
        label: 'Last Name *',
        placeholder: 'Last Name',
        type: 'text',
        required: true
    },
    {
        id: 'email',
        label: 'Email *',
        placeholder: 'Email',
        type: 'email',
        required: true
    },
    {
        id: 'address',
        label: 'Address *',
        placeholder: 'Address',
        type: 'text',
        required: true
    },
    {
        id: 'city',
        label: 'City',
        placeholder: 'City',
        type: 'text',
        required: false
    },
    {
        id: 'state',
        label: 'State',
        placeholder: 'State',
        type: 'text',
        required: false
    },
    {
        id: 'zipCode',
        label: 'ZIP Code',
        placeholder: 'ZIP Code',
        type: 'text',
        required: false
    },
    {
        id: 'phone',
        label: 'Phone *',
        placeholder: 'Phone',
        type: 'tel', // Changed to 'tel' for better mobile experience
        required: true
    }
];

export {menuItems, bannerData, categories, product, offerData, FacilityData, NavbarData, aboutUs, team, billingFields}
