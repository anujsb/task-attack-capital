import Blog from '@/components/Blog'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='m-20'>
        <div>
            <h1>
                hi, User
            </h1>
            <Button className='text-white'>
                Add Blog
            </Button>
        </div>
        <div>
            <h1>
                your Blogs
            </h1>
            <div>
                <Blog/>
            </div>
        </div>
    </div>
  )
}

export default page