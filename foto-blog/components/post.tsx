import { Button, Avatar, Image, Input, Spacer, Divider } from "@nextui-org/react";
import { Post as PostType } from "@/tipos/tiposPost";
import { HeartFilledIcon } from "./icons";
import { useState } from "react";

export type PostProps = PostType & {
    nuevoComentario: (comentario: string, postId: number) => void,
    meGusta: (postId: number) => void
};

export const Post = (props: PostProps) => {

    const [comentario, setComentario] = useState<string>('');

    const agregarComentario = () => {
        props.nuevoComentario(comentario, props.idPost);
        setComentario('');
    }

    return (
        <div className="flex flex-row items-left justify-left mt-8">
            <Image radius="lg" width={500} src={props.imagenUrl} alt="alt prueba" />
            <Spacer x={4} />
            <div className="flex flex-col items-left justify-left mb-3">
                <div className="flex flex-row items-center justify-left mb-3">
                    <Avatar style={{ backgroundColor: '#ef4444' }}>{props.usuario.nombreUsuario[0].toUpperCase()}</Avatar>
                    <Spacer x={4} />
                    <span className="font-extrabold">{props.usuario.nombreUsuario}</span>
                    <Spacer x={4} />
                    <p>{props.descripcion}</p>
                </div>
                <div className="flex flex-col items-left mb-3 min-h-28 overflow-auto" style={{
                    maxHeight: '125px',
                    overflow: 'auto'
                }}>
                    {props.comentarios.map((comentario: string, index: number) => (
                        <p key={index} className="mt-2 text-sm">{comentario}</p>
                    ))}
                </div>
                <div className="flex flex-col mt-3 mb-3">
                    <div className="flex flex-row items-left justify-left">
                        <Button onClick={() => {
                            props.meGusta(props.idPost);
                        }}
                            isIconOnly
                        >
                            <HeartFilledIcon />
                        </Button>
                    </div>
                    <Spacer x={4} />
                    <span className="font-extrabold">{props.totalMeGusta} Me gusta</span>
                </div>
                <Divider orientation="horizontal" />
                <div className="flex flex-col items-left justify-left mt-2">
                    <Input value={comentario} onChange={(event) => {
                        setComentario(event.target.value)
                    }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                agregarComentario()
                            }
                        }} type="text" variant="underlined" placeholder="Agregar comentario" />
                </div>
            </div>
        </div>
    );
};
