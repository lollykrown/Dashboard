'use client'
import { useFormStatus } from 'react-dom'

export const FormSubmit = () => {
    const status = useFormStatus()
    // console.log(status)

    if(status.pending){
        return <p>Loading</p>
    }
  return (
    <p className="form-actions flex justify-between">
    <button className="btn mr-3" type="reset">Reset</button>
    <button className="btn" disabled={status.pending}>Create Post</button>
  </p>
  )
}
