# NerdsFlix

# NerdsFlix
**NerdsFlix** is a web application that allows users to search for movies and TV shows, and add them to their watchlist. Users can also rate and review movies and TV shows, and view other users' reviews.

## Built With
* [Angular](https://angular.io/) - The web framework used
* [Angular Material](https://material.angular.io/) - UI component library


# Procces
 ## Initial Concept and Page Creation
The development process began with laying out the foundational structure of the web application. Recognizing the need for easy navigation, I decided to start by creating a homepage. This page serves as a central hub from which users can seamlessly navigate to different sections, including the main movies page.

## Data Integration
The next step involved importing movie data from a JSON file and effectively displaying this information on the movies page. This phase was crucial for ensuring that the core content - the movies - was presented in an organized and accessible manner.

## Sorting Functionality
After establishing the movie display, the focus shifted to enhancing the user experience through sorting functionality. Implementing the ability to sort movies by rating or name was integral in providing a more tailored and user-friendly browsing experience.

## Like Button Implementation
One of the more challenging aspects of the project was the introduction of a like button, which would appear when hovering over a movie poster. The initial implementation had the button directly overlaying the movie title, which was not ideal. After several iterations, I successfully repositioned the like button. However, a new issue emerged where the button was appearing on all movie posters simultaneously, contrary to the intended design.

## Refining the Hover Effect
To resolve this, I developed a solution where the hover effect for the like button was isolated to only the movie poster being pointed at. This required careful consideration of the user interface and interaction logic, ensuring that the like feature was intuitive and responsive to individual user interactions.

Final Outcome
The final outcome was a well-structured and user-friendly web application. Users can now easily navigate from the homepage to the movies section, enjoy a sorted view of movies, and interact with a like feature that is both visually appealing and functionally intuitive.
## Getting Started
1. clone repository or unzip file
2. npm install
3. ng serve 
