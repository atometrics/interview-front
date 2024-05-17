<template>
<div id="home-view">
  <div class="teams">
    <div class="team human-team">
      <div v-for="human in humanCharacters" class="character">
        <div class="name">{{ human.name }}</div>
        <span class="material-symbols-outlined">swords</span> {{ human.strength }}
        <span class="material-symbols-outlined">cognition</span> {{ human.intelligence }}
        <span class="material-symbols-outlined">favorite</span> {{ human.charisma }}
      </div>
    </div>
    <div class="vs"><img src="@/assets/images/vs.png" width="70"></div>
    <div class="team elven-team">
      <div v-for="elf in elvenCharacters" class="character">
        <div class="name">{{ elf.name }}</div>
        <span class="material-symbols-outlined">swords</span> {{ elf.strength }}
        <span class="material-symbols-outlined">cognition</span> {{ elf.intelligence }}
        <span class="material-symbols-outlined">favorite</span> {{ elf.charisma }}
      </div>
    </div>
  </div>
  <button class="start-battle" @click="startBattle">Start Battle</button>
  <div v-if="battleResult" class="battle-result">
    <h2>{{ battleResult }}</h2>
  </div>
</div>
</template>
<script>
import { getCharacters } from '@/services/character.js'
import { RACES } from '@/models/races.js'

export default {
  data() {
    return {
      humanCharacters: [],
      elvenCharacters: [],
      battleResult: undefined
    }
  },
  async created() {
    // TODO: 
  },
  methods: {
    startBattle() {
      // TODO: 
      
      // TODO: 
    }
  }
}
</script>
<style>
#home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.teams {
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 20px;
  background: #b9b9b9;
  .team {
    width: 250px;
    background: rgb(86, 86, 86);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    .character {
      margin: 10px;
      padding: 10px;
      background: rgb(57, 57, 57);
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;
      .name {
        font-size: 1.5em;
      }
    }
  }
  .vs {
    font-size: 2em;
    margin: auto;
  }
}
.start-battle {
  margin: auto;
}
</style>