"use strict"


/**
 * This function will accept details about a person
 * and create an object for them.
 *
 * @param {string} name The persons full name
 * @param {number} age The persons age
 * @param {boolean} isDeveloper is the person a developer
 * @returns {object} The person object
 */
function createPerson(name, age, isDeveloper) {
    return {
        name: name,
        age: age,
        isDeveloper: isDeveloper
    }
}
