import { connect } from 'react-redux';
import ShowData from '../components/ShowData';

const mapStateToProps = (state) => {
  console.log(state)
  return({
    data: state
  })
}

export default connect(mapStateToProps)(ShowData)