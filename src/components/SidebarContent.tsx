import React, { useState } from "react";
import { ElementType } from "react";

interface SidebarContentProps {
  icon: ElementType;
  info?: string;
  onclick?: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ icon, info, onclick }) => {
    const [text, setText] = useState("");  
    const onCEvent = () => {
      if (onclick) {
        window.location.href = onclick;
      }
    }
  // useEffect(() => {
  //     Realizar solicitud a la base de datos para obtener el nombre de la base de datos en la raíz
  //     Aquí debes implementar la lógica para obtener el nombre de la base de datos desde la BD
  //     const obtenerNombreBaseDeDatos = async () => {
  //         try {
  //             const response = await fetch("URL_DE_LA_API_PARA_OBTENER_NOMBRE_BD");
  //             const data = await response.json();
  //             const nombreBD = data.nombre; // Suponiendo que el nombre de la base de datos se encuentra en la propiedad "nombre" del objeto de respuesta
  //             setText(nombreBD);
  //         } catch (error) {
  //             console.error("Error al obtener el nombre de la base de datos:", error);
  //         }
  //     };

  //     obtenerNombreBaseDeDatos();
  // }, []);

  return (
    <div className="text-sidebar">
      <p onClick={onCEvent}>
        {React.createElement(icon)} {typeof info === "string" && <span>{info}</span>}
        {/* {IconComponent()} {text} */}
      </p>
    </div>
  );
};

export default SidebarContent;