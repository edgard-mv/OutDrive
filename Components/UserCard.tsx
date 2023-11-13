import { ComponentProps, useMemo } from 'react';
import { ViewStyle } from 'react-native';

import { Card } from 'react-native-ui-lib';

export function UserCard({
    userName,
    imgSrc,
    onPress,
    content,
    containerStyle,
    imgAlignment = 'left',
}: {
    userName: string;
    imgSrc: string;
    onPress?: () => void;
    content?: ComponentProps<typeof Card.Section>['content'];
    containerStyle?: ViewStyle;
    imgAlignment?: 'left' | 'right';
}) {
    const containerDefaultStyle = {
        height: 80,
    } as const;

    const sections = useMemo(() => {
        const elements = [
            <Card.Section
                key="image"
                imageSource={{
                    uri: imgSrc,
                }}
                imageStyle={{ height: '100%', width: 80 }}
            />,
            <Card.Section
                key="content"
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
            />,
        ];

        if (imgAlignment === 'right') {
            elements.reverse();
        }

        return elements;
    }, [imgAlignment]);

    return (
        <Card
            containerStyle={{
                ...containerDefaultStyle,
                ...(containerStyle ?? {}),
            }}
            onPress={onPress}
            backgroundColor="#ddd"
            row
        >
            {sections}
        </Card>
    );
}
