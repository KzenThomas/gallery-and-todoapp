window.onload = function () {
    const galleryapp = new Vue({
        el: '.galleryapp',
        data: {
            newurl: '',
            urls: [
                {
                    url: 'https://www.gettyimages.be/gi-resources/images/500px/983794168.jpg'
                    },

                {
                    url: 'https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg'
                    },
                   ],
            editing: null,
        },
        
        computed: {
                filteredtodos() {
                    return this.urls.filter(todo => {
                        return url.text.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                    })
                }
            },

        methods: {
            createurl(event) {
                const textbox = event.target;
                this.urls.push({
                    url: this.newurl
                })
            },
            selectimage(urll) {

            }
        }
    })
}