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
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value={search}
                        />
                    </View>
                    <View style={{ width: '40%' }}>
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