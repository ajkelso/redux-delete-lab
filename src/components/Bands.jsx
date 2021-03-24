import React, {Component} from 'react';
import Band from './Band';
import { connect } from 'react-redux'

class Bands extends Component {
    
    renderbands = () => {
        return this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)
    }

    render(){
        return (
            <ul>
                {this.renderbands()}
            </ul>
        )
    }


}

const mapDispatchToProps = dispatch => {
    return {
        delete: bandId => dispatch({type: 'DELETE_BAND', bandId })
    }
}

export default connect(null, mapDispatchToProps)(Bands)