interface ICar {
  engine: string;
  wheelDiameter: number;
  suspension: string;
  getInfo(): void;
}

class PoorCar implements ICar {
  engine: string;
  wheelDiameter: number;
  suspension: string;

  constructor() {
    this.engine = "Slow";
    this.wheelDiameter = 16;
    this.suspension = "not comfortable";
  }

  getInfo() {
    console.log(
      `Engine: ${this.engine}, wheel diameter: ${
        this.wheelDiameter
      }, suspension: ${this.suspension}`
    );
  }
}

class SimpleCar implements ICar {
  engine: string;
  wheelDiameter: number;
  suspension: string;

  constructor() {
    this.engine = "200hp";
    this.wheelDiameter = 18;
    this.suspension = "comfortable";
  }

  getInfo() {
    console.log(
      `Engine: ${this.engine}, wheel diameter: ${
        this.wheelDiameter
      }, suspension: ${this.suspension}`
    );
  }
}

class RichCar implements ICar {
  engine: string;
  wheelDiameter: number;
  suspension: string;

  constructor() {
    this.engine = "100500hp";
    this.wheelDiameter = 25;
    this.suspension = "SUPER comfortable";
  }

  getInfo() {
    console.log(
      `Engine: ${this.engine}, wheel diameter: ${
        this.wheelDiameter
      }, suspension: ${this.suspension}`
    );
  }
}

interface IRepairCar {
    repairCost(): void
}

class RepairPoorCar implements IRepairCar {
    repairCost() {
        console.log('Repair cost: 50$')        
    }
}

class RepairSimpleCar implements IRepairCar {
    repairCost() {
        console.log('Repair cost: 200$')        
    }
}

class RepairRichCar implements IRepairCar {
    repairCost() {
        console.log('Buy new car :D')        
    }
}

interface CarFactory {
    createCar(): ICar; 
    repairCar(): IRepairCar;
}

class CreatePoorCarFactory implements CarFactory {
    public createCar() : ICar {
        return new PoorCar();
    }

    public repairCar(): IRepairCar {
        return new RepairPoorCar();
    }
}

class CreateSimpleCarFactory implements CarFactory {
    public createCar() : ICar {
        return new SimpleCar();
    }

    public repairCar(): IRepairCar {
        return new RepairSimpleCar();
    }
}

class CreateRichCarFactory implements CarFactory {
    public createCar() : ICar {
        return new RichCar();
    }

    public repairCar(): IRepairCar {
        return new RepairRichCar();
    }
}

const factory: CarFactory = new CreateRichCarFactory();

const myCar = factory.createCar();
myCar.getInfo(); //Engine: 100500hp, wheel diameter: 25, suspension: SUPER comfortable

const check = factory.repairCar();
check.repairCost(); //Buy new car :D
