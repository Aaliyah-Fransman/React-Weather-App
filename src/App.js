import "./styles.css";
import { StrictMode } from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <footer>
          <p>
            This project was coded by
            <a href="https://github.com/Aaliyah-Fransman" target="_blank">
              Aaliyah Fransman
            </a>
            and is
            <a
              href="https://github.com/Aaliyah-Fransman/My-Weather-App-Project"
              target="_blank"
            >
              on GitHub
            </a>
            and
            <a href="https://theskycast.netlify.app/?#" target="_blank">
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
