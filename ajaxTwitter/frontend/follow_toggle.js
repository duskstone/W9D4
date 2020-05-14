class FollowToggle {
    // what is el in this case? a user?
    constructor(el) {
        debugger;
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        

    }
}

module.exports = FollowToggle