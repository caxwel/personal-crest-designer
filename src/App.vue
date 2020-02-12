<template>
    <div id="app">
        <head>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
        </head>
        <div class="help">
        <div class="question-box">
            <div class="moon"></div>
            <h1>{{ quiz.title }}</h1>
            <div class="question-block">
                <div v-for="(question, index) in quiz.questions" :key="question.id">
                <div v-show="index === questionIndex">
                <h3>{{ question.text }}</h3>
                <ul>

                    <li v-for="response in question.responses" :key="response.id">
                        <label>
                        <input type="radio" 
                        class="answerlist"
                        v-bind:value="response.value" 
                        v-bind:name="index" 
                        v-model="userResponses[index]"
                        v-on:click="next"> {{response.text}}
                        </label>
                    </li>
                </ul>
          </div>
        </div>
        <div v-show="questionIndex === quiz.questions.length">
            <h3>YOU HAVE BEEN ASSIGNED:</h3>
        <p>{{ crest() }}</p>
        <myCanvas v-bind:userResponses="userResponses">
            <crestDrawing v-bind:userResponses="userResponses" />
        </myCanvas>
        <label v-on:click="reload">MAKE ANOTHER? ☾</label>
    </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import quiz from "./quiz.js";
import Canvas from "./component/Canvas.vue";
import Drawing from "./component/Drawing.vue";

export default {
  name: "app",
  created () {
      document.title = "KNIGHTS ONLY";
  },
  components: {
      myCanvas: Canvas,
      crestDrawing: Drawing
  },
  data: function() {
    return {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array(),
    };
    },
  methods: {
    next: function() {
            this.questionIndex++;
    },
    crest: function() {
        const description = `a ${this.userResponses[1]} and ${this.userResponses[2]} crest in the ${this.userResponses[0]} style featuring a ${this.userResponses[3]}.`
        return description;
    },
    reload: function(){
    this.questionIndex = 0;
    }
}
}
</script>

<style>
 .question-box {
    text-align: center;
    color: #000;
    display: flex;
    flex-direction: column;
    font-family: 'EB Garamond', serif; 
    letter-spacing: 5px;

} 

.question-block {
    padding-top: 25px;
    padding-bottom: 8px;
    color: #fff;
    background-color: #000;
    border-radius: 10px;
    padding-left: 35px;
    padding-right: 35px;
}

ul {
    list-style-type: none;
    margin-left: -30px;
}

.answerlist {
    display:none;
}

label:hover {
        text-transform: uppercase;
        letter-spacing: 20px; 
}

label {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease; 
    cursor: pointer;
    letter-spacing: 3px;
}

#app {
    height: 100%;
    width: 100%;
}
html, body {
    height: 100%;
}

body {
    background-image: url("./assets/ermine.jpg");
    background-repeat: repeat;
}

.help {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
}

.moon {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-shadow: 50px 15px 0 0 #000000;
      margin-left: -220px;
      margin-top: 50px;
      display: flex;
      position: absolute;
      z-index: -1;
    }

    .outline-primary {
        border-color: #fff;
    }
</style>