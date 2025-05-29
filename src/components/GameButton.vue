<template>
<div ontouchstart="">
  <div class="button">
    <a href="#">Get to know me </a>
  </div>
</div>
</template>

<style lang="scss" scoped>


.button{
  position:relative;
  display:inline-block;
  margin-top: -20px;
}

.button a{
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size:22px;
  text-align: center;
  text-decoration:none;
  background-color:#FFA12B;
  display:block;
  position:relative;
  padding:15px 30px;
  border-radius: 5px;
  
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;

&:hover{
  background-color:#f49829;
  
}

&:active{
  top:10px;
  background-color:#F78900;
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
}}

.button:after{
    content:"";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: -10px;
    left: 0;
    z-index: -1;
    background-color: #2B1800;
    border-radius: 5px;
    opacity: 1;
    transition: opacity 0.2s;
}
</style>
