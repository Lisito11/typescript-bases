(() => {

    // type Hero = {
    //     name: string;
    //     age?: number;
    //     powers: number[];
    //     getName?: () => string;
    // }

    interface Client  {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string) : string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Lisanny',
        age: 21,
        address: {
            id: 125,
            zip: 'AFT-123',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.address.city;
        },
    }


    const client2: Client = {
        name: 'Laura',
        age: 30,
        address: {
            id: 125,
            zip: 'AFT-123',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.address.city;
        },
    }

})()
