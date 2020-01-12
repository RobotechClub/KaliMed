import React from 'react';
import { Button, Header, Icon } from 'react-native-elements';

export default class ApplicationHeader extends React.Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        const menuIcon = <Icon name="menu" size={25} color="white" onPress={this.toggleDrawer.bind(this)} />;
        const menuButton = <Button icon={menuIcon} />;
        return (
            <Header
                leftComponent={menuButton}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}