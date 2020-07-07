const { VueF8Utils } = require('vue/VueF8Utils');

const ComponentTemplate = {
    name: 'ComponentTemplate',

    inject: ['f8'], //this is for getting attributes

    template: `
        <div>
            <h1>This is a template</h1>
        </div>
    `,

    data: () => ({
        //define default data for this component
        //title: ''
    }),

    created() {
        //create() runs before the component is rendered
        //get attributes:
        //this.title = this.f8.attributes.title;
    },

    mounted() {
        //mounted() runs after the component is rendered successfully
    },

    beforeDestroy() {
        //runs before the component close
    },

    computed: {
        
    },

    methods: {
        //add functions here
    }
};

module.exports = VueF8Utils.componentDefaults(ComponentTemplate);