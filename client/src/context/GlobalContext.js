import React from "react";

const GlobalContext = React.createContext({
	userObject: {},														
	setUserObject: function () {},
	token: "",
	setToken: function () {}
});

export default GlobalContext;

