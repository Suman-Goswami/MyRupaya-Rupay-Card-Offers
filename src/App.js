import React, { useState } from 'react';
import './App.css';

const RupayCards = [
    "Tata Star Titanium Card",
    "Indian Coast Guard RAKSHAMAH",
    "Bharat Credit Card",
    "HDFC UPI RuPay Credit Card",
    "AU Small Finance Bank LIT Credit Card",
    "IRCTC BoB",
    "SNAPDEAL",
    "Poonawalla Fincorp IndusInd Bank eLITE RuPay Credit Card",
    "IndianOil HDFC Bank Credit Card",
    "UNNATI",
    "Federal Bank Rupay Signet Credit Card",
    "RuPay Platinum Credit Card",
    "HDFC Bank UPI RuPay Biz Credit Card",
    "HPCL BoB ENERGIE",
    "PNB Rakshak Rupay Platinum Card",
    "PNB RuPay Platinum Credit Card",
    "Bank of India Rupay Platinum Credit Card",
    "Bank of India SwaDhan Rupay Platinum Credit Card",
    "IndusInd Samman RuPay Credit Card",
    "RuPay Select Credit Card",
    "IndusInd Bank Platinum RuPay Credit Card",
    "PNB Rupay Millennial Card",
    "IRCTC SBI Card (on RuPay platform)",
    "Fibe Axis Bank Rupay Credit Card",
    "PNB Rupay Select Card"
];

const Image = [
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/GRT_Jewllers_logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Gehna_logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Kalyan_logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Puma_logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Appolo_logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Lakme-Salon-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/BookMyScans-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/The-Clarks-Hotel-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Home4U-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Mokobara-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/HOUSE-OF-RARE-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/INDIA-MAGS-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Zomato-dining-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/MFT_257.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Duroflex_257.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Flo_257.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/257-Daily.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/257_Zoomcar.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Healthkart_257.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Interflora.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Masqua.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/logo-size_Surat.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/melorra_logo.jpg",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/FernsnPetals.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/oyo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/snitch-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/IGP.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Boat_257x93.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/PepperFry.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Makemytrip.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/khadi-natural-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/simplilearn-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/stylework-in-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/hush-puppies-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/bata-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/myntra-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/bang-the-ritz-carlton-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/izu-the-ritz-carlton-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/starlit-by-the-pool-the-ritz-carlton-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/the-lantern-restaurant-bar-the-ritz-carlton-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/riwaz-the-ritz-carlton-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/apollo-pharmacy-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/toni-guy-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/hilton-hotels-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/bewakoof-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/dry-fruits-home-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/reliance-digital-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/superbottoms-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/juicy-chemistry-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/oziva-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/einstein-box-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/ixigo-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/giva-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/clovia-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/bombay-shaving-company-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/lunchbox-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/the-good-bowl-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/ovenstory-pizza-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/faasos-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/eatsure-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/myntra-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/bagline-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/zouk-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/lavie-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/hindustan-times-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/blyve-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/ayesha-parekh-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/hsbc-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/jabong-logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/puma-logo.png"
  ];

  const Offers = [
    "Flat 1.5% off on gold jewellery orders above ₹20,000. Max discount is ₹1,500.",
    "₹250 off on orders of ₹2500 & above on Silver jewellery.",
    "Flat 2000 INR Off Purchase of 25K and Above",
    "Flat 1000 INR Off Purchase of 15K and above",
    "Flat ₹8000 on a minimum purchase of ₹1,00,000 on Diamond Jewellery",
    "Flat 5% Off Sitewide",
    "Flat 25% off on making charges on a minimum purchase of ₹75,000 on Gold Jewellery.",
    "30% discount on Diagnostic bookings. Offer Valid on all RuPay Cards.",
    "15% discount on medicines on MOV ₹1250. Offer Valid on all RuPay Cards.",
    "50% off on 12 months Circle Membership. Offer Valid on all RuPay Cards.",
    "₹300 off on Minimum Purchase Value of ₹1000",
    "25% off on Silver & Platinum Package",
    "25% off on Rooms",
    "20% off on Food & Soft Beverages",
    "10% off on Total Bill",
    "Flat 10% off on minimum order value of ₹5000 or above",
    "Get 4% off on Magazine Subscriptions",
    "15% instant cashback upto ₹1200 on RCC on UPI transactions on Zomato Dining (MOV : 3000) as Zomato Money",
    "Flat 10% off",
    "Additional 10% off",
    "Free Snooze Kit (Set of 2 Eye Masks)",
    "Flat 20% off upto ₹1000/-",
    "Flat 20% Off on a minimum purchase of ₹1999",
    "Flat 20% off on ₹1000 & above. Maximum discount capping ₹500.",
    "18% Exclusive Discount for RuPay Card Customers",
    "Get Flat ₹7000 Off on Diamond Jewellery, Minimum Billing ₹90,000/-",
    "Get 18% off on minimum order value of ₹1200",
    "Upto 65% off on hotel bookings",
    "20% OFF on minimum purchase of ₹3299",
    "Flat 20% off on a minimum purchase of ₹1199. Maximum discount capping ₹500.",
    "Flat ₹500 off",
    "Flat ₹1250 Off on Purchase of ₹10000 and above",
    "Upto 15% cashback on Flights and Hotels",
    "Flat 10% off on minimum order value of ₹799 or above",
    "Flat 20% discount on all Master’s programs",
    "15% off on All Platinum Category Day Pass",
    "10% off on All Silver & Gold Category Day Pass",
    "₹1500 off on Minimum Purchase Value of ₹6999. ₹1000 off on Minimum Purchase Value of ₹4999",
    "₹750 off on Minimum Purchase Value of ₹2999. ₹500 off on Minimum Purchase Value of ₹1999.",
    "₹400 off on Minimum Purchase Value of ₹1999",
    "Mixology Masterclass of ₹5000+ Taxes PP & ₹40000+ Taxes PP for Group of 10",
    "Private Dining Room of Chef’s Table Set Menu of ₹5000+ Taxes PP. Masterclass ₹6000+ Taxes PP",
    "Breakfast on the Waves off ₹2500+ Taxes PP. Dine under the stars off ₹25000+ Taxes PP",
    "Private Dining Room of Chef’s Table Set Menu of ₹5000+ Taxes PP. Masterclass ₹6000+ Taxes PP",
    "Dineamation Experience of ₹10000+ Taxes PP. Private Dining Room of Chef’s Table Set Menu of ₹5000+ Taxes PP. Masterclass ₹6000+ Taxes PP",
    "10% off on Medicines except DPCO. 15% off on Apollo Private Label Products",
    "15% off on Total Bill",
    "20% off on Food & Soft Beverages",
    "15% off on Minimum Purchase Value of ₹999",
    "Flat 15% off on all purchases above ₹1000",
    "₹600 off on minimum purchase of ₹17500",
    "₹250 off on minimum order value of ₹7000",
    "20% Off on minimum purchase of ₹1199",
    "Extra 25% off * Valid on top of slashed prices exclusively",
    "Flat 20% off on orders above ₹999",
    "₹400 discounts on purchase of items from 1 Yr to 12 Yrs",
    "8% off on Flight Bookings, Maximum off Upto ₹1000",
    "₹300 off on Silver Jewellery on Minimum Purchase Value of ₹999",
    "₹200 off on Minimum Purchase value of ₹999",
    "Buy 3 Perfume at ₹599",
    "Get 30% off upto ₹100 on Minimum Purchase Value of ₹199 & above",
    "Get 40% off upto ₹110 on Minimum Purchase Value of ₹199 & above",
    "Get 50% off upto ₹125 on Minimum Purchase Value of ₹249 & above",
    "Get 40% off upto ₹125 on Minimum Purchase Value of ₹199 & above",
    "Get 40% off upto ₹110 on Minimum Purchase Value of ₹249 + Free Delivery",
    "Extra ₹250 off on Minimum Purchase Value of ₹1499 on select styles",
    "Additional 10% off on website on Minimum Purchase Value of ₹1500",
    "₹500 off on zouk bags, wallets and footwear range",
    "Get 20% off on 'Lavie' Selective Products",
    "30% discount on HT Premium digital subscription plan",
    "30% discount on Mint and Mint + Wall Street Journal digital subscription plan",
    "Get 20% off upto ₹300",
    "Up to ₹5,000 off on International Flight Booking",
    "Up to ₹3,000 off on on Domestic Flight Booking",
    "₹5000 off",
    "15% off on Minimum Purchase Value of ₹3000",
    "10% off up to ₹300 on First Purchase on Sitewide",
    "₹400 off on Minimum Purchase Value of ₹999",
    "15% off on First Time Purchase",
    "Buy 1 Get 1 Free on Products of Organic Harvest",
    "20% off on clothing and accessories",
    "Flat ₹100 off on orders above ₹249",
    "Flat ₹500 off on minimum purchase of ₹3000",
    "15% off on all orders placed on www.Chaayos.com",
    "15% off on Food & Soft Beverages",
    "25% off on Apollo ProHealth Health Checks",
    "25% off on Pearl, Gemstone & Fashion Jewellery",
    "20% off up to ₹200+Free Home Delivery",
    "15% off on Sitewide",
    "15% off on Sitewide",
    "20% off on Total Bill",
    "₹200 off on all tests & packages",
    "₹200 off on Medicine +80% NMS SuperCash",
    "3 Month Free NFM Membership",
    "10% off on All Our Economy Cars, Chauffeur Driven Pan India, Maximum off ₹500",
    "15% off on All Our Luxury Cars, Chauffeur Driven Pan India, Maximum off ₹1500",
    "15% off on All Our Economy Cars, Outstation Chauffeur Driven Pan India, Maximum off ₹1000",
    "20% off on All Our Luxury Cars, Outstation Chauffeur Driven Pan India, Maximum off Rs. 2500",
    "25% off on Catalogue Rate",
    "10% off on Domestic Holidays",
    "Gold Jewellery offer: 20% off on Gold Jewellery Making Charges, Diamond Jewellery offer: ₹3000 off on Purchase of Diamond Jewellery worth ₹50,000/- And Above",
    "25% off on All Pee Safe Products on Minimum Order Value of ₹499",
    "Upto 50% off for New Users",
    "10% off on Minimum Order Value of ₹2000",
    "10% off on Sitewide",
    "15% off on All Paid Plans",
    "₹500 off on Minimum Order Value of ₹1999 & Above",
    "₹250 off on Minimum Order Value of ₹1499 & Above",
    "10% off on Collections",
    "20% off on Total Bill",
    "₹600 off on Total Bill",
    "15% off",
    "₹500 off on Minimum Purchase value of ₹899 & above on Sitewide",
    "10% off on Minimum Purchase Value of ₹1000",
    "₹500 off on Minimum Purchase value of ₹899 & above on Sitewide",
    "₹500 off on Minimum Purchase value of ₹899 & above on Sitewide",
    "10% off on Minimum Purchase Value of ₹1500",
    "10% off on Total Bill",
    "15% off on all Hammer Gadgets",
    "70% off on Sitewide",
    "₹5000 off on Minimum Order Value of ₹24999",
    "35% off upto ₹110 on Minimum Order Value of ₹249 & above",
    "22% off on Sitewide",
    "₹500 off on Minimum Order Value of ₹1500",
    "15% off on Minimum Order Value of ₹1999",
    "40% off upto ₹150 on Minimum Purchase Value of ₹399 & above"
  ];

  const Link = [
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=245",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=244",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=243",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=242",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=241",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=240",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=239",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=235",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=234",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=233",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=231",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=230",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=229",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=228",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=227",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=226",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=225",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=224",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=223",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=222",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=221",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=220",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=219",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=218",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=217",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=216",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=215",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=214",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=213",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=212",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=211",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=210",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=209",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=207",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=206",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=205",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=201",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=200",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=199",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=198",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=197",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=196",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=195",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=194",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=193",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=192",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=191",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=190",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=189",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=188",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=186",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=185",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=184",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=179",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=178",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=177",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=176",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=175",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=174",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=173",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=172",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=171",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=170",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=169",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=168"
  ];

  const Date = [
    "30th September 2025",
    "30th September 2025",
    "31st October 2025",
    "31st October 2025",
    "31st March 2025",
    "31st December 2024",
    "31st March 2025",
    "1st October 2024 to 31st March 2025",
    "1st October 2024 to 31st March 2025",
    "1st October 2024 to 31st March 2025",
    "21st August 2024 to 31st July 2025",
    "21st August 2024 to 31st July 2025",
    "05th September 2024 to 31st July 2025",
    "05th September 2024 to 31st July 2025",
    "18th September 2024 to 31st July 2025",
    "18th September 2024 to 31st July 2025",
    "20th August 2024 to 31st July 2025",
    "20th August 2024 to 31st July 2025",
    "30th March 2025",
    "25th March 2024 to 31st March 2025",
    "26th March 2024 to 31st March 2025",
    "24th March 2024 to 31st March 2025",
    "23rd March 2024 to 15th March 2025",
    "21st March 2024 to 30th June 2025",
    "20th March 2024 to 31st March 2025",
    "22nd April 2024 to 31st March 2025",
    "22nd April 2024 to 31st March 2025",
    "8th May 2024 to 8th May 2025",
    "9th May 2024 to 8th May 2025",
    "8th April 2024 to 17th April 2025",
    "31st March 2025",
    "31st December 2024",
    "22nd April 2024 to 31st March 2025",
    "22nd March 2024 to 31st March 2025",
    "15th April 2024 to 30th November 2024",
    "21st June 2024 to 31st December 2024",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "16th August 2024 to 31st July 2025",
    "16th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "13th August 2024 to 31st July 2025",
    "9th August 2024 to 31st July 2025",
    "9th August 2024 to 31st July 2025",
    "9th August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "7th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "6th August 2024 to 31st July 2025",
    "5th August 2024 to 31st July 2025",
    "5th August 2024 to 31st July 2025",
    "5th August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "1st August 2024 to 31st July 2025",
    "2nd August 2024 to 31st July 2025",
    "2nd August 2024 to 31st July 2025",
    "2nd August 2024 to 31st July 2025",
    "31st July 2024 to 31st July 2025",
    "31st July 2024 to 31st July 2025",
    "30th July 2024 to 31st July 2025",
    "30th July 2024 to 31st July 2025",
    "30th July 2024 to 31st July 2025",
    "30th July 2024 to 31st July 2025",
    "30th July 2024 to 31st July 2025",
    "30th July 2024 to 31st July 2025",
    "29th July 2024 to 31st July 2025",
    "29th July 2024 to 31st July 2025"
  ];


function CreditCardOffers() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [noOffersFound, setNoOffersFound] = useState(false);

    const handleSelectCard = (card) => {
        setSelectedCard(card);
        setSearchTerm(card); // Set the selected card name in the input field
        setFilteredCards([]); // Remove the dropdown
        setNoOffersFound(false); // Reset the "no offers" flag
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            // Clear offers if the input field is cleared
            setSelectedCard(null);
            setFilteredCards([]);
            setNoOffersFound(false);
        } else {
            const results = RupayCards.filter(card =>
                card.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCards(results);
            if (results.length === 0) {
                setNoOffersFound(true); // Set the flag if no results are found
            } else {
                setNoOffersFound(false); // Reset the flag if results are found
            }
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
    {/* Navbar Component */}
      <nav style={styles.navbar}>
  <div style={styles.logoContainer}>
    <a href="https://www.myrupaya.in/">
      <img
        src="https://static.wixstatic.com/media/f836e8_26da4bf726c3475eabd6578d7546c3b2~mv2.jpg/v1/crop/x_124,y_0,w_3152,h_1458/fill/w_909,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dark_logo_white_background.jpg"
        alt="MyRupaya Logo"
        style={styles.logo}
      />
    </a>
    {/* Move the links here */}
    <div
      style={{
        ...styles.linksContainer,
        ...(isMobileMenuOpen ? styles.mobileMenuOpen : {}),
      }}
    >
      <a href="https://www.myrupaya.in/" style={styles.link}>
        Home
      </a>
    </div>
  </div>
</nav>
            <h2 className="heading">Rupay Card Offers</h2>
            <input
                type="text"
                placeholder="Enter card name..."
                value={searchTerm}
                className="dropdown"
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                }}
            />

            {filteredCards.length > 0 && !noOffersFound && (
                <ul style={{
                    listStyleType: 'none',
                    padding: '0',
                    margin: '10px 0 0 0',
                    width: '1000px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 5px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    zIndex: '1000',
                }}>
                    {filteredCards.map(card => (
                        <li
                            key={card}
                            onClick={() => handleSelectCard(card)}
                            style={{
                                padding: '8px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #ddd',
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            {card}
                        </li>
                    ))}
                </ul>
            )}

            {noOffersFound && (
                <p style={{ color: 'red', marginTop: '10px' , textAlign: 'center'}}>
                    No offers found for this card.
                </p>
            )}

            {selectedCard && !noOffersFound && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Offers for {selectedCard}</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                    }}>
                        {Offers.length > 0 ? (
                            Offers.map((offer, index) => (
                                <div key={index} style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
                                    backgroundColor: '#39641D',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}>
                                    {Image[index] ? (
                                        <img src={Image[index]} alt={`Offer ${index + 1}`} style={{ width: '100%', marginBottom: '10px' }} />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                    <p><strong>Offers:</strong> {Offers[index] || 'No offer available'}</p>
                                    <p><strong>Duration:</strong> {Date[index] || 'No duration available'}</p>
                                    <a
                                        href={Link[index] || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            marginTop: 'auto',
                                            padding: '10px 15px',
                                            backgroundColor: '#007bff',
                                            color: '#fff',
                                            textDecoration: 'none',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        View Offer Details
                                    </a>
                                </div>
                            ))
                        ) : (
                            <p>No offers available for this card.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#CDD1C1",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      width: "100px",
      height: "100px",
      marginRight: "20px",
    },
    linksContainer: {
      display: "flex",
      gap: "35px",
      flexWrap: "wrap",
      marginLeft: "40px", // Adjust spacing from the logo
    },
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "18px", // Increased font size
      fontFamily: "Arial, sans-serif",
      transition: "color 0.3s ease", // Smooth transition effect
    },
    mobileMenuOpen: {
      display: "block",
    },
  };

export default CreditCardOffers;
