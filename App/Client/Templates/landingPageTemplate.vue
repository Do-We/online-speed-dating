<template>
<div>
    <div class="message">
    <img class="background" :src="background" alt="backgroundImage">
        {{ msg }}
    </div>
    <div class="col-md-3 col-md-offset-7">
      <profilelink></profilelink>
    </div>
    <aboutus></aboutus>
    <techstack></techstack>
</div>
</template>
