var firstSectionLoaded = new Boolean(false);
var secondSectionLoaded = new Boolean(false);
var thirdSectionLoaded = new Boolean(false);
var fourthSectionLoaded = new Boolean(false);

var animEnded = new Boolean(false);

jQuery(document).ready(function($){
  $("#fullpage").fullpage({
    sectionsColor:['black','white','black','white'],
    anchors:['homeAnchor','aboutAnchor','projectsAnchor','contactsAnchor'],
    parallax: true,
    cards:true,
    afterLoad:function(link, index){
// HOME PAGE
      if (index.index == 0) {
        if (firstSectionLoaded==false) {
          setTimeout(function(){
            document.getElementById('firstText').style.display="block";
            document.getElementById('itText').style.display="block";
          },250);
          setTimeout(function(){
            document.getElementById('firstText').setAttribute('id', 'firstTextOut');
          },1250);
          setTimeout(function(){
            document.getElementById('secondText').style.display="block";
            document.getElementById('firstTextOut').style.display="none";
          },1650);
          setTimeout(function(){
            document.getElementById('secondText').setAttribute('id', 'secondTextOut');
          },2650);
          setTimeout(function(){
            document.getElementById('thirdText').style.display="block";
            document.getElementById('secondTextOut').style.display="none";
          },3050);
          setTimeout(function(){
            document.getElementById('thirdText').setAttribute('id', 'thirdTextOut');
          },4050);
          setTimeout(function(){
            document.getElementById('nameText').style.display="block";
            document.getElementById('thirdTextOut').style.display="none";
          },4450);
          setTimeout(function(){
            document.getElementById('itText').setAttribute('id', 'itTextOut');
          },5450);
          setTimeout(function(){
            document.getElementById('logoImg').style.display="block";
            document.getElementById('itTextOut').style.display="none";
            document.getElementById('logoWhiteHome').style.display="block";
            document.getElementById('logoTextHome').style.display="block";
            document.getElementById('arrowDown').style.display="block";
            setInterval(function(){arrowLoop()}, 1500);
          },5850);
          firstSectionLoaded = true;
        }
      }

// ABOUT US PAGE
      if (index.index == 1) {
        if (secondSectionLoaded==false) {
          setTimeout(function(){
            document.getElementById('aboutText').style.display="block";
            document.getElementById('usAboutText').style.display="block";
          },0);
          setTimeout(function(){
            document.getElementById('strokeTopBottomAbout').style.width="100%";
          },1000);
          setTimeout(function(){
            var list = document.getElementsByClassName('topAbout');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="100%";}
            var list = document.getElementsByClassName('bottomAbout');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="100%";}
          },2000);
          setTimeout(function(){
            document.getElementById('topAboutImage').style.gridRow="2/4";
            document.getElementById('topAboutTextCont').style.gridRow="2/4";
            var list = document.getElementsByClassName('topBottomAboutText');
            for (var i = 0; i < list.length; i++){
              list[i].style.display="block";}
            document.getElementById('bottomAboutImg').style.display="block";
            document.getElementById('topAboutImg').style.display="block";
            var list = document.getElementsByClassName('topAbout');
            for (var i = 0; i < list.length; i++){
              list[i].style.alignSelf="start";}
            var list = document.getElementsByClassName('bottomAbout');
            for (var i = 0; i < list.length; i++){
              list[i].style.alignSelf="end";}
            document.getElementById('aboutText').style.display="none";
            document.getElementById('usAboutText').style.display="none";
            document.getElementById('strokeTopBottomAbout').style.width="0%";
          },3000);
          setTimeout(function(){
            var list = document.getElementsByClassName('topAbout');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="0%";}
            var list = document.getElementsByClassName('bottomAbout');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="0%";}
          },4250);
          secondSectionLoaded = true;
        }
      }

// OUR PROJECTS PAGE
      if (index.index == 2) {
        if (thirdSectionLoaded == false) {
          setTimeout(function(){
            document.getElementById('ourText').style.display="block";
            document.getElementById('projectsText').style.display="block";
          },0);
          setTimeout(function(){
            document.getElementById('strokeTopBottomProjects').style.width="100%";
          },1000);
          setTimeout(function(){
            var list = document.getElementsByClassName('topProjects');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="100%";}
            var list = document.getElementsByClassName('bottomProjects');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="100%";}
            document.getElementById('topProjectsStroke').style.height="100%";
            document.getElementById('bottomProjectsStroke').style.height="100%";
          },2000);
          setTimeout(function(){
            var list = document.getElementsByClassName('projectsContToggle');
            for (var i = 0; i < list.length; i++){
              list[i].style.display="block";}
            document.getElementById('topLeftProjectsCont').style.gridRow="2/4";
            document.getElementById('topRightProjectsCont').style.gridRow="2/4";
            document.getElementById('topProjectsStroke').style.gridRow="2/4";
            var list = document.getElementsByClassName('topProjects');
            for (var i = 0; i < list.length; i++){
              list[i].style.alignSelf="start";}
            var list = document.getElementsByClassName('bottomProjects');
            for (var i = 0; i < list.length; i++){
              list[i].style.alignSelf="end";}
            document.getElementById('topProjectsStroke').style.alignSelf="start";
            document.getElementById('bottomProjectsStroke').style.alignSelf="end";
            document.getElementById('ourText').style.display="none";
            document.getElementById('projectsText').style.display="none";
            document.getElementById('strokeTopBottomProjects').style.width="0%";
          },3000);
          setTimeout(function(){
            document.getElementById('topProjectsStroke').style.height="0%";
            document.getElementById('bottomProjectsStroke').style.height="0%";
            var list = document.getElementsByClassName('topProjects');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="0%";}
            var list = document.getElementsByClassName('bottomProjects');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="0%";}
          },4250);
          setTimeout(function(){
            if (animEnded == false) {
              document.getElementById('hoverNotifyProject').style.display="block";
            }
          },7250);
          thirdSectionLoaded=true;
        }
      }

// CONTACT US PAGE
      if (index.index == 3) {
        if (fourthSectionLoaded == false) {
          setTimeout(function(){
            document.getElementById('contactText').style.display="block";
            document.getElementById('usContactText').style.display="block";
          },0);
          setTimeout(function(){
            document.getElementById('strokeContact').style.width="100%";
          },1000);
          setTimeout(function(){
            var list = document.getElementsByClassName('topContact');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="100%";}
            var list = document.getElementsByClassName('bottomContact');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="100%";}
          },2000);
          setTimeout(function(){
            document.getElementById('topContact').style.gridRow="2/4";
            var list = document.getElementsByClassName('topContact');
            for (var i = 0; i < list.length; i++){
              list[i].style.alignSelf="start";}
            var list = document.getElementsByClassName('bottomContact');
            for (var i = 0; i < list.length; i++){
              list[i].style.alignSelf="end";}
            document.getElementById('contactText').style.display="none";
            document.getElementById('usContactText').style.display="none";
            document.getElementById('strokeContact').style.width="0%";
            document.getElementById('formCont').style.display="block";
          },3000);
          setTimeout(function(){
            var list = document.getElementsByClassName('topContact');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="0%";}
            var list = document.getElementsByClassName('bottomContact');
            for (var i = 0; i < list.length; i++){
              list[i].style.height="0%";}
            document.getElementById('footer').style.display="block";
          },4250);

          fourthSectionLoaded = true;
        }
      }
    },
  });
});

function arrowLoop(){
  setTimeout(function(){
    if (document.getElementById('arrowDown')!=null) {
      document.getElementById('arrowDown').style.display="block";
    }
    else if (document.getElementById('arrowDown')==null){
      document.getElementById('arrowDownOut').setAttribute('id', 'arrowDown');
      document.getElementById('arrowDown').style.display="block";
    }
  },500);
  setTimeout(function(){
    if (document.getElementById('arrowDown')!=null) {
    document.getElementById('arrowDown').setAttribute('id', 'arrowDownOut');
  }
  },1500);
}

function learnMoreOn(object) {
  //if (animEnded == false) {
    var child = object.children;
    child[0].style.width = "80%";
    child[1].children[0].setAttribute('id', 'projectName');
    child[1].children[0].style.display = "block";
    child[2].children[0].setAttribute('id', 'textProject');
    child[2].children[0].style.display = "block";
    //document.getElementById('hoverNotifyProject').style.display="none";
    document.getElementById('hoverNotifyProject').setAttribute('id', 'hoverNotifyProjectOut');
    //child[3].children[0].setAttribute('id', 'textOffProject');
    //child[3].children[0].style.display = "block";
    animEnded = true;
  //}
}


/* CLOSE BUTTON
function learnMoreOff(object) {
  if (animEnded == true) {
    var child = object.children;
    child[0].style.width = "0%";
    child[1].children[0].setAttribute('id', 'projectNameOut');
    child[2].children[0].setAttribute('id', 'textProjectOut');
    child[3].children[0].setAttribute('id', 'textOffProjectOut');
    setTimeout(function(){
      animEnded = false;
    },1000);
  }
}*/
function submit() {
  Console.Log("sad");
}




















//
