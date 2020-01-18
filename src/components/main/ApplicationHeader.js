import React from 'react';
import { Button, Header, Icon } from 'react-native-elements';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
export default class ApplicationHeader extends React.Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const menuIcon = <Icon name="menu" size={25} color="white" onPress={this.toggleDrawer.bind(this)} />;
        const menuButton = <Button icon={menuIcon} />;
        const { search } = this.state;

        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '60%' }}>
                        <SearchBar
                            round={true}
                            lightTheme={true}
                            containerStyle={{
                                backgroundColor: '#00bcd4',
                                borderWidth: 0, //no effect
                                shadowColor: 'white', //no effect
                                borderBottomColor: 'transparent',
                                borderTopColor: 'transparent'
                            }}
                            inputContainerStyle={{
                                backgroundColor: '#00bcd4',
                                borderWidth: 3,
                                borderColor: 'yellow',
                                borderBottomColor: 'yellow',
                                borderBottomWidth: 3,
                                borderTopColor: 'yellow',
                                borderTopWidth: 3,

                            }}
                            placeholder="Search"
                            onChangeText={this.updateSearch}
                            value={search}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />
                    </View>
                </View>

                <Header
                    leftComponent={menuButton}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />

            </View>
        );
    }
}