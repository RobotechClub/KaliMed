import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { openBookmarkModal } from '../../store/actions/kalimedActions';


class FloatingButton extends React.Component {

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.openBookmarkModal()}
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    height: 70,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                }}
            >
                <Icon name="home" size={30} color="#01a699" />
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { openBookmarkModal })(FloatingButton)
