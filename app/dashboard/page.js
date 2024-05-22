// import { storePost } from '@/lib/posts';
import { FormSubmit } from "@/components/form-submit";
import { redirect } from 'next/navigation'
import { useActionState } from 'react'

export default function NewPostPage() {

  async function createPost(formData) {
    "use server";
    const post = Object.fromEntries(formData)
    // const title = formData.get('title');
    // const image = formData.get('image');
    // const content = formData.get('content');

    let errors =[]
    if(!post.title || post.title.trim ===0){
      errors.push('Title is required')
    }
    if(!post.content || post.content.trim ===0){
      errors.push('Content is required')
    }
    if(!post.image){
      errors.push('Image is required')
    }

    console.log('post',post)
    
    redirect('/')
    // storePost({
    //   imageUrl: '',
    //   title,
    //   content,
    //   userId: 1
    // })
  }
//  const [ state, formAction ] = useActionState(createPost, {})

  return (
    <div className="space-y-4 flex flex-col justify-center bg-slate-300 h-screen items-center">
      <h1>Create a new post</h1>
      <form action={createPost} className="bg-slate-100">
        <p className="form-control">
          <label htmlFor="title" className="mr-2">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content" className="text-start">Content</label>
          <textarea id="content" name="content" rows="3" />
        </p>
        <FormSubmit />
      </form>
    </div>
  );
}
