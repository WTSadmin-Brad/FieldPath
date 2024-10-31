FieldPath
FieldPath is a Progressive Web App (PWA) designed to support fieldwork teams in marking and tracking completed road sections and zones. Built with offline functionality, FieldPath allows teams to view maps, annotate hazards, and track completed routes, making it ideal for use in disaster areas or regions with limited connectivity.

Table of Contents
Features
Installation
Usage
Development Status
Contributing
License
Features
Map Marking: Select and color-code road sections as completed or in progress.
Hazard Annotations: Add icons for common hazards (e.g., low power lines, major obstructions).
Offline Support: Works without an internet connection, allowing team members to update the map offline.
Progress Heatmap: Visual overview of completed areas.
Weather Overlay: Real-time weather updates and storm alerts for next-day planning.
Admin Controls: Admin access for zone setup and data export functionality.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/FieldPath.git
cd FieldPath
Open the Project:

Open the index.html file in your browser (for local testing).
If deploying, set up a simple web server to host the files, ensuring the PWA and service worker load correctly.
Install as a PWA on iOS and Android:

iOS: Open the URL in Safari, tap the Share icon, and select Add to Home Screen.
Android: Open the URL in Chrome, tap the menu (three dots), and select Add to Home Screen.
Usage
Map Navigation: Use touch to drag and zoom into specific work zones.
Mark Roads: Tap and drag to select road sections and color them as completed.
Add Annotations: Tap to add hazard icons for obstacles or notes.
Admin Access: Login with admin credentials for additional options like setting zones and exporting data.
Development Status
Note: FieldPath is currently in testing phase. While the core functionalities are operational, additional features and improvements are in progress. This repository is open for feedback and contributions.

Contributing
Contributions are welcome! If you would like to contribute:

Fork the repository.
Create a new branch for your feature (git checkout -b feature-branch).
Commit your changes and push to your fork.
Submit a pull request.
License
This project is licensed under the MIT License.