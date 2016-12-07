<template>
<div>
  <div v-html='videoOut'></div>
  <input v-model='myNumber'>
  <button v-on:click='makePhone(myNumber)'>call</button>
  <input type="number" v-model='yourNumber'>
  <button v-on:click='dial(yourNumber)'>dial</button>{{session}}
</div>
</template>             