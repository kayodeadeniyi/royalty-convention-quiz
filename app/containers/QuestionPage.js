import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from '../components/Question';
import * as QuestionActions from '../actions/question';


const mapDispatchToProps = dispatch => bindActionCreators(QuestionActions, dispatch);

export default connect(null, mapDispatchToProps)(Question);
