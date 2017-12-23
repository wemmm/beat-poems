# Beat Poems
## Assemble a terrible poem in React.js

### What is this?

I feel like I'm getting into React now so instead of generic calculators and todo lists here's something considerably worse. I had an interesting time mucking about with JSON in [walnut](https://github.com/wemmm/walnut) so I've written up some mock lines of (beat) poetry as a JSON file to see if I can get a poem assembler going.

I've also never web deployed a React app so that should be fun/painful/a great learning experience.

### _What?_

From [The Poetry Foundation](https://www.poetryfoundation.org/learn/glossary-terms/beat-poets):

> A national group of poets who emerged from San Francisco’s literary counterculture in the 1950s. Its ranks included Allen Ginsberg, Lawrence Ferlinghetti, Gregory Corso, and Gary Snyder. Poet and essayist Kenneth Rexroth influenced the development of the “Beat” aesthetic, which rejected academic formalism and the materialism and conformity of the American middle class. Beat poetry is largely free verse, often surrealistic, and influenced by the cadences of jazz, as well by Zen and Native American spirituality.

So some of the lines in ```lines.json``` are inspired by Ginsberg, [Whalen](https://www.poetryfoundation.org/poets/philip-whalen), etc. etc. and some of them are weird parodies of my own creation.

### Tech

* React.js
* JavaScript (ES6)
* create-react-app

### Structure

The App component renders a header and a Poem component, and the Poem component renders three different Line components that it grabs out of the JSON file. 
