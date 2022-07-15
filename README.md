# AltSchool Semester-1 Holiday Challenge

### What
Solidify what you’ve learnt by building cool simple things you can showcase

### Why
Practice makes perfect and we’re getting you ready for all the fun projects in the coming semester


### How
*   Build any one of the below projects as a group / team, using Repl.it 
*   HTML/CSS and Javascript is sufficient to build these projects as fully functional apps, so don’t use any fancy libraries or frameworks. 
*   It’s a healthy competition amongst teams, so try your best to make your application functional, clean and presentable

## Projects

> Pick and build one. Make sure to update `app.properties` to reflect your choice as well as details of the team working to build it. 


### 01 - Phonie: Identify the telecoms carrier from a phone number

#### Scenario

A user is filling a form in your web application and they need to enter their phone number into a form field.

#### Outcome

After typing the phone number into the form field, the UI indicates that it’s an MTN or GLO or Airtel or Etisalat line e.t.c (e.g display MTN icon/logo somewhere beside the form field)

#### Advanced features (OPTIONAL- if you are already chilling with the big boys) 

* Add validation - Use the pattern attribute of the form field to restrict phone numbers to a certain carrier, e.g restrict to Airtel, such that entering an MTN/GLO number would be invalid
* Support +XXX country codes (e.g +234 for Nigeria) - Still detect the carrier even if the user prefixed the number with their +XXX country code
* Show auto-completion - Show suggestions as the user starts typing the phone number. E.g once they type 080, show them that 0803 and 0806 e.t.c

### 02- Redactr - Scramble some words from a body of text content

#### Scenario

Your app is to help people safely share content on social media by scrambling portions of the text they don’t want the world to read/see. A user will write/paste the original content into a form field and then specify the words they need to be scrambled (using another field). Note the user is allowed to specify more than one word (separated by space) to be scrambled.

#### Outcome
After clicking a “Redact Now” button, the app scans through the original text and replaces the specified words to be scrambled with asterisks (i.e ***)

#### Advanced features (if you are already chilling with the big boys)

* Allow the user specify what to use in replacing the words, so that they can decide to use asterisks, questions marks, dashes, underscores, or even other words
* Display some stats like how many words were scanned, how many matched the words to be scrambled, how many characters were scrambled in total, how long it took (in seconds) to complete the scrambling task e.t.c

### SchoolStat - A simple dashboard for a tech school

#### Scenario

You have data about which instructors are taking the courses in a school, as well as data about which students are in the frontend, backend or cloud tracks. Your users need to see some basic stats about the school

#### Outcome: 

When user opens your dashboard app, they see tables showing the following stats
* How many courses a given instructor is taking
* How many students are in each of the tracks (frontend, backend and cloud)
* How many students are male vs female
* Minimum, maximum, and average age of students in the school

#### Advanced features (if you are already chilling with the big boys)

* Make the tables sortable by (at least) the column holding the numbers

