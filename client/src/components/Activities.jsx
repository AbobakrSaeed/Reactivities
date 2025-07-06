import { useEffect, useState} from 'react';
import axios from 'axios';

const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios('https://localhost:5001/api/activities')
        .then(response => {
            setActivities(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the activities!", error);
        }
        );
    }, []);
  return (
    <>
    <div>Activities</div>
    {
        activities.map((activity, index) =>
            <div key={index} className="activity">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <p><strong>Date:</strong> {new Date(activity.date).toLocaleDateString()}</p>
                <p><strong>Category:</strong> {activity.category}</p>
            </div>
        )
    }
    </>
    
  )
}

export default Activities