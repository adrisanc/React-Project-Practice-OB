import React,{useState, useRef, useEffect} from 'react'

const Ejemplo2 = () => {
    // Vamos a creas dos contadores distintos
    // cada uno en un estado diferente
    const [contador1, serContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef)() para asociar una varible
    // Con un elemento del DOM del componente (vita HTML)

    const miRef = useRef();
    
    function incrementar1(){
        serContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    // Trabajando con useEffect()

    /**
     *  ? Cas1: Ejecutar siempre un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(()=>{
    //     console.log('CAMBIO DE ESTADO EN EL COMPONENTE');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // })

    /**
     * ? Caso 2: Ejecutar SOLO cuando cambie contador1
     * *Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * *En caso de que cambie contador2, no habra ejecución
     * */

    // useEffect(()=>{
    //     console.log('CAMBIO DE ESTADO EN EL CONTADOR 1');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // },[contador1])

    /**
     * ? Caso 3: Ejecutar SOLO cuando cambie contador1 o contador 2
     * *Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * *Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     * */

    useEffect(()=>{
        console.log('CAMBIO DE ESTADO EN EL CONTADOR 1 o CONTADOR 2');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef);
    },[contador1, contador2])

  return ( 
    <div>
        <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
        <p>CONTADOR 1: {contador1}</p>
        <p>CONTADOR 2: {contador2}</p>
        {/* Ejemplo referenciado */}
        <h2 ref={miRef}>Ejemplo de elemento referenciado</h2>
        <div>
            <button onClick={incrementar1}>Aumentar contador 1</button>
            <button onClick={incrementar2}>Aumentar contador 2</button>
        </div>
    </div>
  )
}
export default Ejemplo2;
