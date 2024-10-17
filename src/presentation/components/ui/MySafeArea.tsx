import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const MySafeArea = ({ children }: PropsWithChildren) => {

    const { top } = useSafeAreaInsets();

    return (
        <View 
            style={{flex: 1, paddingTop: top, padding: 10}}>
            { children }
        </View>
    )
}