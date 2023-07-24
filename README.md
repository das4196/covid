<!-- Covid tracker - IONOS

Covid tracker displays all the necessary informations such as active covid cases, inactive cases, total cases in and around the city of Karlsruhe. The application also displays the results in form of a chart/graph.

Currently we support 3 types of charts bar, line and area. Users could also view the data in tabular form.
Date picking option helps users to choose date ranges to generate data in custom ranges.

There is also option to sort according to date, and cases showing the highest ans lowest cases and the corrensponding dates.

Users could also download the Chart as well as the tables in CSV format and the chart in PNG or SVG format. Additonal informations about Covid-19 are also given such as prevention, symptoms etc.

Prerequisites to run the code.

Mac/ Windows operating system.
Preferrably VS code or similar.

Installation

-Download the package
npm install to install necessary packages.
npm start to launch

NOTE :

Had some issues installing React-table-6 on vs code in Mac OS. If the issue persists please feel free to contact.
React router dom version used is v5.

I have completed the following features 

1) Shows latest information about total cases, active cases as well as inactive cases.2)Able to generate the cases according to fixed time slots.3)Table to show all the cases in the given time range.Table has features such as sort ascending or decending order 4)3 types of Charts , -Area , -Line ,-Bar charts to show the information.(With hover effects to show exact details)5)Exporting the Table directly into CSV format within a chosen date range.6)Additionally exporting the graph in PNG or SVG formats.7) I have also worked on additional pages such as about covid-19, symptoms, preventions etc to give a better look to the website.
I have also made the website responsive for 3 types of devices 
1)All mobile devices ( 320 - 480)2)IPADs / tablets(481 - 780)3)Desktop or laptop screens. (Large) <780
I have tested the application on mainly 3 browsers - Chrome, Safari and Firefox .And also tried to run the code on Mac as well as Windows systems.

Cypress test cases (End to End test)

-should visit URL and the titlepassed
-Should click choose city buttons and check if data is fetchingpassed
-Gets the choosen text in label and Checks Initial fetchingpassed
-Should check the routes are validpassed
-Should check inputing the dates (From) and (To)passed
-Should click generate button to generate table and chartpassed
-Should click export button to export documentpassed
-Should check if Line , bar and area chart functionspassed

Contact

In case of any problems please contact :
ATUL PRADEEPatul.pradep40@gmail.com -->
