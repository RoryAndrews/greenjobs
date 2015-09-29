/** Contains functions that obtains information from greenjobs
 * Created by Rory on 9/29/2015.
 */

/**
 * This function can be passed greenjobs and returns an array of strings indicating all the industries in the dataset (no duplicates).
 * @param data
 * @returns {Array} containing all the industries in dataset
 */
function listIndustries(data) {
  return _.uniq(_.pluck(data, "Industry"));
}

/**
 * This function can be passed greenjobs and returns an object where the keys are County names and the values are the number of Green Jobs listed in that County.
 * @param data
 * @returns {Object} containing County names as key and their number of green jobs as value
 */
function countyGreenJobs(data) {
  return _.countBy(_.pluck(data, "County"));
}

/**
 * This function can be passed greenjobs and a string and returns a list of Job Titles containing the passed string.
 * @param data
 * @param keyword the job title being searched
 * @returns {Array}
 */
function jobswithKeyword(data, keyword) {
  return _.filter(_.values(_.pluck(data, "Job Title")), matchesName, keyword);
}

/**
 * Helper function for jobswithKeyword.
 * @param name
 * @returns {boolean} returns true if keyword matches name.
 */
function matchesName(name) {
  return name.toLowerCase().indexOf(this.toLowerCase()) != -1;
}