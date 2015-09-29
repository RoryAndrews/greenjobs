# greenjobs

#Overview

Provides three functions computing analytics over the [Green Jobs Dataset](https://data.hawaii.gov/Employment/Hawaii-Directory-Of-Green-Employers/mq86-5ta6)

#Installation

Provide the following scripts in your html file:

```
  <script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
  <script src="//philipmjohnson.github.io/ics314f15/morea/underscore/greenjobs.js"></script>
  <script src="greenjobs.js"></script>
```

#Usage

Here are example calls of the functions:

```
  console.log(listIndustries(greenjobs));
  console.log(countyGreenJobs(greenjobs));
  console.log(jobswithKeyword(greenjobs, "manager"));
```

#Credits

Uses the [Underscore](http://underscorejs.org/) library.
