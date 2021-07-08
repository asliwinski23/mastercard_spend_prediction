# Final Project - Credit Card Spend Prediction

## Selected Topic
Category: Financial

For my final project I am going to study how socidemographic factors relate to indexed spend scores for retailers at the census block level in Manhattan. Being able to predict spend in a census block group could be useful for real estate analysts evaluating site selection options for a retailer, for example.

## Reason for Choosing this Topic
I have a background in finance from my undergraduate degree and internships, so I want to further explore financially-based decision making using data science skills. Additionally, my current employer, CARTO (https://carto.com/) is a location intelligence platform, so I wanted to make the analysis spatially-focused as well.

## Data Sources
For my analysis I will be using publically available sociodemographic data from American Community Survey (ACS). For the financial data, I will be using a sample dataset from CARTO- their Geographic Insights dataset from Mastercard (https://carto.com/spatial-data-catalog/browser/dataset/mc_geographic__4a11e98c/). Both of these datasets will be brought into my notebook using CARTO's CARTOframes python package. I am choosing to do it this way because CARTO has the data I need readily available and cleaned for the most part.

## Questions to be Answered
* How does sociodemographic data affect consumer spend in a given census block group?

## Current Limitations (as of Project Deliverable #1)
* The datasets timelines do not properly align
* The first pass at random forest regessor model does not seem suitable for this dataset (score of .30 for test data), so perhaps there is over and underfitting happening
* Eventually, I would like to map the results and add Points of Interest data from Open Street Map. This data can allow analysts to see additional things like, 'are there competitors in the recommended areas for site selection?'

## Deliverable #2 Updates (July 11, 2021)
* I migrated the mastercard data from a csv into a postgres data base
* Using SQLAlchemy I brought the data in from my database and merged it with my CARTO Data Observatory sociodemographic dataset
* Once I merged the data, my preprocessing steps were as follows:
  * Preprocessing Process:
  * Define the features set
  * Define the target set
  * Split into training and testing sets
  * Create a StandardScaler instance
  * Fit the StandardScaler
  * Scale the data
