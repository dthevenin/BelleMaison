main_view_proto = new Object ();


/**********************************************
 * 
 **********************************************/
function main_view_initSkin ()
{
  this.apply ("ABView", "initSkin");

  this.firstButton.setNavigationDelegate (this);
  this.secondButton.setNavigationDelegate (this);
}
main_view_proto.initSkin = main_view_initSkin;


/**********************************************
 * 
 **********************************************/
function main_view_show ()
{
  this.apply ("ABView", "show");
  
  this.firstButton.setFocus ();
}
main_view_proto.show = main_view_show;


/**********************************************
 * 
 **********************************************/
function main_view_onActive (obj)
{
// this.propagate ('menuActive');
}
main_view_proto.onActive = main_view_onActive;


/**********************************************
 * 
 **********************************************/
function main_view_onUp (obj)
{
  this._onBlur ();
  this.propagate ('menuActive');
}
main_view_proto.onUp = main_view_onUp;



function main_view_notify (event)
{
 
}
main_view_proto.notify = main_view_notify;
