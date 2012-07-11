fp_one_view_proto = new Object ();

function fp_one_view_initSkin ()
{
  this.apply ("ABView", "initSkin");
  this.fpOneMenu.bind ('menu', this);
}
fp_one_view_proto.initSkin = fp_one_view_initSkin;

function fp_one_view_show ()
{
  __setSize (this.view, 960, 540);

  this.apply ("ABView", "show");
  
  this.fpOneMenu.show ();
}
fp_one_view_proto.show = fp_one_view_show;

function fp_one_view_hide ()
{
  this.apply ("ABView", "hide");
  __setSize (this.view, 0, 0);
}
fp_one_view_proto.hide = fp_one_view_hide;

function fp_one_view_notify (event)
{
  this.propagate (event.type, event.data);
}
fp_one_view_proto.notify = fp_one_view_notify;
