// Created by iWeb 3.0.4 local-build-20140930

function createMediaStream_id3()
{return IWCreatePhotocast("http://www.qsosurvey.org/Quasars_Probing_Quasars/Participants_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.qsosurvey.org/Quasars_Probing_Quasars',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.qsosurvey.org/Quasars_Probing_Quasars',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(4,new IWSize(125,125),new IWSize(125,32),new IWSize(153,172),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Participants_files/ParticipantsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
