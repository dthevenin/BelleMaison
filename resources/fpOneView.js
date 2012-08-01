var belle_maison_fp_one_view_proto = new Object ();

function fp_one_menu_initSkin ()
{
  this.apply ("ABView", "initSkin");

  this.firstButton.setNavigationDelegate (this);
  this.secondButton.setNavigationDelegate (this);
  this.backButton.setNavigationDelegate (this);
 }
belle_maison_fp_one_view_proto.initSkin = fp_one_menu_initSkin;

function fp_one_menu_setFocus (event)
{
  this.fpOneButton.setFocus ();
}
belle_maison_fp_one_view_proto.setFocus = fp_one_menu_setFocus;

function fp_one_menu_show ()
{
  this.apply ("ABView", "show");
 __setPos (this.view, 0, 0);
  
  this.firstButton.setFocus ();
}
belle_maison_fp_one_view_proto.show = fp_one_menu_show;

function fp_one_menu_hide ()
{
  this.apply ("ABView", "hide");
 __setPos (this.view, 960, 0);
}
belle_maison_fp_one_view_proto.hide = fp_one_menu_hide;

function fp_one_menu_onActive (obj)
{
 // if (obj == this.fpOneButton)
  if (obj == this.backButton)
  {
    this.propagate ('menu');
  }
}
belle_maison_fp_one_view_proto.onActive = fp_one_menu_onActive;

function fp_one_menu_notify (event)
{
}
belle_maison_fp_one_view_proto.notify = fp_one_menu_notify;
