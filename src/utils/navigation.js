import { logError } from './errorLog';
var navigate = null;

export function setNavigation(objNavigation) { 
    navigate = objNavigation;
}

export function navigateScreen(url) {

    if(navigate) {

        navigate(url);

    } else {

        logError("Navigating to screen failed !. navigation is undefined in navigate.js");
    }
}