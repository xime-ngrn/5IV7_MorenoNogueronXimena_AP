new Vue({ 
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        image: { url: ""}
    },
    created(){
        this.loadNextImage();
    } ,
    methods:{
        async loadNextImage()
        {
            try{
                axios.defaults.headers.common['x-api-key'] = "api_key=live_OCzIC4DIbMqyutYb9hTjW5DdY5IGejjFZWUBkpUUvaA78wKbMToOGhuwG2hRBM70";

                let response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10', { params: { limit:1, size:"full" } } );
                
                this.image = response.data[0];

                    console.log("-- Image from TheCatAPI.com")
                    console.log("id:", this.image.id)
                    console.log("url:", this.image.url)
                    let num = this.image.id;
                    let url = this.image.url;
                    document.getElementById("imgCat").setAttribute("src", url);
                    document.getElementById("numCat").innerHTML = "Gatito número: "+num;

            }catch(err){
                console.log(err);
            }
        }
    }
})