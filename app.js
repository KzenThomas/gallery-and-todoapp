const todoApp = new Vue({
    el: '.todoapp',
    data: {
        title: 'Todos',
        search: '',
        tododate: new Date(),
        todos: [
            {
                text: 'Learn Javascript',
                isDone: true,
                date : new Date()
            },
            {
                text: 'Learn Vue',
                isDone: false,
                date : new Date()
            },
            {
                text: 'Build something awesome',
                isDone: false,
                date : new Date()
            },
        ],
        editing: null,
        },

        computed: {
                filteredtodos() {
                    return this.todos.filter(todo => {
                        return todo.text.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                    })
                }
            },

            components: {
                vuejsDatepicker
            },  

        methods: {
                createTodo(event) {
                    const textbox = event.target;
            this.todos.push({
                text: textbox.value,
                isDone: false,
                date : new Date(this.tododate)
            });
            textbox.value = '';
        },
        startEditing(todo) {
            this.editing = todo;
        },
        finishEditing(event) {
            if (!this.editing) {
                return;
            }
            console.log("test")
            const textbox = event.target;
            this.editing.text = textbox.value;
            this.editing = null;
        },
        cancelEditing() {
            this.editing = null;
        },
        destroyTodo(todo) {
            const index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },

    }
     

});