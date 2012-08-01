var belle_maison_main_menu_proto = new Object ();

function belle_maison_mainMenu_initSkin ()
{
  this.apply ("ABView", "initSkin");
  
  this.fpOneButton.setNavigationDelegate (this);
  this.fpTwoButton.setNavigationDelegate (this);
  this.homeBaseButton.setNavigationDelegate (this);
}
belle_maison_main_menu_proto.initSkin = belle_maison_mainMenu_initSkin;

function belle_maison_mainMenu_show ()
{
  this.apply ("ABView", "show");
  __setPos (this.view, 0, 0);
  
  this.fpOneButton.setFocus ();
}
belle_maison_main_menu_proto.show = belle_maison_mainMenu_show;

function belle_maison_mainMenu_hide ()
{
  this.apply ("ABView", "hide");
  __setPos (this.view, 960, 0);
}
belle_maison_main_menu_proto.hide = belle_maison_mainMenu_hide;

function belle_maison_mainMenu_onActive (obj)
{
  if (obj == this.fpOneButton)
  { this.propagate ('mainMenuSelect', 1); }
  else if (obj == this.fpTwoButton)
  { this.propagate ('mainMenuSelect', 2); }
  else if (obj == this.homeBaseButton)
  { this.propagate ('mainMenuSelect', 3); }
}
belle_maison_main_menu_proto.onActive = belle_maison_mainMenu_onActive;

function belle_maison_mainMenu_notify (event)
{
}
belle_maison_main_menu_proto.notify = belle_maison_mainMenu_notify;
