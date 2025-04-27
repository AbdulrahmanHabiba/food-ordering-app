import {cache} from "@/lib/cache";
import {db} from "@/lib/prisma";

export const getCategories =  cache(
    ()=>{
        return db.category.findMany({
            orderBy :{
                order : 'asc'
            }
        })
    } , ['categories'] , {revalidate : 3600}
)