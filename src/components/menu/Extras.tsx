import React from 'react';
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {formatCurrency} from "@/lib/formatters";
import {Extra} from "@prisma/client";

const Extras = ({extras , selectedExtras , setSelectedExtras} : {extras : Extra[] , selectedExtras: Extra[] , setSelectedExtras : React.Dispatch<React.SetStateAction<Extra[]>>}) => {

    const handleExtra = (extra : Extra)=>{
        if (selectedExtras.find((e)=> e.id === extra.id) ) {
            const filteredSelectedExtras = selectedExtras.filter((item)=> item.id !== extra.id)
            setSelectedExtras(filteredSelectedExtras)
        }
        else {
            setSelectedExtras((prev)=> [...prev , extra])
        }

    }

    return (
        <div className="space-y-3">
            {extras.map((extra) => (
                <div
                    key = {extra.id}
                    className='flex items-center space-x-2 border border-gray-100 rounded-md p-4'
                >
                    <Checkbox
                        id={extra.id}
                        onClick={()=>handleExtra(extra)}
                        checked={Boolean(selectedExtras.find((e)=> e.id === extra.id)) }

                    />
                    <Label htmlFor={extra.id}>
                        {extra.name} : {formatCurrency(extra.price)}
                    </Label>
                </div>
            ))}

        </div>
    );
};

export default Extras;