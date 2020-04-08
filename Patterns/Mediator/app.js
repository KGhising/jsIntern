const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

const kishor = new User('Kishor');
const shrawon = new User('Shrawon');
const karishma = new User('Karishma');

const chatroom = new Chatroom();

chatroom.register(kishor);
chatroom.register(shrawon);
chatroom.register(karishma);

kishor.send('Hello Jeff', shrawon);
karishma.send('Hello Brad, you are the best dev ever!', kishor);
shrawon.send('Hello Everyone!!!!');
