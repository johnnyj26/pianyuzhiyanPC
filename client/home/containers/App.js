import React, {
    Component
} from 'react'
import {
    bindActionCreators
} from 'redux'
import {
    connect
} from 'react-redux';
import actions from '../../common/actions/home';
import Home from '../components/home'

class App extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        this.props.actions.fetchHomeMess();
    }

    render() {
        const {
            actions,
            homeData
        } = this.props

        return (
            <div>
                <Home actions={actions} homeData={homeData}></Home>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        homeData: state.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)