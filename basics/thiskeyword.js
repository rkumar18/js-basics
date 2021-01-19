var meet = {
    day: 'monday',
    meetingsRemain: 0,
    meetingsDone: 10,

    checkmeeting: function(num){
        return `you have done ${this.meetingsDone} meetings and ${num} remains meetings `
    }
}
console.log(meet.checkmeeting(4))