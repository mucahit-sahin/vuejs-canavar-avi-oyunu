new Vue({
    el:"#app",
    data:{
        player_heal:100,
        monster_heal:100,
        game_is_on:false,
        logs:[]
    },
    methods:{
        start_game:function(){
            this.game_is_on=true
        },
        attack:function(){
            let playerDamage= Math.ceil(Math.random()*15)
            this.player_heal-=playerDamage
            let monsterDamage= Math.ceil(Math.random()*15)
            this.monster_heal-=monsterDamage
            this.add_log("m",playerDamage+" Hasar Aldınız")
            this.add_log("p",monsterDamage+" Hasar Verdiniz")
            
        },
        special_attack:function(){
            let playerDamage= Math.ceil(Math.random()*10)
            this.player_heal-=playerDamage
            let monsterDamage= Math.ceil(Math.random()*25)
            this.monster_heal-=monsterDamage
            this.add_log("m",playerDamage+" Hasar Aldınız")
            this.add_log("p",monsterDamage+" Özel Hasar Verdiniz")
        },
        heal_up:function(){
            let heal=Math.ceil(Math.random()*15)
            this.player_heal+=heal
            let playerDamage= Math.ceil(Math.random()*10)
            this.player_heal-=playerDamage
            this.add_log("p",heal+" Can Aldınız")
            this.add_log("m",playerDamage+" Hasar Aldınız")
        },
        give_up:function(){
            
        },
        add_log:function(side,text){
            this.logs.push({side,text})
        }
    },
    watch:{
        player_heal:function(value){
            if(value>100){
                this.player_heal=100
            }else if(value<0){
                this.player_heal=0
                if(confirm("Canavar Kazandı! Tekrar oynayalım mı?"))
                {
                    this.player_heal=100
                    this.monster_heal=100
                    this.logs=[]
                }
            }
        },
        monster_heal:function(value){
            if(value>100){
                this.monster_heal=100
            }else if(value<0){
                this.monster_heal=0
                if(confirm("Sen Kazandın! Tekrar oynayalım mı?"))
                {
                    this.player_heal=100
                    this.monster_heal=100
                    this.logs=[]
                }
            }
        }
    }

})