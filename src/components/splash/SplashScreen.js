export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        setTimeout(() => {
            // go to Home page
        }, 2500)
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flex: 1, paddingTop: 50 }}>
                    <Text>Splash Screen</Text>
                </View>
            </View>
        )
    }
}