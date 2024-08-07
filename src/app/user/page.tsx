"use client";

import { useMutation, useQuery } from 'convex/react';
import React from 'react'
import { api } from '../../../convex/_generated/api';
import { Button } from '@/components/ui/button';

const UserPage = () => {

    const users = useQuery(api.user.getuser);
    const deleteuser = useMutation(api.user.deleteuser);       

  return (
    <div className='p-10 flex flex-col gap-4'>
        <h1 className='text-5xl'> All Members are here in real-time</h1>
        {users?.map((user)=>{
            return <div key={user._id} className='flex gap-5 items-center'>
                <span>{user.first_name} {user.last_name} {user.age}</span>
                <Button onClick={async() => {
                  await deleteuser({id: user._id});
                }}>Delete User</Button>
            </div>
        })}
      
    </div>
  )
}

export default UserPage
