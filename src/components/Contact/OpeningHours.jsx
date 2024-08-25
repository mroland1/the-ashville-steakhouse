import "./OpeningHours.css"

export default function OpeningHours({ customClass }) {
    return (
        <div className={`${customClass}`}>
        <div id="homeOpeningHours">
            <h2>Opening Hours</h2>
        </div>
        <div id="openingHours">
            <table>
                <tbody>
                    <tr>
                        <th>Monday</th>
                        <td>Closed</td>
                    </tr>
                    <tr>
                        <th>Tuesday</th>
                        <td>5:00 PM - 9:00 PM</td>
                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        <td>5:00 PM - 9:00 PM</td>
                    </tr>
                    <tr>
                        <th>Thursday</th>
                        <td>5:00 PM - 9:30 PM</td>
                    </tr>
                    <tr>
                        <th>Friday</th>
                        <td>
                            12:00 PM - 3:00 PM<br />
                            5:00 PM - 10:00 PM
                        </td>
                    </tr>
                    <tr>
                        <th>Saturday</th>
                        <td>
                            10:00 AM - 12:00 PM<br />
                            12:00 PM - 10:00 PM
                        </td>
                    </tr>
                    <tr>
                        <th>Sunday</th>
                        <td>12:00 PM - 5:00 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

/*<ul>
            <li>Monday : Closed</li>
            <li>Tuesday : 5PM - 9PM</li>
            <li>Wednesday : 5PM - 9PM</li>
            <li>Thursday : 5PM - 9:30PM</li>
            <li>Friday : 
                <ul>
                    <li>12PM - 3PM : Lunch</li>
                    <li>3PM - 5PM : Closed</li>
                    <li>5PM - 10PM : Open</li>
                </ul>
            </li>
            <li>Saturday:
                <ul>
                    <li>10AM - 12PM : Breakfast</li>
                    <li>12PM - 10PM : Open</li>
                </ul>
            </li>
            <li>Sunday : 12PM - 5PM</li>
        </ul>*/