export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'green');
    static readonly TYPESCRIPT = new Tag('Typescript', 'red');
    static readonly NODEJS = new Tag('Node.js', 'green');
    static readonly MYSQL = new Tag('MySQL', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'red');
    static readonly RENDER = new Tag('Render', 'green');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'purple');
    static readonly PYTHON = new Tag('Python', 'red');
    static readonly C_PLUS = new Tag('C++', 'red');
    static readonly AWS = new Tag('AWS', 'blue');
    static readonly STREAMLIT = new Tag('Streamlit', 'green');
    static readonly SCIKITLEARN = new Tag('Scikitlearn', 'black');
    static readonly PANDAS = new Tag('Pandas', 'black');
    static readonly NUMPY = new Tag('Numpy', 'black');
    static readonly MATPLOTLIB = new Tag('Matplotlib', 'black');
    static readonly CSS = new Tag('CSS', 'red');
    static readonly HTML = new Tag('HTML', 'red');
    static readonly DBEAVER = new Tag('DBeaver', 'purple');
    static readonly FIREBASE = new Tag('Firebase', 'green');

    private constructor(private readonly key: string, public readonly color: string) { 

    }

    toString() {
        return this.key;
    }
}