var app = new Vue({
    el: '#app',
    data: {
        message: "hello vue!",
        seen: true,
        todos: [
            {text: 'Learn js '},
            {text: 'Learn vue '},
            {text: 'build fucking apps '},
        ]
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
});

app.message = 'Hello Sadi!';
app.todos.push({ text: 'FuCkOfF' });
