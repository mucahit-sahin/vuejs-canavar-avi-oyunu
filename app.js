new Vue({
    el:"#app",
    data:{
        player_healt:100,
        monster_healt:100,
        game_is_on:false,
        logs:[]
    },
    methods:{
        start_game:function(){
            this.game_is_on=true
        },
        attack:function(){
            let playerDamage= Math.ceil(Math.random()*15)
            this.player_healt-=playerDamage
            let monsterDamage= Math.ceil(Math.random()*10)
            this.monster_healt-=monsterDamage
            this.add_log("m",playerDamage+" Hasar Aldınız")
            this.add_log("p",monsterDamage+" Hasar Verdiniz")
            
        },
        special_attack:function(){
            let playerDamage= Math.ceil(Math.random()*15)
            this.player_healt-=playerDamage
            let monsterDamage= Math.ceil(Math.random()*25)
            this.monster_healt-=monsterDamage
            this.add_log("m",playerDamage+" Hasar Aldınız")
            this.add_log("p",monsterDamage+" Özel Hasar Verdiniz")
        },
        heal_up:function(){
            let heal=Math.ceil(Math.random()*20)
            this.player_healt+=heal
            let playerDamage= Math.ceil(Math.random()*15)
            this.player_healt-=playerDamage
            this.add_log("p",heal+" Can Aldınız")
            this.add_log("m",playerDamage+" Hasar Aldınız")
        },
        give_up:function(){
            this.add_log("p","Pes Ettiniz")
            this.player_healt=0
        },
        add_log:function(side,text){
            this.logs.push({side,text})
        }
    },
    watch:{
        player_healt:function(value){
            if(value>100){
                this.player_healt=100
            }else if(value<=0){
                this.player_healt=0
                if(confirm("Canavar Kazandı! Tekrar oynayalım mı?"))
                {
                    this.player_healt=100
                    this.monster_healt=100
                    this.logs=[]
                }
            }
        },
        monster_healt:function(value){
            if(value>100){
                this.monster_healt=100
            }else if(value<0){
                this.monster_healt=0
                if(confirm("Sen Kazandın! Tekrar oynayalım mı?"))
                {
                    this.player_healt=100
                    this.monster_healt=100
                    this.logs=[]
                }
            }
        }
    }

})