import EventsInterface from './index'

export default class Events implements EventsInterface {
    public getNext() {
        return {
            title: 'Событие',
            description: 'Описание',
            options: [
                // tslint:disable-next-line:ban-types
                { title: 'Опция 1', description: 'Описание', consequences: (state: Object) => state },
                // tslint:disable-next-line:ban-types
                { title: 'Опция 2', description: 'Описание', consequences: (state: Object) => state },
            ],

        }
    }
}
