## CONFIGURATION

### Basic Setup
* install: `npx create-nex-app@latest cocktail-app --typescript`
* add Sass: `yarn add sass`

## NEXT CONCEPTS

### _APP.TSX
This is where the current page component is rendered, plus any global styles
and layout components (navbar, footer, etc...). The Component component 
renders the current page (home, /about, /contact, etc.) and receives the 
pageProps. These are whatever is instantiated with getInitialProps in that
page's component.

### INDEX.TSX
This is the root/home page component. 