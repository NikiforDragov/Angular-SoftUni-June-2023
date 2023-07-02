class Melon {
  weight: number;
  melonSort: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }
}

class Watermelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): void {
    console.log('Element: Water');
    console.log('Sort: ' + this.melonSort);
    console.log('Element index: ' + this.elementIndex);
  }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
      }
    
      get elementIndex(): number {
        return this.weight * this.melonSort.length;
      }
    
      toString(): void {
        console.log('Element: Fire');
        console.log('Sort: ' + this.melonSort);
        console.log('Element index: ' + this.elementIndex);
      }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
      }
    
      get elementIndex(): number {
        return this.weight * this.melonSort.length;
      }
    
      toString(): void {
        console.log('Element: Earth');
        console.log('Sort: ' + this.melonSort);
        console.log('Element index: ' + this.elementIndex);
      }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
      }
    
      get elementIndex(): number {
        return this.weight * this.melonSort.length;
      }
    
      toString(): void {
        console.log('Element: Air');
        console.log('Sort: ' + this.melonSort);
        console.log('Element index: ' + this.elementIndex);
      }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");

