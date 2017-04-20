This project was bootstrapped with [Create Inferno App](https://github.com/infernojs/create-inferno-app).

This project demonstrates a fatal error that results in crashing the React Devtools when a node has as its children only an empty string.

Reproduce error w/ Inferno 3.0.5 and React Devtools in Chrome
`yarn start`, open the devtools, click the **React** tab to make the inferno-devtools spin through, note the errors in the Console. Turning
on **Pause on Exceptions** in the debugger shows the problem a few stack frames up.