# Final Project

## Selected Topic
Category: Financial

For my final project I am going to study how socidemographic factors relate to indexed spend scores for retailers at the census block level in Manhattan. Being able to predict spend in a census block group could be useful for real estate analysts evaluating site selection options for a retailer, for example.

## Reason for Choosing this Topic
I have a background in finance from my undergraduate degree and internships, so I want to further explore the financially-based decision making using data science skills. Additionally, my current employer, CARTO (https://carto.com/) is a location intelligence platform, so I wanted to make the analysis spatially-focused as well.

## Data Sources
For my analysis I will be using publically available sociodemographic data from American Community Survey (ACS). For the financial data, I will be using a sample dataset from CARTO- their Geographic Insights dataset from Mastercard (https://carto.com/spatial-data-catalog/browser/dataset/mc_geographic__4a11e98c/).

## Questions to be Answered
* How does sociodemographic data affect consumer spend in a given census block group?

## Current Limitations (as of Project Deliverable #1)
* the datasets timelines do not properly align
* random forest regessor model does not seem suitable for this dataset (score of .30 for test data), so throughout the next week I plan to try other methods such as linear regression, supprt vector machine regression, etc.
* eventually, I would like to map the results and add Points of Interest data from Open Street Map. This data can allow analysts to see additional things like, 'are there competitors in the recommended areas for site selection?'
