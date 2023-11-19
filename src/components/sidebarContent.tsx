import React, { useState } from "react";
import { BiSolidCoinStack } from "react-icons/bi";
import { IoSettings, IoReloadCircle, IoHomeSharp } from "react-icons/io5";

interface SidebarContentProps {
  icon: string;
  info?: string;
  onclick?: () => void; // Haz la propiedad opcional con ?
}

const SidebarContent: React.FC<SidebarContentProps> = ({ icon, info, onclick }) => {
    const [text, setText] = useState("");  

  const IconComponent = () => {
    if (icon === "settings") {
      return <IoSettings />;
    } else if (icon === "reload") {
      return <IoReloadCircle />;
    } else if (icon === "home") {
      return <IoHomeSharp />;
    } else {
      return <BiSolidCoinStack />;
    }
  };

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
      <p onClick={onclick}>
        <IconComponent /> {typeof info === "string" && <span>{info}</span>}
        {/* {IconComponent()} {text} */}
      </p>
    </div>
  );
};

export default SidebarContent;