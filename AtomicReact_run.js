var Atomic = require('atomicreact').Atomic;
var AtomicHotReload = require('atomicreact').HotReload;

/* initialize HotReload */
var myHotReload = new AtomicHotReload(1337, 'localhost'); //initialize HotReload on localhost:1337

/* initialize Atomic */
var myAtomic = new Atomic(require('./AtomicReact_config.js'), myHotReload); //initialize Atomic using HotReload
myAtomic.isRunning();

/* Listen all changes in custom files */
myHotReload.addToWatch(require('path').join(__dirname, 'src/view'));
myHotReload.addToWatch(require('path').join(__dirname, 'src/public/asset'));
