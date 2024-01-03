import { View } from 'react-native';
import { theme } from '~helpers/theme';

const HomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.color.backgroundColorPrimary,
            }}
        />
    );
};

export default HomeScreen;
