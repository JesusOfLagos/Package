import { NameGenerator } from "./nameGenerator";

export class NameGeneratorTest extends NameGenerator {
    public getNames(): string[] {
        return this.names;
    }
}

// Object.defineProperty(NameGeneratorTest.prototype, 'names', { value: ['John', 'Doe', 'Jane', 'Doe'] });

NameGeneratorTest.prototype.names = ['John', 'Doe', 'Jane', 'Doe'];

