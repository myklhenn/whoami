import fs from 'fs';
import Yaml from 'js-yaml';
import Vue from 'vue';
import Layout from './components/layout.vue';
import 'semantic-ui-css/semantic.min.css';

new Vue({
  el: '#app',
  template: '<layout v-bind:resume="resume"></layout>',
  data: {
    resume: Yaml.safeLoad(
      fs.readFileSync('./js/data/resume.yml', 'utf-8')
    )
  },
  components: {
    Layout
  }
});
