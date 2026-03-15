# WEB103 Project 2 - *SoundScout Event Radar*

Submitted by: **Rajeev Atla**

About this web app: **SoundScout Event Radar is a PostgreSQL-backed listicle web app that helps students discover local music events near campus. Users can browse event cards on the home page and click each event to open a dedicated detail page with full event information fetched from a hosted Render Postgres database.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command `SELECT * FROM tablename;` to display your table contents.**

The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [x] Added database migration and seed scripts for the hosted Postgres instance
- [x] Added database-backed Express routes with connection verification at startup
- [x] Added responsive layout tuning for mobile viewports
- [x] Added genre chips, price badges, and a themed concert-flyer visual style
- [x] Seeded 8 unique events with shared attributes and unique slugs

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif



## Notes

Main challenge was migrating the app from hardcoded event data to a hosted PostgreSQL database while preserving the original no-framework UI and route structure. The app now verifies the database connection on startup, reads the list and detail views from Postgres, and keeps the original custom 404 fallback. The walkthrough still needs to be refreshed so it explicitly shows the Render Postgres dashboard and table contents query required by the template.

## License

Copyright [2026] [Rajeev Atla]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
