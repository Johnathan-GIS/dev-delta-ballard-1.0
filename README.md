# dev-delta-ballard-1.0

## APP Identity
### Adding to Bravo Project
* **Project:** Amazing Travels
* Project Dev Bravo Amazing Travels
CIS 376 Web Development
Amazing Travels site
With travel trip plans 

## Authorship + Version
* **Author:** Johnathan Ballard
* **Version:** 3.0
* **Project:** Dev Bravo Amazing Travels
* **Course:** CIS 376 Web Development
* **Site:** Amazing Travels site (with trip plans)
* **Date:** 11/09/2026

## User Story
* **As a user**, this website has given me great ideas for traveling.
* **I want to** be able to see more places and have tours in the future.
* **So I can** explore more places and get a better travel experience.

## Narrative
This site is a travel website planning trips and showing many different trips and itineraries of all sizes.
I decided to make my website about traveling and different trips. I am starting within the US but might expand.
I added an image of the Great Smoky Mountains. 
I added Bootstrap code for different regions around the US with different cities.
I created two JavaScript files that have the login button and code to reach the home page
I created with the css the style and colors of my web pages.
This site is a travel website designed for planning trips, showing many different destinations and itineraries of all sizes. I decided to build my website around travel and different trip ideas. I am starting with destinations within the US, with plans to expand internationally later.

Key features added:
* Added an image of the Great Smoky Mountains / Blue Ridge region.
* Implemented Bootstrap code to display different regions and cities across the US.
* Created modular JavaScript files handling sign-in authentication, user roles, session state, and dynamic rendering.
* Designed custom CSS to define the styling and visual layout of the web pages.

## Simple Test
- [ The app so far has a home page and a login page
- The user can only view a couple of trip ideas;] 🧪 
- [ Can users find trips] ✅
- [The App works but has low functionality
- It can only take users to the main page and login] ❌
# Technology Stack
I created two HTML documents: one with HTML and a second with a login
I created two JavaScript files for the homepage and one for the login 
I created two CSS files: one for the home page and login
I originally made a blank home page with a login page that went to a private page but ended up creating more of a home page and login page
The reveal
* [x] The app currently includes a home page and a login page; users can view trip ideas loaded dynamically from JSON[cite: 1, 7]. 🧪
* [x] Can users find trips? ✅
* [x] The app works with session management, role-based rendering (Admin/User/Guest), and navigation[cite: 1, 4].

## Technology Stack
* **HTML:** Two primary HTML documents (`index.html` at the root and `pages/signin.html`).
* **JavaScript:** Modular JS files (`scripts/signin.js`, session state logic)[cite: 1, 4].
* **CSS & UI:** Bootstrap 5 framework combined with custom styles (`styles/style.css`)[cite: 1, 2].
* **Data Storage:** JSON data files (`data/destinations.json`, `data/users.json`) managed via `sessionStorage`[cite: 1, 4, 7, 8].

# Validation + accessibility 
The private page still ended up not turning out because I mixed up the three html pages
It only rotates between the home page and the login page. 
The image shows it is added but stopped showing after publishing.
There has been a sign in added 
new nav bar and content cards showing cool places and with links. 

# Attribution 
I began with some of the instructor's code and met with the instructor
I got the image from a Google image search
I used some code from a Reddit computer community but modified it and ended up deciding not to use it
I have had a few tutors and two friends help me
I used AI Gemi to help me fix my code and to help with features that were missing
I used w3schools to help get code for my project
I used bootstrap to get my project looking and working better
I used Google to help with the code, which I used for the code setup my code  but modified heavily and completely changed the topic
I also used the Bootstrap website  for Bootstrap style but made many changes and modified it
I used a online tutor with voice to help me look over the guidelines and to get my app to work nothing would run properly before 


## Project Structure
```text
new-dev-ballard/
├── data/
│   ├── destinations.json   # Destination records
│   └── users.json          # Authentication credentials
├── images/                 # App imagery & assets
├── pages/
│   └── signin.html         # Sign in & registration page
├── scripts/
│   ├── private-signin.js   # Route protection script
│   └── signin.js           # Authentication & registration logic
├── styles/
│   └── style.css           # Custom stylesheets
├── index.html              # Homepage & main dashboard
└── README.md               # Project documentation

STATIC JSON ──fetch()──┐
                       │
AUTH (Credentials) ────┼──→ APP STATE object ──→ sessionStorage ──→ DOM Rendering
                       │           ↑
USER CRUD (Inputs) ────┘

