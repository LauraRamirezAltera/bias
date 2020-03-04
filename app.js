var app=new Vue({
    el: '#app',
    data() {
        return {
            next:true,
            option:1,
            first: true,
            slider2: [
                {
                    id: 'experiencia-tab',
                    href: '#experiencia',
                    aria: 'experiencia',
                    img: './img/icon_three.png',
                    img2: './img/icon_three_purple.png',
                    text: 'EXPERENCIA',
                    active: true
                },
                {
                    id: 'interacciones-tab',
                    href: '#interacciones',
                    aria: 'interacciones',
                    img: './img/icon_two.png',
                    img2: './img/icon_two_purple.png',
                    text: 'INTERACCIONES',
                    active: false
                },
                {
                    id: 'beneficios-tab',
                    href: '#beneficios',
                    aria: 'beneficios',
                    img: './img/icon_four.png',
                    img2: './img/icon_four_purple.png',
                    text: 'BENEFICIOS',
                    active: false
                },
                {
                    id: 'sobre-tab',
                    href: '#sobre',
                    aria: 'sobre',
                    img: './img/icon_one.png',
                    img2: './img/icon_one_purple.png',
                    text: '¿CÓMO?',
                    active: false
                }
            ]
        }
    }, 
    methods: {
        opt_1(){
            this.option=null
            this.option=1
            console.log(this.option)
        },
        opt_2(){
            this.option=null
            this.option=2
            console.log(this.option)
       
        },
        opt_3(){
            this.option=null
            this.option=3
            console.log(this.option)
        
        },
        opt_4(){
            this.option=null
            this.option=4
            console.log(this.option)
        },
        // next_section() {
        //     this.next = !this.next
        //     if(this.next="true"){
        //         setTimeout(()=>{ this.next = !this.next}, 6000);
        //     }
        // },

        renderSlider1() {
            var slider1 = document.getElementById('secondSectionBias')
            if(slider1) {
                var tns_slider1 = tns({
                    container: '#secondSectionBias',
                    navPosition:"bottom",
                    controls:false,
                    speed:1000,
                    items: 1,
                    responsive: {
                        420: {
                          items: 1,
                        },
                        650: {
                          items: 2,
                        },
                        1200: {
                          items: 3,
                        }
                      }
                })
            }
        },

        renderSlider2() {
            var slider2 = document.getElementById('fifth_section')
            if(slider2) {
                var tns_slider2 = tns({
                    container: '#fifth_section',
                    navPosition:"bottom",
                    controls:false,
                    speed:1000,
                    mouseDrag: true,
                    responsive: {
                        420: {
                            items: 1,
                        },
                        650: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        },
                        1200: {
                            items: 4,
                        }
                        }
                })
            }
        },

    },
    
    mounted() {
        this.renderSlider1()
        this.renderSlider2()

        let test = document.querySelector('.container_fifth ul li:nth-child(7) a')
        test.classList.add('active')


    }
});


