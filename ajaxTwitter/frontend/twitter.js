const FollowToggle = require("./follow_toggle.js");

// trying to figure out what we passe into FollowToggle();
$( () => {
  $('.follow_toggle').each( function(idx, el) {
    const $followtoggle = new FollowToggle(el);
    });

});




window.FollowToggle = FollowToggle
