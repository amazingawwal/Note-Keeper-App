import React from "react";

const date = new Date();
const getDate = date.getFullYear();

function Footer (){
    return <footer>
        <p>
        Copyright Awwal {getDate}
        </p>
    </footer>;
};

export default Footer;