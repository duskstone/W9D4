class FollowToggle {
    constructor(el) {
        this.userId = el.user-id;
        this.followState = el.initial-follow-state;
        const $el = $(el);
    }
}

module.exports = FollowToggle