export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'green');
    static readonly TYPESCRIPT = new Tag('Typescript', 'red');
    static readonly NODEJS = new Tag('Node.js', 'green');
    static readonly MYSQL = new Tag('MySQL', 'purple');
    static readonly AWS = new Tag('AWS', 'blue');


    private constructor(private readonly key: string, public readonly color: string) { 

    }

    toString() {
        return this.key;
    }
}