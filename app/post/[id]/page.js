import { axiosPots } from "@/config/Axios";
import CardEditPost from "./components/CardEditPost";

export default async function PostPage({ params }) {
  const awaitedParams = await params; 
  const { id } = awaitedParams;

  const response = await axiosPots(`/posts/${id}`);
  const post = response.data;

  return <CardEditPost post={post} />;
}