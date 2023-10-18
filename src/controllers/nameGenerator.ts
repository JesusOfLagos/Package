export class NameGenerator {
    public firstnames: string[] = ['John', 'Doe', 'Jane', 'Doe'];
    public lastnames: string[] = ['John', 'Doe', 'Jane', 'Doe'];
    public names: string[] = ['John', 'Doe', 'Jane', 'Doe'];
    public namesCount: number = 0;
    public middleName: string[] = ['John', 'Doe', 'Jane', 'Doe'];
    
    public getNames(): string[] {
        return this.names;
    }

    public getName(index: number): string {
        return this.names[index];
    }

    public addName(name: string): void {
        this.names.push(name);
    }

    public removeName(index: number): void {
        this.names.splice(index, 1);
    }

    public updateName(index: number, name: string): void {
        this.names[index] = name;
    }

    public getNamesCount(): number {
        return this.names.length;
    }

    public getNamesCountText(): string {
        return `There are ${this.getNamesCount()} names in the list`;
    }

    public getNamesCountTextWithParam(param: string): string {
        return `There are ${this.getNamesCount()} names in the list ${param}`;
    }

    public getRandomName(): string {
        return this.names[Math.floor(Math.random() * this.names.length)];
    }
}


