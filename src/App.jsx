import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import NavBarComponent from "./components/NavBarComponent";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <header className="App-header">
        <div className="container mt-3">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="display-1">My First React App</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <br />
          <ButtonComponent className="btn btn-success mt-3" btnText="Click me" />

          <ImageComponent
            style={{ height: "500px" }}
            className="w-100 mt-5 object-fit-cover"
            src="https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Grande Muraglia di Jinshanling, città di Chengde, Cina"
          />

          <div className="row row-cols-lg-4 mt-5">
            <div className="col">
              <CardComponent
                cardTitle="Jinshanling Wall"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                btnText="Go somewhere"
                src="https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>

            <div className="col">
              <CardComponent
                cardTitle="Shinjuku City, Tokyo, Japan"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                btnText="Go somewhere"
                src="https://images.unsplash.com/photo-1718968062028-54ca24f65bd2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>

            <div className="col">
              <CardComponent
                cardTitle="Blue Mesa Trailhead, Arizona"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                btnText="Go somewhere"
                src="https://images.unsplash.com/photo-1718886057155-3b17eb63cf1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>

            <div className="col">
              <CardComponent
                cardTitle="Kyoto, Japan"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                btnText="Go somewhere"
                src="https://images.unsplash.com/photo-1718928154205-711c805ec728?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
