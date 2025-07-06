// src/propTypes/activityTypes.js

import PropTypes from "prop-types";

/**
 * @typedef {Object} Activity
 * @property {number} id - The activity ID
 * @property {string} title - The title of the activity
 * @property {string} description - The description of the activity
 * @property {string} date - The date of the activity
 * @property {string} category - The category of the activity
 * @property {string} city - The city where the activity is held
 * @property {string} venue - The venue of the activity
 * @property {number} latitude - The latitude coordinate of the activity
 * @property {number} longitude - The longitude coordinate of the activity
 */

export const activityPropTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    })
  ).isRequired,
};
