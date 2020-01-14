import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Dialog } from 'react-native-simple-dialogs';
import { closeBookmarkModal } from '../../store/actions/kalimedActions';

class BookmarksDialog extends Component {

  render() {
    return (
      <Dialog
        visible={this.props.dialogVisible}
        title="Custom Dialog"
        onTouchOutside={() => this.props.closeBookmarkModal()} >
        <View>
        </View>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  dialogVisible: state.isBookmarkOpen,
});

export default connect(mapStateToProps, { closeBookmarkModal })(BookmarksDialog)