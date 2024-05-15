import { Post as PostComponent } from '@/components/post'
import DefaultLayout from "@/layouts/default";
import { cargarPosts } from '../lib/posts'
import { Post } from '../tipos/tiposPost'
import { useState } from 'react';

export async function getStaticProps() {
	const datosPosts = await cargarPosts();
	return {
		props: {
			datosPosts,
		},
	};
}

export default function IndexPage({ datosPosts }: { datosPosts: Post[] }) {

	const [posts, updatePosts] = useState(datosPosts);

	const nuevoComentario = (comentario: string, postId: number) => {
		updatePosts(posts.map(postActual => {
			if (postActual.idPost === postId) {
				postActual.comentarios.push(comentario);
			}
			return postActual;
		}));
	};

	const meGusta = (postId: number) => {
		updatePosts(posts.map(postActual => {
			if (postActual.idPost === postId) {
				postActual.totalMeGusta += 1;
			}
			return postActual;
		}));
	};

	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				{posts.map(post => <PostComponent
					key={post.idPost}
					{...post}
					nuevoComentario={nuevoComentario}
					meGusta={meGusta}
				></PostComponent>)}
			</section>
		</DefaultLayout>
	);
}
