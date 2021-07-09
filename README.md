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
* Data updates:
  * I migrated the mastercard data from a csv into a postgres data base
  * Using SQLAlchemy I brought the data in from my database and merged it with my CARTO Data Observatory sociodemographic dataset
  * Once I merged the data, my preprocessing steps were as follows:
    * Define the features set
      * I dropped the transaction amount ('txn_amt') column because that is what we are trying to predict. The sociodemographics dataset has 165 features ranging from categories like income, education level, age, race, and more. 
    * Define the target set
      * The transaction amount column is the target set as that spend score is what we are trying to predict based on location and sociodemographic factors 
    * Split into training and testing sets
      * The data was split into training and testing data with the default 75% train, 25% test.
    * Create a StandardScaler instance
      * This is not usually necessary for Random Forest, but I chose to scale my data for good practice. 
    * Fit the StandardScaler
    * Scale the data
  * At first, I used all 165 features for my model, but it barely performed better than a coin toss. So, I ranked the feature importance in the model and selected the top 120 features. This did not change the performance by much, so I am going to continue to reduce the amount of selected features by importance level to see if that helps the model performance.

* Notes on my model
  * As mentioned, I have chosen a Random Forest model to train. Below are some of the pros and limitations of this choice:
    * Pros:
      *  Random Forests implicitly perform feature selection and generate uncorrelated decision trees. It does this by choosing a random set of features to build each decision tree. This also makes it a great model when you have to work with a high number of features in the data
      *  Random Forests are not influenced by outliers to a fair degree. It does this by binning the variables.
      *  Random Forests can handle linear and non-linear relationships well.
      *  Random Forests generally provide high accuracy and balance the bias-variance trade-off well. Since the model’s principle is to average the results across the multiple decision trees it builds, it averages the variance as well.
    * Cons:
      * Random Forests are not easily interpretable. They provide feature importance but it does not provide complete visibility into the coefficients as linear regression.
      * Random Forests can be computationally intensive for large datasets. (not an issue in our case, we only have 8,969 rows)
      * Random forest is like a black box algorithm, you have very little control over what the model does.   
