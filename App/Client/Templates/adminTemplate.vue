<template>
  <div>
    <div class="container eventCreation">
      <p id="header"> Sign in for an event </p>
      <form>
        <input type="text" placeholder="Enter your name" v-model="username" >
        <input type="text" placeholder="Enter event type" v-model="eventType" >
        <input type="text" placeholder="Enter event name" v-model="eventName" >
        <input type="datetime-local" placeholder="Enter a date" v-model="date">
        <button role="button" v-on:click.prevent="submit">Submit</button>
      </form>
    </div>

    <div class='row' v-for='event in this.allEvents'>
      <div class='col-xs-2' >{{event.eventName}}</div>
      <div class='col-xs-2' >{{moment(event.date).format('MMMM Do YYYY, h:mm:ss a')}}</div>
      <div class='col-xs-2' > <button v-on:click.prevent="setupEvent(event)" type="submit" class="btn btn-primary btn-block">Setup Event</button></div>
      <div class='col-xs-2' > <button v-on:click.prevent="startEvent(event)" type="submit" class="btn btn-primary btn-block">Start Event</button></div>
      <div class='col-xs-2' ><button v-on:click.prevent="incrementRound(event)" type="submit" class="btn btn-primary btn-block">Increment Round</button></div>
      <div class='col-xs-2' ><button v-on:click.prevent="endEvent(event)" type="submit" class="btn btn-primary btn-block">End Event</button></div>
    </div>
  </div>
</template>


<style>
  #header{
    font-size: 20px;
    font-weight: 400;
    background: #5d868a;
    width: 30%;
    padding: 10px 10px 10px 10px;
    color: #fff;
  }
  small {
    margin-left: 5px;
  }
  #title {
    background: rgba(173, 216, 230,1);
  }

  .eventCreation {
    background: #5d868a;
    height: 150px;
  }
  /*
  #signin_info {
    margin-top: 20px;
    background: rgba(255, 255, 255,1);
    padding-left: 10px;
  }
  */
  title {
    font: bold;
    color: #fff;
    background: #ddd;

  }
</style>