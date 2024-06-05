import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import "./Count.css";
import { useState, useEffect } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [backgroundColor, setBackgroundColor] = useState('');
    const [loading, setLoading] = useState(true);
    const handleIncrease = () => {
        setCount(number => {
            if (number < 10) {
                return number + 1;
            } else if (number < 100) {
                return number + 10;
            } else if (number < 1000) {
                return number + 100;
            } else {
                return number;
            }
        });
    }
    const handleDecrease = () => {
        setCount(number => {
            if (number <= 10) {
                return number - 1;
            } else if (number <= 100) {
                return number - 10;
            } else if (number <= 1000) {
                return number - 100;
            } else {
                return 0;
            }
        });
    }
    useEffect(() => {
        if (count === 1000) {
            setShowButton(true);
        } else if (count <= 0) {
            setShowButton(false);
        }
    }, [count]);
    useEffect(() => {
        setPopupMessage("Hello in our page");
        const time = setTimeout(() => {
            setPopupMessage("");
        }, 4000);

        return () => clearTimeout(time);
    }, []);

    useEffect(() => {
        if (count === 10 || count === 100 || count === 1000) {
            setPopupMessage(`Count reach to ${count}`);
            const time = setTimeout(() => {
                setPopupMessage("");
            }, 2000);
            return () => clearTimeout(time);
        }
    }, [count]);
    useEffect(() => {
        if (count >= 1000) {
          setBackgroundColor('gray');
        } else if (count >= 100) {
          setBackgroundColor('lightgreen');
        } else if (count >= 10) {
          setBackgroundColor('lightblue');
        } else {
          setBackgroundColor('');
        }
      }, [count]);    
        useEffect(() => {
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }, []);
    return (
        <>
        {loading ? <FontAwesomeIcon icon={faSpinner} className="spinner"/>:
            <div className="MS-counter"style={{ backgroundColor}}>
            {popupMessage && <div className="popup">{popupMessage}</div>}
                <div className="MS-buttons">
                    <button className="MS-btn btnIncrease" onClick={handleIncrease}>Increase Number</button>
                    {showButton && <button className="MS-btn btnDecrease" onClick={handleDecrease}>Decrease Number</button>}
                </div>
                <div className="number">{count}</div>
            </div>}
        </>
    )
}