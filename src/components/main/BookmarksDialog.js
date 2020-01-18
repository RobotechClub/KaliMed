import React from 'react';
import { View, ScrollView, Text, YellowBox } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple';
import { Dialog } from 'react-native-simple-dialogs';
import { connect } from 'react-redux';
import { closeBookmarkModal } from '../../store/actions/kalimedActions';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'componentWillReceiveProps has been renamed'
])
function BookmarksDialog(props) {

  const fruits = ['Apples', 'Oranges', 'Pears']

  const deleteIcon = <Icon name="delete" size={25} color="white" />;

  return (
    <Dialog
      visible={props.dialogVisible}
      onTouchOutside={() => props.closeBookmarkModal()} >
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, flex: 1 }}> Bookmarks </Text>
          <Button
            type="solid"
            icon={deleteIcon}
          />

        </View>
        <ScrollView>
          <SelectMultiple
            items={fruits}
            selectedItems={fruits}
            onSelectionsChViewange={(item) => console.log(item)}
          />
        </ScrollView>
      </View>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  dialogVisible: state.isBookmarkOpen,
});

export default connect(mapStateToProps, { closeBookmarkModal })(BookmarksDialog)