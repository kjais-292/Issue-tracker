'use client';
import {TextField,Button} from '@radix-ui/themes'
import {Callout,Text} from '@radix-ui/themes'
import {useForm,Controller} from 'react-hook-form'
import axios from 'axios'
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import {useState} from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import {issueSchema} from '@/app/validationSchemas'
import {z} from 'zod'
import {ErrorMessage,Spinner} from '@/app/components'
import dynamic from 'next/dynamic'
import IssueForm from '../_components/IssueForm'

// const SimpleMDE=dynamic(()=>import('react-simplemde-editor'),{
//   ssr:false
// })
// type IssueForm=z.infer<typeof issueSchema>;
const NewIssuePage = () => {
  // const router=useRouter();
  // const [error,setError]=useState('');
  // const [isSubmitting,setSubmitting]=useState(false);
  // const {register,control,handleSubmit,formState:{errors}}=useForm<IssueForm>({
  //   resolver:zodResolver(issueSchema)
  // });
  return (
    <IssueForm />
    // <div className="max-w-xl mb-5">
    // {error&&<Callout.Root color="red" className="mb-5"><Callout.Text>{error}</Callout.Text></Callout.Root>}
    //   <form className="space-y-3" 
    // onSubmit={handleSubmit(async(data)=>{
    //   try{
    //     setSubmitting(true);
    //     await axios.post('/api/issues',data);router.push('/issues')
    //   }
    //   catch(error){
    //     setSubmitting(false);
    //     setError('An unexpected error occured')
    //   }
      
    // })}>
    //         <TextField.Root size="2" placeholder="Title" radius="large" {...register('title')}/>
    //         <ErrorMessage>{errors.title?.message}</ErrorMessage>
    //         <Controller name="description" control={control} render={({field})=><SimpleMDE placeholder="Description"/>}/>
    //         <ErrorMessage>{errors.description?.message}</ErrorMessage>
    //         <Button size="3" disabled={isSubmitting}>Submit New Issue{isSubmitting&&<Spinner/>}</Button>
    // </form>
    // </div>
  )
}

export default NewIssuePage