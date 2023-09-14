import React, { useState } from 'react'
import './Accordion.css'

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({ title , links}) => {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <>
            <div className="singleLinks">
                <div className="btnLinks" onClick={() => setShowLinks(!showLinks)}>
                    <h6>{title}</h6>
                    <p>
                    {showLinks ? (
                        <FontAwesomeIcon icon={faMinus} />
                    ) : (
                        <FontAwesomeIcon icon={faPlus} />
                    )}
                    </p>
                </div>

                <ul>
                    {showLinks &&
                    links.map((link) => {
                        return (
                        <li>
                            <a href="#">{link}</a>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Accordion
