new Vue({
    el:"#app",
    data:{
        player_heal:100,
        monster_heal:100,
        game_is_on:false
    },
    methods:{
        start_game:function(){
            this.game_is_on=true
        },
        attack:function(){
            let playerDamage= Math.ceil(Math.random()*10)
            this.player_heal-=playerDamage
            let monsterDamage= Math.ceil(Math.random()*15)
            this.monster_heal-=monsterDamage
        },
        special_attack:function(){
            let playerDamage= Math.ceil(Math.random()*10)
            this.player_heal-=playerDamage
            let monsterDamage= Math.ceil(Math.random()*25)
            this.monster_heal-=monsterDamage
        },
        heal_up:function(){
            let heal=Math.ceil(Math.random()*15)
            this.player_heal+=heal
        },
        give_up:function(){
            
        }
    },
    watch:{
        player_heal:function(){
            if(this.player_heal>100){
                this.player_heal=100
            }else if(this.player_heal<0){
                this.player_heal=0
                if(confirm("Canavar Kazandı! Tekrar oynayalım mı?"))
                {
                    this.player_heal=100
                    this.monster_heal=100
                }
            }
        },
        monster_heal:function(){
            if(this.monster_heal>100){
                this.monster_heal=100
            }else if(this.monster_heal<0){
                this.monster_heal=0
                if(confirm("Player Kazandı! Tekrar oynayalım mı?"))
                {
                    this.player_heal=100
                    this.monster_heal=100
                }
            }
        }
    }

})