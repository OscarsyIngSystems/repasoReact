interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion:  Direccion;
    
}

interface Direccion {
    pais: string;
    casaNo : number;
}


export default function ObjetosLiterales() {

const persona: Persona = {
    nombreCompleto: 'Oscar',
    edad: 32,
    direccion: {
        pais: 'Mexico',
        casaNo: 26
    }
}

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona,null,2)}
            </pre>
        </code>
    </>
  )
}
