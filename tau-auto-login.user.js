// ==UserScript==
// @name         TAU Auto Login
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto login for TAU portal, handling dynamic content
// @match        https://nidp.tau.ac.il/nidp/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- Your Credentials ---
    const username = 'username'; // Replace with your username
    const userID = '123456789'; // Replace with your ID
    const password = 'password'; // Replace with your password

    function setInputValue(element, value) {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeInputValueSetter.call(element, value);

        const inputEvent = new Event('input', { bubbles: true });
        element.dispatchEvent(inputEvent);
    }

    function fillLoginForm() {
        const usernameField = document.getElementById('Ecom_User_ID');
        const userIDField = document.getElementById('Ecom_User_Pid');
        const passwordField = document.getElementById('Ecom_Password');
        const loginButton = document.getElementById('loginButton');

        if (usernameField && userIDField && passwordField && loginButton) {
            console.log("Filling login fields...");
            setInputValue(usernameField, username);
            setInputValue(userIDField, userID);
            setInputValue(passwordField, password);

            setTimeout(() => {
                loginButton.click();
            }, 500);

            return true;
        }

        console.log("Login fields not yet available...");
        return false;
    }

    const observer = new MutationObserver(() => {
        if (fillLoginForm()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('load', () => {
        setTimeout(() => fillLoginForm(), 1000);
    });
})();
