import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Corolla'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Corolla'
        },
    ];

    public findAll() {
        return this.cars;
    }

    public findOneById(id) {
        const car = this.cars.find(c => c.id === id);
        if (!car)
            throw new NotFoundException(`Car with id ${id} not found!`);
        return car;
    }
}
