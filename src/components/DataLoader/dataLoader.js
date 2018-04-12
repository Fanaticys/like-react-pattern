import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import thunkify from '../../utils/thunkify';
import { get as getPermissions } from '../../actions/permissions';
import { get as getLicensec } from '../../actions/licenses';
import { STORE_KEY } from '../../constants/store';

const ChildAsFunction = ({ children, ...rest }) => {
    console.log('ChildrenAsFunction', children);
    return children(rest);
}

const mapStateToProps = (state) => {

    return {
        isLoading: false,
        error: false,
        permissions: { permissions: true },
        licenses: { licenses: true }
    }

    // return {
    //     isLoading: (
    //         !state[`${STORE_KEY}/permissions`].load ||
    //         !state[`${STORE_KEY}/license`].load ||
    //         state[`${STORE_KEY}/permissions`].loading ||
    //         state[`${STORE_KEY}/licenses`].loading
    //     ),
    //     error: (
    //         !state[`${STORE_KEY}/permissions`].error ||
    //         !state[`${STORE_KEY}/license`].error
    //     ),
    //     permissions: state[`${STORE_KEY}/permissions`].data,
    //     licenses: state[`${STORE_KEY}/licenses`].data
    // }
};

const mapDispatchToProps = ( dispatch, props ) => {
    return {
        loadPermissions: thunkify(dispatch, getPermissions(props.baseURL)),
        loadLicenses: thunkify(dispatch, getLicensec(props.baseURL))
    } 
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount(){
            this.props.loadPermissions();
            this.props.loadLicenses();
        }
    })
)(ChildAsFunction)