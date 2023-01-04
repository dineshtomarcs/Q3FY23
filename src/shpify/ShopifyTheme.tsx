import React from 'react';
import Box from './Box'
import Text from './Text'
import Card from './Card'


export const ShopifyTheme = () => {
    return (
        <Box
            flex={1}
            backgroundColor="mainBackground"
            paddingVertical="xl"
            paddingHorizontal="m"
        >
            <Text variant="header">Welcome</Text>
            <Box
                flexDirection={{
                    phone: 'column',
                    tablet: 'row',
                }}
            >
                <Card margin="s" variant="secondary">
                    <Text variant="body">This is a simple example</Text>
                </Card>
                <Card margin="s" variant="primary">
                    <Text variant="subheader">Displaying how to use Restyle</Text>
                </Card>
            </Box>

            <Box
                flexDirection={{
                    phone: 'column',
                    tablet: 'row',
                }}
            >
                <Card margin="s" variant="secondary">
                    <Text variant="body">This is a simple example</Text>
                </Card>
                <Card margin="s" variant="primary">
                    <Text variant="subheader">Displaying how to use Restyle</Text>
                </Card>
            </Box>
        </Box>
    );
};