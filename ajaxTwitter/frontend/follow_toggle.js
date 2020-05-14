class FollowToggle {
    // what is el in this case? a user?
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        
    }
};

FollowToggle.prototype.render = function() { //text here refers to button or do we need add a text key?
    //we just have to reassign this.followState
  if (this.followState === "unfollowed") {
    this.followState = "followed";
  } else {
    this.followState = "unfollowed";
  };
};

FollowToggle.prototype.handleClick = function () {
  $.ajax({
    // e.presentdefault
    // 
    if (this.followState === 'followed') {  
      type: 'DELETE',
      url: '/users/:id/follow',
    } else {
      type: 'POST',
      url: '/users/:id/follow',
    };
  }) 
};



module.exports = FollowToggle