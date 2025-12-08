import Header from "./components/tela-inicio/Header";
import Footer from "./components/tela-inicio/Footer";
import Content from "./components/tela-inicio/Content";
import Nav from "./components/tela-inicio/Nav";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Header />
            <Nav open={isOpen} onToggle={toggleNav} />
            <Content />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector(".corpo"));
root.render(<App />);
