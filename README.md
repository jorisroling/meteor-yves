Meteor implementation of [yves](https://github.com/jorisroling/yves)

Implements **yves(anything)** on server and client.

Also registeres a template helper so that ```{{{yves this}}}``` will show
and eye icon, that toggles a box with the pretty printed content.

As a debug aid, you can also use an extra __host pattern__ like ```{{{yves this "localhost"}}}```
