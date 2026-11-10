# dev-delta-ballard-1.0

## APP Identity
### Adding to Bravo Project
* **Project:** Amazing Travels

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
This site is a travel website designed for planning trips, showing many different destinations and itineraries of all sizes. I decided to build my website around travel and different trip ideas. I am starting with destinations within the US, with plans to expand internationally later.

Key features added:
* Added an image of the Great Smoky Mountains / Blue Ridge region.
* Implemented Bootstrap code to display different regions and cities across the US.
* Created modular JavaScript files handling sign-in authentication, user roles, session state, and dynamic rendering.
* Designed custom CSS to define the styling and visual layout of the web pages.

## Simple Test
* [x] The app currently includes a home page and a login page; users can view trip ideas loaded dynamically from JSON[cite: 1, 7]. 🧪
* [x] Can users find trips? ✅
* [x] The app works with session management, role-based rendering (Admin/User/Guest), and navigation[cite: 1, 4].

## Technology Stack
* **HTML:** Two primary HTML documents (`index.html` at the root and `pages/signin.html`).
* **JavaScript:** Modular JS files (`scripts/signin.js`, session state logic)[cite: 1, 4].
* **CSS & UI:** Bootstrap 5 framework combined with custom styles (`styles/style.css`)[cite: 1, 2].
* **Data Storage:** JSON data files (`data/destinations.json`, `data/users.json`) managed via `sessionStorage`[cite: 1, 4, 7, 8].

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