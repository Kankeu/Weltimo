<template>
  <div>
  <v-container fluid grid-list-md>
    <v-layout column>
      <v-flex>
      <div class="body">
      <v-layout class="title center" column  align-center justify-center>
        <h1 class="white--text">Hello and welcome on weltimo</h1>
        <h4 class="white--text">Join us and discover a new way to learn German</h4>
        <h4 class="white--text">learn German in a fun way  :)</h4>
      </v-layout>
      
      <div id="background-wrap">
            <div class="x1">
                <div class="cloud"></div>
            </div>

            <div class="x2">
                <div class="cloud"></div>
            </div>

            <div class="x3">
                <div class="cloud"></div>
            </div>

            <div class="x4">
                <div class="cloud"></div>
            </div>

            <div class="x5">
                <div class="cloud"></div>
            </div>
        </div>
    </div>
      </v-flex>
      <v-flex align-center d-flex>
        <v-avatar size="200px">
          <v-icon :x-large="true" class="logo">language</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex class="center">
        learn German in a fun way  :)<br>
        Join us and discover a new way to learn the language.<br>
        <v-btn color="primary" outline round to="/sign_in" large>Sign in</v-btn>
      </v-flex>
      <v-flex>

      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>

  export default {
      data(){
        return {
            images: [],
        }
      },

  }
</script>

<style scoped lang="scss">
  .logo{
    font-size: 200px !important
  }
  .center{
    text-align: center
  }
  .body {
    background: #00b4ff;
    color: #333;
    font: 100% Arial, Sans Serif;
    height: 400px;
    margin: 0;
    padding: 0;
    position:sticky;
    overflow: hidden;
  }
  .title{
    height:100%;
    font-family: monospace;
  }

#background-wrap {
    bottom: 0;
	left: 0;
	padding-top: 50px;
	position: absolute;
	right: 0;
	top: 0;
	z-index: -1;
}

/* KEYFRAMES */

@-webkit-keyframes animateCloud {
    0% {
        margin-left: -600px;
    }
    100% {
        margin-left: 100%;
    }
}

@-moz-keyframes animateCloud {
    0% {
        margin-left: -600px;
    }
    100% {
        margin-left: 100%;
    }
}

@keyframes animateCloud {
    0% {
        margin-left: -600px;
    }
    100% {
        margin-left: 100%;
    }
}

/* ANIMATIONS */

.x1 {
	-webkit-animation: animateCloud 25s linear infinite;
	-moz-animation: animateCloud 25s linear infinite;
	animation: animateCloud 25s linear infinite;
	
	-webkit-transform: scale(0.65);
	-moz-transform: scale(0.65);
	transform: scale(0.65);
}

.x2 {
	-webkit-animation: animateCloud 15s linear infinite;
	-moz-animation: animateCloud 15s linear infinite;
	animation: animateCloud 15s linear infinite;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

.x3 {
	-webkit-animation: animateCloud 20s linear infinite;
	-moz-animation: animateCloud 20s linear infinite;
	animation: animateCloud 20s linear infinite;
	
	-webkit-transform: scale(0.5);
	-moz-transform: scale(0.5);
	transform: scale(0.5);
}

.x4 {
	-webkit-animation: animateCloud 8s linear infinite;
	-moz-animation: animateCloud 8s linear infinite;
	animation: animateCloud 8s linear infinite;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x5 {
	-webkit-animation: animateCloud 15s linear infinite;
	-moz-animation: animateCloud 15s linear infinite;
	animation: animateCloud 15s linear infinite;
	
	-webkit-transform: scale(0.55);
	-moz-transform: scale(0.55);
	transform: scale(0.55);
}

/* OBJECTS */

.cloud {
	background: #fff;
	background: -moz-linear-gradient(top,  #fff 5%, #f1f1f1 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#fff), color-stop(100%,#f1f1f1));
	background: -webkit-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	background: -o-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	background: -ms-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );
	
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;
	
	-webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

	height: 120px;
	position: relative;
	width: 350px;
}

.cloud:after, .cloud:before {
    background: #fff;
	content: '';
	position: absolute;
	z-indeX: -1;
}

.cloud:after {
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;

	height: 100px;
	left: 50px;
	top: -50px;
	width: 100px;
}

.cloud:before {
	-webkit-border-radius: 200px;
	-moz-border-radius: 200px;
	border-radius: 200px;

	width: 180px;
	height: 180px;
	right: 50px;
	top: -90px;
}
</style>
