import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>Taskify is a simple webapp made using React to create, read, update, and delete Tasks</p>
            <p>A double click on an existing task enables/disables reminders</p>

                <ul>
                    <li>Green: Reminder Enabled</li>
                    <li>Red: Reminder Disabled</li>
                </ul>

            <p>The data is being read, updated, added, and deleted from a db.json file that is deployed on a json-server</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About