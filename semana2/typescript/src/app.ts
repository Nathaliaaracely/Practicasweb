// gestion_cultivos.ts

// Interfaces
interface ICultivo {
    id: number;
    nombre: string;
    tipo: string;
    fechaSiembra: string;
    ubicacion: string;
    rendimientoEsperado?: number;
    }
    
    // Mensaje inicial
    let mensaje: string = "🌱 Bienvenido al sistema de gestión de cultivos agrícolas";
    console.log(mensaje);
    
    // Cultivo base
    const cultivoInicial: ICultivo = {
    id: 1,
    nombre: "Maíz",
    tipo: "Cereal",
    fechaSiembra: "2024-05-01",
    ubicacion: "Parcela 1"
    };
    
    // Arreglo de cultivos
    const cultivos: ICultivo[] = [
    {
    id: 101,
    nombre: "Tomate",
    tipo: "Hortaliza",
    fechaSiembra: "2024-04-10",
    ubicacion: "Parcela 2"
    },
    {
    id: 102,
    nombre: "Papa",
    tipo: "Tubérculo",
    fechaSiembra: "2024-03-25",
    ubicacion: "Parcela 3",
    rendimientoEsperado: 2000
    }
    ];
    
    // Agregar nuevos cultivos de forma directa
    cultivos.push({
    id: 103,
    nombre: "Zanahoria",
    tipo: "Hortaliza",
    fechaSiembra: "2024-04-15",
    ubicacion: "Parcela 4"
    });
    
    cultivos.push(cultivoInicial);
    
    // Función clásica para agregar cultivo
    function agregarCultivo(cultivo: ICultivo): void {
    cultivos.push(cultivo);
    console.log("✔ Cultivo agregado:", cultivo);
    }
    
    // Uso de la función agregarCultivo
    const nuevoCultivo: ICultivo = {
    id: 104,
    nombre: "Frijol",
    tipo: "Leguminosa",
    fechaSiembra: "2024-05-01",
    ubicacion: "Parcela 5"
    };
    agregarCultivo(nuevoCultivo);
    
    // Función con callback
    function agregarConCallback(cultivo: ICultivo, callback: (c: ICultivo) => void) {
    cultivos.push(cultivo);
    callback(cultivo);
    }
    
    const cultivoCallback: ICultivo = {
    id: 105,
    nombre: "Cebolla",
    tipo: "Bulbo",
    fechaSiembra: "2024-05-02",
    ubicacion: "Parcela 6"
    };
    
    agregarConCallback(cultivoCallback, (c) => {
    console.log("🔄 Cultivo agregado con callback:", c);
    });
    
    // Función con promesa (simula IA o procesamiento asincrónico)
    function agregarCultivoAsync(cultivo: ICultivo): Promise<ICultivo> {
    return new Promise((resolve) => {
    cultivos.push(cultivo);
    setTimeout(() => {
    resolve(cultivo);
    }, 1000);
    });
    }
    
    // Función main con async/await
    async function main() {
    try {
    const cultivoAsync = await agregarCultivoAsync({
    id: 106,
    nombre: "Trigo",
    tipo: "Cereal",
    fechaSiembra: "2024-05-03",
    ubicacion: "Parcela 7"
    });
    console.log("📦 Cultivo agregado de forma asíncrona:", cultivoAsync);
    } catch (error) {
    console.error("❌ Error al agregar cultivo:", error);
    } finally {
    console.log("🔚 Proceso de registro de cultivos finalizado.");
    }
    }
    
    main();