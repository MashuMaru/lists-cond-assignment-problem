const app = Vue.createApp({
    data: function() {
        return {
            tasks: [],
            taskInput: '',
            taskVisible: true,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskInput);
        },
        toggleVisibility() {
            this.taskVisible === !this.taskVisible;
        }
    },
    computed: {
        buttonTextToggle() {
            return this.taskVisible ? 'Hide List' : 'Show List';
        }
    }
})
app.mount('#assignment');