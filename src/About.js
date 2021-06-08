/* File contains AboutPage componenet. The component can be called
   using <AboutPage/>.
*/
import React from 'react';
import './App.css';


function AboutPage() {
    /* This component renders the about page.
    */
    return (
        <div>
            <h1 className="display-2" id="aboutHeader">About Us</h1>
            
            <p id="aboutContent"> Our website is a video game recommendation engine. Where users can type in their favorite games into the search bar, they will be given
            up to four new video game recommendations! Addtionally, users can click on the results to learn more about each game and a link to the game's subreddit.
                    Try searching for games like Breath of the Wild, Forza, or Battlefield 5.</p>  
            
                      
        </div>
    );
}


export default AboutPage;

export { AboutPage };