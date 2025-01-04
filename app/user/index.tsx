import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Button, Switch } from 'react-native';


export default function UserScreen() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <>
            <Stack.Screen name='User' options={{
                title: 'User',
                headerBackTitle: 'Back',
                headerShown: true
            }} />
            <ThemedView className='p-10'>
                <ThemedText type="title">Welcome User </ThemedText>
            </ThemedView>
            <Button title={'hello'} onPress={() => router.back()} />

            <Switch onValueChange={toggleColorScheme} value={colorScheme === 'dark'} />

        </>
    );
}

