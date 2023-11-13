import { ComponentProps } from 'react';
import { ViewStyle } from 'react-native';

import { Card } from 'react-native-ui-lib';

export function UserCard({
    userName,
    imgSrc,
    onPress,
    content,
    containerStyle,
}: {
    userName: string;
    imgSrc: string;
    onPress?: () => void;
    content?: ComponentProps<typeof Card.Section>['content'];
    containerStyle?: ViewStyle;
}) {
    const containerDefaultStyle = {
        height: 80,
    } as const;

    return (
        <Card
            containerStyle={containerStyle ?? containerDefaultStyle}
            onPress={onPress}
            backgroundColor="#ddd"
            row
        >
            <Card.Section
                imageSource={{
                    uri: imgSrc,
                }}
                imageStyle={{ height: '100%', width: 80 }}
            />
            <Card.Section
                content={[
                    {
                        text: userName,
                        text70: true,
                        $textDefault: true,
                    },
                    ...(content ?? []),
                ]}
                flex
                paddingT-5
                paddingL-10
            />
        </Card>
    );
}
