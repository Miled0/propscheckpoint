import './App.css';
import PropTypes from "prop-types";
import Profile from "./profile/Comp"

function App() {
  const handleName=name=>alert(name); 
  let bio="Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride,suisse et de double nationalité helvético-américaine. Il épousa Mileva Marić, puis sa cousine Elsa Einstein."

  return (
    <div className="App" style={{padding:"20px"}}>
      <Profile func={handleName} Fullname="Albert Einstein" profession="Physicien théoricien" bio={bio}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGLpbMAO0xANaQaSsaKsslvp8gTELP9o387sTEHx2oXwHF0IgDOT0O6zW0bH8f5Pt90I&usqp=CAU" /></Profile>

    </div>
  );
}

export default App;
