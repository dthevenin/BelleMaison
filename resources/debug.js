var debug_proto = new Object ();

function debug_constructor (config)
{
  this.apply ('Application', '_constructor', config);
}
debug_proto._constructor = debug_constructor;

function debug_initSkin ()
{
  this.apply ('Application', 'initSkin');
  this.bind ('start', this, 'applicationStarted');
}
debug_proto.initSkin = debug_initSkin;

function debug_applicationStarted (event)
{
  // your code to execute when the application si launched
  
  this.goToPage ("resources/lime.drpc.demo/bml/startup")
}
debug_proto.applicationStarted = debug_applicationStarted;

function debug_notify (event)
{
  // your code to manage events
}
debug_proto.notify = debug_notify;

var debug = Class.create ('debug', debug_proto);
Class.extend ('debug', 'Application');
