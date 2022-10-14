function open_login(){
  window.open("file:///C:/Users/sihag/Documents/GitHub/Thesis_Web_Application/html_webpages/login_email.html","_top");
}

function expand_sidebar() {
  document.getElementById("collapsible_options").style.width = "13.125rem";
  document.getElementById("collapsible_sidebar").style.marginLeft = "67.188rem";
}

function collapse_sidebar() {
  document.getElementById("collapsible_options").style.width = "0rem";
  document.getElementById("collapsible_sidebar").style.marginLeft= "71.875rem";
}
