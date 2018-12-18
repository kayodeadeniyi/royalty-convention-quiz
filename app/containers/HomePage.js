import { connect } from 'react-redux';

import Home from '../components/Home';


const mapStateToProps = state => ({
  openedQuestions: state.question
})

export default connect(mapStateToProps, {})(Home);
