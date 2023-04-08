import { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import carBg from "../../Assets/Images/car-bg-low.png";

export default function Faq() {
    const questionList = [
        {
            question: '1. What is special about comparing rental car deals?',
            answer: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.',

        },
        {
            question: '2. How do I find the car rental deals?',
            answer: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',

        },
        {
            question: '3. How do I find such low rental car prices?',
            answer: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.',

        },
    ];

    const [selected, setSelected] = useState(0);

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="faq">
            <div className="faq-text">
                <h3>FAQ</h3>
                <h1>Frequently Asked Questions</h1>
                <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className="faq-container">
                {questionList.map((faq, i) => {
                    return (
                        <div className="faq-box" key={i} onClick={() => toggle(i)}>
                            <div className={selected === i ? "faq-chev active" : "faq-chev"}>
                                <div className="question" key={i}>
                                    {faq.question}
                                </div>
                                <FontAwesomeIcon icon={faChevronDown} className="icon" />
                            </div>
                            <div className={selected === i ? "rubik answer show" : "answer hide"} key={i}>{faq.answer}</div>
                        </div>
                    )
                }
                )}

            </div>
            <img src={carBg} alt="car-bg" />
        </div>
    );

}
