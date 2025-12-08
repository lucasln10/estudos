import React from "react";
import "./Content.css";
import { Produtos } from "../produtos/Produtos";

export const Content = () => {
    return (
        <div className="content">
            <h2>Main Content Area</h2>
            <p>Navegue pela barra lateral clicando no hamburger.</p>
            <Produtos />
        </div>
    );
};

export default Content;