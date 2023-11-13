import { useState } from 'react';

import {
    View,
    Button,
    Text,
    Incubator,
    Picker,
    TextField,
    Dividers,
} from 'react-native-ui-lib';
import { formatAmount } from '../Utils';

type FundsTransferDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

enum PaymentMethod {
    Cash,
    CreditCard,
    DebitCard,
    Gana,
    Neki,
    Bancolombia,
}

const PaymentMethods = [
    {
        label: 'Efectivo',
        value: PaymentMethod.Cash,
    },
    {
        label: 'Tarjeta de Crédito',
        value: PaymentMethod.CreditCard,
    },
    {
        label: 'Tarjeta de Debito',
        value: PaymentMethod.DebitCard,
    },
    {
        label: 'Gana',
        value: PaymentMethod.Gana,
    },
    {
        label: 'Neki',
        value: PaymentMethod.Neki,
    },
    {
        label: 'Bancolombia',
        value: PaymentMethod.Bancolombia,
    },
] as const;

export function FundsTransferDialog({
    isOpen,
    onClose,
}: FundsTransferDialogProps) {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
        PaymentMethod.Cash,
    );

    return (
        <Incubator.Dialog
            visible={isOpen}
            onDismiss={onClose}
            direction="left"
            width="100%"
            containerStyle={{
                height: '100%',
                maxHeight: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
            }}
            modalProps={{
                statusBarTranslucent: true,
            }}
        >
            <View width="100%" height="100%" paddingH-20 paddingV-50 spread>
                <View
                    style={{
                        rowGap: 10,
                    }}
                >
                    <Text
                        text60BO
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Lionel Messi
                    </Text>
                    <Text text60>
                        <Text text60BO>Saldo Actual: </Text>
                        {formatAmount(450)}
                    </Text>
                    <View marginT-20>
                        <Picker
                            value={paymentMethod}
                            placeholder="Método de Pago"
                            text60
                            floatingPlaceholder
                            mode={Picker.modes.SINGLE}
                            onChange={(value) => {
                                if (typeof value !== 'number') {
                                    return;
                                }
                                setPaymentMethod(value);
                            }}
                            fieldStyle={{
                                ...Dividers.d10,
                            }}
                        >
                            {PaymentMethods.map((item) => (
                                <Picker.Item
                                    key={item.value}
                                    label={item.label}
                                    value={item.value}
                                />
                            ))}
                        </Picker>
                        <TextField
                            text60
                            placeholder="Monto"
                            floatingPlaceholder
                            fieldStyle={{
                                ...Dividers.d10,
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        rowGap: 10,
                    }}
                >
                    <Button label="Siguiente" />
                    <Button label="Cancelar" outline onPress={onClose} />
                </View>
            </View>
        </Incubator.Dialog>
    );
}
