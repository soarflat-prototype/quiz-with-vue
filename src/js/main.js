import Question from './components/Question';
import Judge from './components/Judge';
import Result from './components/Result';
import store from './store';

new Question(store);
new Judge(store);
new Result(store);