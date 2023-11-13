import { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { View, Dividers, Text, Image } from 'react-native-ui-lib';

export function FullScreenFormTemplate({
    title,
    children,
    actionButtons,
    showLogo = false,
}: {
    title: string;
    children: ReactNode;
    actionButtons?: ReactNode;
    showLogo?: boolean;
}) {
    return (
        <View flex height="100%" width="100%" marginT-50>
            <View flex>
                <View paddingH-25 paddingT-50>
                    <Text
                        blue50
                        text20
                        style={{
                            ...Dividers.d10,
                        }}
                    >
                        {title}
                    </Text>
                </View>
                <ScrollView>
                    <View paddingV-25 paddingH-25>
                        {showLogo && (
                            <View center>
                                <Image
                                    height={100}
                                    cover
                                    source={{
                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLAfIrMcb72stqDd7AwovOqIEcPx2YbC0HA&usqp=CAU',
                                    }}
                                />
                            </View>
                        )}
                        <View
                            marginT-25
                            style={{
                                rowGap: 40,
                            }}
                        >
                            {children}
                        </View>
                        {actionButtons != null && (
                            <View
                                marginT-50
                                center
                                style={{
                                    rowGap: 20,
                                }}
                            >
                                {actionButtons}
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
