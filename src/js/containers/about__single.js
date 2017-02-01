import { connect } from 'react-redux';
import { apiFetchIfNeeded } from '../actions/actions';
import SingleContainer from '../components/single__container.jsx';;

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.params;
    const { apiCalls } = state;
    const list = apiCalls['about/entry'] || {
        isFetching: true,
        items: []
    };

    let item = {
        id: 0,
        name: 'Loading',
        text: 'Loading'
    };

    var i = 0;
    for(i; i < list.items.length; i++){
        if (list.items[i].id === parseInt(id)){
            item = list.items[i];
            break;
        }
    }
    const isFetching = list.isFetching;

    return {
        id: 'a',
        title: item.name,
        isFetching,
        item: item,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps.params;
    dispatch(apiFetchIfNeeded('about/entry'));
    return {};
};

const AboutSingle = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleContainer);

export default AboutSingle;