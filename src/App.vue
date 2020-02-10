<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap" rel="stylesheet">
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->
        <div class="help">
        <div class="question-box">
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
        <p>You are: {{ crest() }}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import quiz from "./quiz.js";


export default {
  name: 'app',
  data: function() {
      console.log(quiz);
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
        let results = [];
        for (let i = 0; i < this.userResponses.length; i++) {
            let el = this.userResponses[i];
            results.push(el);
        }
        return results.join(", ");
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
    font-family: 'Old Standard TT', serif; 

} 

.question-block {
    padding-top: 25px;
    padding-bottom: 0px;
    color: #fff;
    background-color: #000;
    border-radius: 10px;
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
}

#app {
    height: 100%;
    width: 100%;
}
html, body {
    height: 100%;
}

body {
    background-image: url("./media/ermine.jpg");
    background-repeat: repeat;
}

.help {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}

</style>