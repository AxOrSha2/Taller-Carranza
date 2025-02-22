export default function Navegador({seccion, setSeccion}){
    
    const cambiarSession = function(...e){
       
    }
    return(
        <nav>
            <div className="logo">
                <img src="/logo192.png"></img> 
            </div> 
            <ul>
                <li><a className={seccion==="clientes"?"btn-navegador btn-navegador-activo":"btn-navegador"} 
                    onClick={(e)=>{
                    e.preventDefault();         
                    setSeccion('clientes')
                    }}  href="none"><span>Clientes</span></a></li>
                <li><a className={seccion==="servicios"?"btn-navegador btn-navegador-activo":"btn-navegador"} 
                    onClick={(e)=>{
                    e.preventDefault();         
                    setSeccion('servicios')
                    }}  href="none"><span>Servicios</span></a></li>
                <li><a className={seccion==="usuarios"?"btn-navegador btn-navegador-activo":"btn-navegador"} 
                    onClick={(e)=>{
                    e.preventDefault();         
                    setSeccion('usuarios')
                    }} 
                    href="none"><span>Usuarios</span></a></li>
                <li><a className={seccion==="reportes"?"btn-navegador btn-navegador-activo":"btn-navegador"} 
                    onClick={(e)=>{
                    e.preventDefault();         
                    setSeccion('reportes')
                    }}  href="none"><span>Reportes</span></a></li>
            </ul> 
        </nav>
    )
}