$(document).ready(function () {
  $("#about-section").show();
  $("#skills-section").hide();
  $("#projects-section").hide();
  $("#contact-section").hide();

  $("#about-button").click(function () {
    $("#about-section").fadeIn();
    $("#skills-section").fadeOut();
    $("#projects-section").fadeOut();
    $("#contact-section").fadeOut();
  });
  $("#skill-button").click(function () {
    $("#about-section").fadeOut();
    $("#skills-section").fadeIn();
    $("#projects-section").fadeOut();
    $("#contact-section").fadeOut();
  });
  $("#project-button").click(function () {
    $("#about-section").fadeOut();
    $("#skills-section").fadeOut();
    $("#projects-section").fadeIn();
    $("#contact-section").fadeOut();
  });
  $("#contact-button").click(function () {
    $("#about-section").fadeOut();
    $("#skills-section").fadeOut();
    $("#projects-section").fadeOut();
    $("#contact-section").fadeIn();
  });
});
