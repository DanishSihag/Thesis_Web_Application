function open_login(){
  window.open("file:///C:/Users/sihag/Documents/GitHub/Thesis_Web_Application/html_webpages/login_email.html","_top");
}

function expand_sidebar() {
  document.getElementById("collapsible_options").style.width = "210px";
  document.getElementById("collapsible_sidebar").style.marginLeft = "1075px";
}

function collapse_sidebar() {
  document.getElementById("collapsible_options").style.width = "0px";
  document.getElementById("collapsible_sidebar").style.marginLeft= "1150px";
}
