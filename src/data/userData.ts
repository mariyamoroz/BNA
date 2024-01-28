// hardcoded data
export const userData = {
    abbr: 'PM',
    name: 'Peter',
    surname: 'Morgan',
    currency: '$',
    currentBalance: 191,
    prepaidCards: [{
        id: 1001,
        balance: 0,
        currency: '$',
        isActive: false,
        numberOfCard: '4588 •••• •••• 0092',
        backgroundImage: '/assets/images/card-background.svg',
    }],
    bankAccounts: [{
        id: '2001',
        name: 'Signature RBC visa',
        number: '****3234'
    }, {
        id: 2002,
        name: 'TD Bank Debit',
        number: '****0024'
    }],
    transactions: [{
        id: 3001,
        place: 'Cineplex Inc.',
        date: '2022-08-23T16:50:22-07:00',
        type: 'Payment',
        currency: '$',
        sum: 42.5,
        isXEPPTBank: false,
    }, {
        id: 3002,
        place: 'RBC Royal Bank',
        date: '2022-09-19T16:50:22-07:00',
        type: 'Transfer from bank',
        currency: '$',
        sum: 500,
        isXEPPTBank: false,
    }, {
        id: 3003,
        place: 'Skyline Restaurant',
        date: '2022-08-01T16:50:22-07:00',
        type: 'Payment',
        currency: '$',
        sum: 110.5,
        isXEPPTBank: false,
    }, {
        id: 3004,
        place: 'XEPPT Bank',
        date: '2022-09-01T16:50:22-07:00',
        type: 'Payment',
        currency: '$',
        sum: 150.5,
        isXEPPTBank: true,
    }, {
        id: 3005,
        place: 'XEPPT Bank',
        date: '2022-08-01T16:50:22-07:00',
        type: 'Transfer from bank',
        currency: '$',
        sum: 250.7,
        isXEPPTBank: true,
    }]
}