<template>
    <div id="app" v-cloak>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <div class="row">
        <div class="large-12 columns">
            <h1>{{ quiz.title }}</h1>
            <div class="callout">
                <div v-for="(question, index) in quiz.questions" :key="question.id">
          <!-- Hide all questions, show only the one with index === to current question index -->
                <div v-show="index === questionIndex">
                <h3>{{ question.text }}</h3>
                <ul>
              <!-- for each response of the current question -->
                    <li v-for="response in question.responses" :key="response.id">
                        <label>
                        <input type="radio" 
                        v-bind:value="response.value" 
                        v-bind:name="index" 
                        v-model="userResponses[index]"
                        v-on:click="next"> {{response.text}}
                        </label>
                    </li>
                </ul>
          </div>
        </div>

        <!-- Last page, quiz is finished, display result -->
        <div v-show="questionIndex === quiz.questions.length">
          <h3>Your Results</h3>
          <p>
            You are: {{ crest() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import Start from './components/Start.vue'
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
        // let maxCount = 1;
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
#app {
  font-family: 'Courier New', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;
  margin-top: 60px;
}

ul {
    list-style-type: none;
}
</style>