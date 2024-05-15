import path from 'path'
import fs from 'fs'
import { Post } from '@/tipos/tiposPost';

export async function cargarPosts(): Promise<Post[]> {
    const rutaArchivo = path.join(process.cwd(), 'json/posts.json');
    const datosJson = await fs.promises.readFile(rutaArchivo);
    const posts = JSON.parse(datosJson.toString()) as Post[];
  
    return posts;
  }
