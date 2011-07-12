Royalty
====

Code like a king.
---

This is a project skeleton optimized for developer happiness, speed, and
luxury. Just like a Ferrari, or a silken royal purple cape.

### What is it like to be royalty?

- Your CSS changes show themselves in the browser immediately — no more
  refreshing!
- Your server-side js modifications cause the server to restart — never
  alt-tab to your command line and ^C again!
- Make calls to your server-side js using Now.js — no need to write ajax
  routes!

#### Summary
- vogue reloads your css on change
- node-dev reruns your server on change
- never write AJAX routes again with Now.js

### Getting started

Copy and paste these commands into your terminal:

    git clone git://github.com/DTrejo/royalty.git
    cd royalty
    npm install .

    #
    # At your service.
    #
    ./runserver
    ./reloadcss

    # see it in action
    open http://localhost:8000/


#### For extreme luxury:
Visit http://growl.info/, download disk image, then Extras > growlnotify >
open growlnotify.pkg


#### For Later

- add stylus support: at the moment, the stylus middleware waits lazily
  recompiles when it recieves a request. This does not work well with the
  push-oriented dev style of vogue. Sticking with css for now, will write some
  kind of watcher script if CSS turns out to be a headache.
- use browserify. Not using it at the moment cause it's a bit complicated.
