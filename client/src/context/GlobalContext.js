import React from "react";

const GlobalContext = React.createContext({
	jsonWebToken: "",														// will be set later
	setJsonWebToken: function () {}							// this callback will be set later
});

export default GlobalContext;

