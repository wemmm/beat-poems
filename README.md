# Beat Poems
## Assemble a terrible poem in React.js

### What is this?

I feel like I'm getting into React now so instead of generic calculators and todo lists here's something considerably worse. I had an interesting time mucking about with JSON in [walnut](https://github.com/wemmm/walnut) so I've written up some mock lines of (beat) poetry as a JSON file to see if I can get a poem assembler going.

Now with web deployment!

### _What?_

From [The Poetry Foundation](https://www.poetryfoundation.org/learn/glossary-terms/beat-poets):

> A national group of poets who emerged from San Francisco’s literary counterculture in the 1950s. Its ranks included Allen Ginsberg, Lawrence Ferlinghetti, Gregory Corso, and Gary Snyder. Poet and essayist Kenneth Rexroth influenced the development of the “Beat” aesthetic, which rejected academic formalism and the materialism and conformity of the American middle class. Beat poetry is largely free verse, often surrealistic, and influenced by the cadences of jazz, as well by Zen and Native American spirituality.

So some of the lines in ```lines.json``` are inspired by [Ginsberg](https://en.wikipedia.org/wiki/Allen_Ginsberg), [Whalen](https://www.poetryfoundation.org/poets/philip-whalen), [Snyder](https://en.wikipedia.org/wiki/Gary_Snyder) etc. etc. and some of them are weird parodies of my own creation. There's also something a bit [Grim Fandango](https://www.youtube.com/watch?v=8RBEA7Y7EQA) about it.

A proper bibliography is [here](https://github.com/wemmm/beat-poems/blob/master/bibliography.md).

### Tech

* React.js
* JavaScript (ES6)
* create-react-app & heroku buildpack
* react-icons
* react-social-share-buttons
* Enzyme for testing

### Structure

The App component renders a header and a Poem component, and the Poem component renders three different Line components that it grabs out of the JSON file. Poems can be reshuffled entirely or line-by-line. The lock buttons will stop a line from changing until the lock is toggled back off.

You can tweet your finished poem with the Twitter button! Impress strangers with your deep and meaningful verse!

### User Stories

```
As a user,
So I can make a poem,
I would like to shuffle lines.
```

```
As a user,
So I have finer control of my poem,
I would like to be able to shuffle an individual line.
```

```
As a user,
So I can retain lines that I am fond of,
I would like to be able to toggle locks on particular lines.
```

```
As a user,
So I can easily see the status of lines,
I would like to quickly see which lines are locked.
```

```
As a user,
So I can enjoy lots and lots of strange poems,
I would like to shuffle lots and lots of lines.
```

```
As a sociable user,
So other people can enjoy my intriguing poetry,
I would like to be able to tweet my results.
```

### TODOs:

* Add more potential lines of poetry
* Styling

![screenshot](https://github.com/wemmm/beat-poems/blob/master/poems.png)
