# Video Image Analysis for Object Detection and Tracking
Capstone project for my final year at Swinburne University of Technology.
This project is a web-based application that enables users to upload videos containing fish, which are then analyzed using a machine-learning model for object detection and tracking. The system leverages the YOLOv8 algorithm to accurately detect and track fish within the video frames. Once processed, users can download the annotated video with bounding boxes highlighting detected fish. Additionally, the application provides statistical insights, such as fish count and movement patterns, derived from the analyzed footage. This tool aims to assist researchers, marine biologists, and fisheries in studying aquatic life efficiently.

The frontend of this application is built with React.js, while the backend uses Django. User authentication is included, with a login page for users.

## UML/Sequence Diagram
<img width="1408" alt="Screenshot 2025-02-09 at 5 18 39 AM" src="https://github.com/user-attachments/assets/eef29428-5bcd-4598-9e9b-dfe990dd4440" />


## Application
Landing page

https://github.com/RohanSoni-02/fish-detection-and-tracking/assets/110955425/19105c17-575d-4ac3-9fb1-97d587917d89

User authentication

https://github.com/RohanSoni-02/fish-detection-and-tracking/assets/110955425/35b1c2ad-c8a4-4f83-8884-8bb3cebdb4b7

Upload page

https://github.com/RohanSoni-02/fish-detection-and-tracking/assets/110955425/6af44d08-180e-4221-854c-7cd2bf512c52

User history and  Ml algorithm page

https://github.com/RohanSoni-02/fish-detection-and-tracking/assets/110955425/567ba76f-ff47-44a9-b4a0-2598c44be88f

### Presentation Video
This is a YouTube link that explains the system in detail.
https://www.youtube.com/watch?v=qmF8WcqDUOU

## Getting Started

### Prerequisites

- NodeJs
- Python
- Git

### Installing

1. Clone the repository to your local machine:

   `git clone https://github.com/capstoneproject28/fish-detection-and-tracking.git`

2. Navigate to the project directory:

   `cd fish-detection-and-tracking`

3. Build and run the Docker containers:

   `docker-compose up --build`

4. Once the command runs successfully, the application should be accessible at http://localhost:3000.

## Features

- User authentication: Users can create an account and log in.

- Video upload: Users can upload a video for analysis.

- Video analysis: Uploaded videos are processed by a machine learning model for object detection and tracking.

- Video download: Users can download the processed video with bounding boxes.

- Stats display: Statistics from the processed video are displayed to the user.

## Running the Tests

Detailed instructions for running the automated tests for this system are coming soon.

## Deployment

Instructions for how to deploy this application are coming soon.

## Built With

- React.js - The web framework used

- Django - The backend framework used

- Docker - Used for creating a consistent development and deployment environment

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## Authors

- Muhammad Abubakar
- Josh McEvoy
- Rohan Soni
- Adnan Zafar (103169535)
- Luke Valentino (103024456)
- Hammad Ahmed

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

- Swinburne University of Technology

- Central Queensland University
