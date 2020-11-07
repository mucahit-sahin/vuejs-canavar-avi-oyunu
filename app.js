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
            let playerDamage= Math.ceil(Math.random()*25)
            this.player_heal-=playerDamage
            let monsterDamage= Math.ceil(Math.random()*15)
            this.monster_heal-=monsterDamage
        },
        heal_up:function(){

        },
        give_up:function(){
            
        }
    }
})