import React, { useState } from 'react';
import './App.css';

const RupayCards = [
    "Tata Star Titanium Card",
    "Indian Coast Guard RAKSHAMAH",
    "Bharat Credit Card",
];

const Image = [
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/GRT_Jewllers_logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Gehna_logo.png",
    "https://www.rupay.co.in/images/rupay/rupay-festive-carnival/logo/Kalyan_logo.png",
];

const Offers = [
    "Flat 1.5% off on gold jewellery orders above ₹20,000. Max discount is ₹1,500.",
    "₹250 off on orders of ₹2500 & above on Silver jewellery.",
    "Flat 2000 INR Off Purchase of 25K and Above",
];

const Link = [
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=245",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=244",
    "https://www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=243",
];

const Date = [
    "30th September 2025",
    "30th September 2025",
    "31st October 2025",
];

function CreditCardOffers() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState(RupayCards);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelectCard = (card) => {
        setSelectedCard(card);
        setSearchTerm(card); // Keep the selected card name in the input field
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const results = RupayCards.filter(card =>
            card.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCards(results);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
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

            {searchTerm && filteredCards.length > 0 && (
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

            {selectedCard && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Offers for {selectedCard}</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '80px',
                    }}>
                        {Offers.map((offer, index) => (
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreditCardOffers;
