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

## API

### Configuring Params
As I needed to send arrays of ingredient/category ids as params, there was not
a simple solution for parameterizing the arrays. URLSearchParams cannot 
serialize a javascript object with array values as it needs key/value string
pairs. I got what I needed by iterating over the id arrays and appending them
to the URLSearchParams object with the format below:

`params.append('ingredientIds[]', id.toString())`

This allowed the parameters to come through in the format I needed for Rails 
to digest them properly. 

`{"ingredientIds"=>["104", "42", "106", "105", "103", "45"], "categoryIds"=>["4", "3"], "sortOptionsId"=>"3"}`

### Fonts

@fortawesome/fontawesome-svg-core
@fortawesome/react-fontawesome
@fortawesome/free-solid-svg-icons
@fortawesome/free-regular-svg-icons

