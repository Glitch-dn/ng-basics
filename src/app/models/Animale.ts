// La definizione di un tipo di dato custom si può fare con:
// interface, class o type

//type
export type Animale = {
    nome: string;
    razza: string;
}

//interface
export interface AnimaleInterface {
    nome: string;
    razza: string;
}

//differenze tra type e interface:
// - type può essere usato per definire un alias per un tipo esistente, mentre interface è specificamente progettato per definire la forma di un oggetto.
// - type può essere usato per definire tipi primitivi, unioni e tuple, mentre interface è limitato alla definizione di oggetti.
// - type può essere esteso usando le unioni, mentre interface può essere estesa usando l'ereditarietà.