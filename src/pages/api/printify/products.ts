import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Image {
  src: string;
}

interface Option {
  name: string;
  values: string[];
}

interface Product {
  id: string;
  title: string;
  images: Image[];
  options: Option[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.PRINTIFY_API_KEY) {
    console.error("La clave PRINTIFY_API_KEY no está configurada.");
    return res.status(500).json({ message: "Falta PRINTIFY_API_KEY en la configuración del servidor." });
  }

  try {
    const response = await axios.get<{ data: Product[] }>(
      "https://api.printify.com/v1/shops/19620020/products.json",
      {
        headers: { Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}` },
      }
    );

    if (!response.data?.data) {
      return res.status(500).json({ message: "No se encontraron productos en Printify." });
    }

    const products = response.data.data.map((producto) => ({
      id: producto.id,
      title: producto.title,
      images: producto.images.map((image) => ({ src: image.src })),
      tallas: producto.options.find((option) => option.name.toLowerCase() === "size")?.values || [],
      colores: producto.options.find((option) => option.name.toLowerCase() === "color")?.values || [],
    }));

    res.status(200).json({ products });
  } catch (error) {
    console.error("Error al obtener productos desde Printify:", error);
    res.status(500).json({ message: "Error al obtener productos desde Printify." });
  }
}