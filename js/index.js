import fs from 'fs';
import Yaml from 'js-yaml';
import App from './App.svelte';
import 'semantic-ui-css/semantic.min.css';

const app = new App({
  target: document.body,
  props: {
    resume: Yaml.safeLoad(
      fs.readFileSync('./js/data/resume.yml', 'utf-8')
    )
  }
});

export default app;