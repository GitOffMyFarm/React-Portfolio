import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import { useState } from 'react';

const App = () => {
  const [projects] = useState([
    {
      title: "Recipe Box",
      deployed: "https://gitoffmyfarm.github.io/Recipe-Box/",
      image: "/images/RecipeBoxImage.png",
      description: "An app used to search for recipes and save the ones you love the most. Heavy use of API's and local storage, currently only deployed in Github pages.",
      gitHubLink: "https://github.com/GitOffMyFarm/Recipe-Box"
    },
    {
      title: "Triply",
      deployed: "https://polar-spire-28260.herokuapp.com/",
      image: "/images/triply.png",
      description: "A Minimalist travel app for those looking to get away and explore some of the smaller cities in America on a budget.",
      gitHubLink: "https://github.com/GitOffMyFarm/Escape-Array"
    },
    {
      title: "Password Generator",
      deployed: "https://gitoffmyfarm.github.io/Password-Generator/",
      image: "/images/PasswordGenerator.png",
      description: "A password generator made to meet a variety of password requirements, utilizes checkboxes in HTML and innerText to convey error messages rather than alerts.",
      gitHubLink: "https://github.com/GitOffMyFarm/Password-Generator"
    },
    {
      title: "Team Profile Generator",
      deployed: "https://drive.google.com/file/d/1I8yGlXU2c7xd2mSwAVAwOgrwyZU9DCJW/view",
      image: "/images/generator.PNG",
      description: "Console application using inquirer to obtain information about a work team before generator a html page with all that information displayed.",
      gitHubLink: "https://github.com/GitOffMyFarm/Profile-Generator"
    }
  ])

  return (
    <div className="App">
      <Header />
      <About />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
