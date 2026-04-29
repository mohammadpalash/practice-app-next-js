"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'



export default function Popup() {
    return (
        <div><Button variant="outline" size="lg" className="cursor-pointer" onClick={() => toast.error("Your information is updated successfully", { position: "bottom-center", style: { background: "red", color: "white", fontSize: "20px" } })} >Hello World</Button></div>
    )
}