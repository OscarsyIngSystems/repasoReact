
export const TiposBasicos = () => {

const nombre : string  = 'Oscar';
const edad: number = 32;
const esActivo : boolean = true;
const poderes: string[] = ['volar','velocidad','Respirar bajo el agua'];

  return (
    <>
        <h3>Tipos Básicos</h3>
        {nombre}, {edad}, { (esActivo) ? 'Activo' : 'No activo'}
        <br />
        {poderes.join(', ')}
    </>
  )
}
